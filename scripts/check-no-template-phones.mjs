#!/usr/bin/env node
/**
 * Fail the build if template or hardcoded Las Vegas office phones appear in site source.
 * Phone display on the site must come from SITE_PHONE in lib/contact.ts only.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_DIRS = ["app", "components", "lib", "public"];

const BANNED_SUBSTRINGS = [
  "222-1964",
  "2221964",
  "500-1942",
  "5001942",
  "820-5408",
  "8205408",
  "tel:+1702",
  "tel:+1-702",
  "tel:+1 702",
];

const PHONE_REGEX = /(?:\(?702\)?[\s.\-)]{0,3}\d{3}[\s.\-]?\d{4}|702\d{7})/i;

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === "node_modules" || ent.name === ".next") continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const violations = [];

for (const relDir of SCAN_DIRS) {
  const absDir = path.join(ROOT, relDir);
  if (!fs.existsSync(absDir)) continue;

  for (const file of walk(absDir)) {
    const rel = path.relative(ROOT, file);
    if (rel === "scripts/check-no-template-phones.mjs") continue;

    const text = fs.readFileSync(file, "utf8");
    const lines = text.split(/\r?\n/);

    lines.forEach((line, index) => {
      for (const banned of BANNED_SUBSTRINGS) {
        if (line.includes(banned)) {
          violations.push({ file: rel, line: index + 1, match: banned, text: line.trim() });
        }
      }
      const phoneMatch = line.match(PHONE_REGEX);
      if (phoneMatch) {
        violations.push({
          file: rel,
          line: index + 1,
          match: phoneMatch[0],
          text: line.trim(),
        });
      }
    });
  }
}

if (violations.length > 0) {
  console.error("check-no-template-phones: banned phone numbers found:\n");
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line} (${v.match})`);
    console.error(`    ${v.text}\n`);
  }
  process.exit(1);
}

console.log("check-no-template-phones: OK (no banned numbers in app/, components/, lib/, public/)");
