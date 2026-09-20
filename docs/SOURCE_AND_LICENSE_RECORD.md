# Source and license record

## Research and data sources
See `public/data/source_registry.json` for title, authors, year, URL, access date, claim, evidence category, limitation, and license. Key sources are the 2026 BDH-CQ preprint, the 2025 BDH paper, official BDH MIT repository, and ARC Prize leaderboard.

## Software dependencies
- React: UI rendering, latest resolved version in lockfile, MIT, https://react.dev/
- React DOM: browser rendering, MIT, https://react.dev/
- Vite: build/dev server, MIT, https://vite.dev/
- TypeScript: static typing, Apache-2.0, https://www.typescriptlang.org/
- Vitest: tests, MIT, https://vitest.dev/
- React Testing Library: component accessibility tests, MIT, https://testing-library.com/

Exact installed versions are recorded in `package-lock.json`. No external image assets are used.

Additional recent primary paper: Chollet, Knoop, Kamradt, and Landers, *ARC Prize 2024: Technical Report*, revised 2025, arXiv:2412.04604. It supports ARC-AGI-1 protocol context, benchmark limitations, and comparison of program-synthesis and test-time-training approaches; it does not verify BDH-CQ's later score.
