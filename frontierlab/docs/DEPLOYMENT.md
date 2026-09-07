# Deployment

## Vercel
Import repository, framework Vite, build `npm run build`, output `dist`.
## Netlify
Build `npm run build`, publish `dist`.
## GitHub Pages
Set `VITE_BASE_PATH=/REPOSITORY_NAME/`, run build, publish `dist` with Pages or an Actions workflow. Relative data/assets work; there is no client-side router, so refresh does not create route 404s. No secret, API key, or sign-in is required.
