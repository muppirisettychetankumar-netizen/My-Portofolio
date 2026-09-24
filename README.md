# M. Chetan Kumar — Portfolio

A lightweight, production-ready student developer portfolio built as a static site. It has **no runtime dependencies**, no backend, no API keys, and no AI Studio dependency.

## Run locally

```bash
npm run build
npm start
```

Open `http://localhost:3000`.

## Render

Create a **Static Site** on Render.

- Language / Runtime: `Node`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Start Command: **leave blank** (Static Site)

If you instead create a **Web Service**, use:
- Build Command: `npm ci && npm run build`
- Start Command: `npm start`

The project includes a `package-lock.json`, so `npm ci` works on a clean Render build.

## Customize

Main content is in `src/index.html` and styling is in `src/style.css`.
