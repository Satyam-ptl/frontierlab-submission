# Deployment

## Vercel
Import repository, framework Vite, build `npm run build`, output `dist`.
## Netlify
Build `npm run build`, publish `dist`.
## GitHub Pages
Set `VITE_BASE_PATH=/frontierlab-submission/`, run build, publish `dist` with Pages or an Actions workflow. The site is available at https://satyam-ptl.github.io/frontierlab-submission/. Relative data/assets work; there is no client-side router, so refresh does not create route 404s. No secret, API key, or sign-in is required.
