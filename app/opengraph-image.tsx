import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt =
  'Homestead West Las Vegas — luxury single-story ranch homes from $910K | Dr. Jan Duffy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/jpeg'

export default async function OpenGraphImage() {
  const file = await readFile(join(process.cwd(), 'public/photos/sections/ranch-exterior-dusk.jpg'))
  const src = `data:image/jpeg;base64,${file.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{ position: 'absolute', inset: 0, objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(15,36,57,0.88) 0%, rgba(26,54,93,0.55) 70%, rgba(26,54,93,0.25) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '56px 64px',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 22, color: '#d4af37', fontWeight: 700, marginBottom: 12 }}>
            Homestead West | Homes by Dr Jan Duffy
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            Luxury single-story ranch homes from $910K
          </div>
          <div style={{ fontSize: 24, marginTop: 16, color: '#e2e8f0' }}>
            5592 Dapple Gray Rd, Las Vegas, NV 89149 · (702) 299-6607
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
