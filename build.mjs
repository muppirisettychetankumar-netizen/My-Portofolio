import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');
const publicDir = path.join(root, 'public');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(src, dist, { recursive: true });

try {
  await cp(publicDir, dist, { recursive: true, force: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log('Build complete: dist/');
