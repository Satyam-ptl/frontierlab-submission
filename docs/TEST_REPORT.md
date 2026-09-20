# Test report

Date: 2026-09-07

## Commands actually executed

- `npm install --no-audit --no-fund`: Pass, 53 packages installed after adding Node type definitions.
- `npm run validate:data`: Pass, 3 benchmark records validated.
- `npm run test`: Pass, 21 tests across 5 project test files.
- `npm run build`: Pass.

## Production output

- Vite 8.0.16
- 38 modules transformed
- `dist/index.html`: 0.48 kB, gzip 0.32 kB
- CSS bundle: 3.55 kB, gzip 1.47 kB
- JavaScript bundle: 209.04 kB, gzip 65.95 kB
- Build time reported by Vite: 331 ms

## Data validation

Required fields, value ranges, positive costs, and source URL presence were checked by `scripts/validate-data.mjs`. Original sourced evidence values are not overwritten by scenarios.

## Known limitations

Automated tests cover pure computation and control labels. Final team review should still include a physical mobile device, a production screen reader, all target hosting providers, and a manual check of every outgoing citation immediately before submission.
