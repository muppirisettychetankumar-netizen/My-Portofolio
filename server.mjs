import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.join(process.cwd(), 'dist');
const mime = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.json':'application/json' };
const server = http.createServer(async (req, res) => {
  try {
    let requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (requested === '/') requested = '/index.html';
    const file = path.normalize(path.join(root, requested));
    if (!file.startsWith(root)) throw new Error('bad path');
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    try {
      const data = await readFile(path.join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    } catch { res.writeHead(404); res.end('Not found'); }
  }
});
server.listen(process.env.PORT || 3000, () => console.log(`Portfolio running on http://localhost:${process.env.PORT || 3000}`));
