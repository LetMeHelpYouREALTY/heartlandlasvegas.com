#!/usr/bin/env node
/**
 * Upload git-backed JPEGs to Cloudflare hosted Images (custom IDs).
 * Git files in public/photos remain the backup; mediaSrc() prefers
 * https://imagedelivery.net/<hash>/<id>/public after this map is written.
 *
 * @see https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 * @see https://developers.cloudflare.com/api/resources/images/subresources/v1/methods/create/
 *
 * Env:
 *   CLOUDFLARE_API_TOKEN   required — permission: Account.Cloudflare Images Write
 *   CLOUDFLARE_ACCOUNT_ID  optional — defaults to Homestead West Images account
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const SECTIONS = path.join(ROOT, 'public/photos/sections')
const TEAM = path.join(ROOT, 'public/photos/team')
const MAP_FILE = path.join(ROOT, 'lib/cloudflare-image-ids.json')
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'
const HASH = process.env.NEXT_PUBLIC_CF_IMAGES_HASH?.trim() || 'byE6BTe9lNqo21V57n4aPQ'
const VARIANT = process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT?.trim() || 'public'

async function jpegFiles(dir) {
  try {
    const names = await readdir(dir)
    return names
      .filter((f) => f.toLowerCase().endsWith('.jpg'))
      .map((f) => ({
        id: f.replace(/\.jpg$/i, ''),
        filePath: path.join(dir, f),
        relative: path.relative(path.join(ROOT, 'public'), path.join(dir, f)),
      }))
  } catch {
    return []
  }
}

function isDuplicate(json) {
  const errors = Array.isArray(json?.errors) ? json.errors : []
  const blob = JSON.stringify(json).toLowerCase()
  return (
    errors.some((e) => /already exists|duplicate|conflict/i.test(String(e?.message || ''))) ||
    blob.includes('already exists') ||
    blob.includes('duplicate')
  )
}

async function deliveryOk(id) {
  const url = `https://imagedelivery.net/${HASH}/${id}/${VARIANT}`
  const res = await fetch(url, { method: 'HEAD' })
  return res.ok
}

async function uploadFile(token, item) {
  const form = new FormData()
  const bytes = await readFile(item.filePath)
  form.set('file', new Blob([bytes], { type: 'image/jpeg' }), path.basename(item.filePath))
  form.set('id', item.id)
  form.set('requireSignedURLs', 'false')
  form.set(
    'metadata',
    JSON.stringify({
      source: 'git',
      path: `/${item.relative.replace(/\\/g, '/')}`,
      site: 'homesteadwestlasvegas.com',
    }),
  )

  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  })
  const json = await res.json()
  return { res, json }
}

async function main() {
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  if (!token) {
    console.error(`Cloudflare hosted Images upload needs an API token with Images Write.

1. Open https://dash.cloudflare.com/profile/api-tokens
2. Create token → Cloudflare Images → Edit (Images Write)
3. Account: ${ACCOUNT_ID}
4. Run:

   CLOUDFLARE_API_TOKEN=… npm run upload:cf-images

Account hash (already in the app): ${HASH}
Delivery URL: https://imagedelivery.net/${HASH}/<image_id>/${VARIANT}
Do not orange-cloud the Vercel hostname.`)
    process.exit(1)
  }

  const existing = JSON.parse(await readFile(MAP_FILE, 'utf8'))
  const items = [...(await jpegFiles(SECTIONS)), ...(await jpegFiles(TEAM))]
  const nextMap = { ...existing }
  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const item of items) {
    const info = await stat(item.filePath)
    if (info.size > 10 * 1024 * 1024) {
      console.error(`fail ${item.id} larger than 10MB Images API limit`)
      failed += 1
      continue
    }

    if (nextMap[item.id] && (await deliveryOk(item.id))) {
      console.log(`skip ${item.id} (mapped and live)`)
      skipped += 1
      continue
    }

    const { res, json } = await uploadFile(token, item)
    if (json?.success && json.result?.id) {
      nextMap[item.id] = json.result.id
      uploaded += 1
      console.log(`uploaded ${item.id} → ${json.result.id}`)
      continue
    }

    if (isDuplicate(json) || res.status === 409) {
      nextMap[item.id] = item.id
      const live = await deliveryOk(item.id)
      console.log(`exists ${item.id} (${live ? 'live' : 'mapped, delivery not 200 yet'})`)
      skipped += 1
      continue
    }

    failed += 1
    console.error(`fail ${item.id}`, JSON.stringify(json.errors || json))
  }

  await writeFile(MAP_FILE, `${JSON.stringify(nextMap, null, 2)}\n`)
  console.log(`Wrote ${MAP_FILE} (uploaded ${uploaded}, reused ${skipped}, failed ${failed})`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
