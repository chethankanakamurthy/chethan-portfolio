// Image optimizer: resize long edge to <=2000px, JPEG q80, strip metadata.
// Reads pristine copies from public/Photos/_originals and overwrites the live files.
// Usage: back up originals to public/Photos/_originals first, then `node scripts/optimize-images.mjs`.
import sharp from 'sharp';
import { readdir, stat, rename, unlink, copyFile } from 'node:fs/promises';
import path from 'node:path';

const ORIG = 'public/Photos/_originals';
const MAX_EDGE = 2000;
const QUALITY = 80;

const targets = [{ src: `${ORIG}/profile.jpg`, dest: 'public/profile.jpg' }];
for (const f of await readdir(ORIG)) {
  const p = `${ORIG}/${f}`;
  if ((await stat(p)).isFile() && /\.(jpe?g)$/i.test(f)) {
    targets.push({ src: p, dest: `public/Photos/${f}` });
  }
}
for (const f of await readdir(`${ORIG}/Dances Of India`)) {
  if (/\.(jpe?g)$/i.test(f)) {
    targets.push({ src: `${ORIG}/Dances Of India/${f}`, dest: `public/Photos/Dances Of India/${f}` });
  }
}

const fmt = (b) => (b / 1024 / 1024).toFixed(2) + ' MB';
let before = 0, after = 0;

for (const { src, dest } of targets) {
  const beforeSize = (await stat(src)).size;
  const tmp = dest + '.tmp';
  await sharp(src)
    .rotate() // honor EXIF orientation before metadata is stripped
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  let outSize = (await stat(tmp)).size;
  if (outSize >= beforeSize) {
    await unlink(tmp);
    await copyFile(src, dest); // never bloat: keep the smaller original bytes
    outSize = beforeSize;
  } else {
    await rename(tmp, dest);
  }
  before += beforeSize;
  after += outSize;
  console.log(`${path.basename(dest).padEnd(16)} ${fmt(beforeSize).padStart(10)} -> ${fmt(outSize).padStart(10)}`);
}

console.log('-'.repeat(44));
console.log(`${'TOTAL'.padEnd(16)} ${fmt(before).padStart(10)} -> ${fmt(after).padStart(10)}  (${(100 * (1 - after / before)).toFixed(1)}% smaller)`);
