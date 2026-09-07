# FrontierLab

**The Price of One More Correct Answer** is a static React laboratoryTypeScript laboratory for testing cost-accuracy Pareto frontiers.

## Central falsifiable claim
Within this fixed, protocol-compatible ARC-AGI-1 snapshot, BDH-CQ's developer-reported 29.5% pass@2 at computed $0.0007 per task is Pareto-optimal among included systems. Its status can change with systems, protocols, and cost assumptions.

## Audience, prerequisites, objectives
For undergraduates, ML engineers, and data scientists with basic accuracy and inference-cost knowledge. Learners calculate domination, distinguish a ratio from a frontier, stress-test a claim, and distinguish BDH-CQ temporary inference state from trained parameters.

## Sixty-second journey
See the result, inspect exact chart data, learn domination, apply a cost multiplier, change the comparison set, add a challenger, then self-explain and answer the falsification question.

## Architecture and Pareto calculation
React state + pure TypeScript functions + SVG, with static JSON/CSV. A point is removed from the frontier if any eligible point has cost <= and accuracy >=, with at least one strict improvement. Complexity is O(n^2).

## Evidence boundaries
- **Live:** validation, filters, adjusted scenario cost, dominance, frontier, ratio, CSV export.
- **Precomputed:** explanatory text and static source registry.
- **Sourced:** BDH-CQ point from the 2026 preprint.
- **Hypothetical:** learner challenger, always labeled.
- **Illustrative:** two teaching points and the mechanism diagram.

The project does not run a BDH checkpoint or reproduce the benchmark. BDH-CQ is related to BDH but is not treated as identical. Demonstrations can update recurrent context and reasoning can iterate in latent state; parameters remain distinct from temporary state.

## Data methodology and classification
Strict comparison requires benchmark, split, pass metric, currency, and protocol compatibility. The snapshot has one sourced strict point because no additional point was admitted without complete verified fields. Every item has exactly one evidence category; see `docs/EVIDENCE_CLASSIFICATION.md`.

## Install and run
```bash
npm install
npm run dev
npm run validate:data
npm run test
npm run build
npm run preview
```

## Deployment
Vercel or Netlify: build `npm run build`, publish `dist`. GitHub Pages: set `VITE_BASE_PATH=/repo-name/` and publish `dist`. Details: `docs/DEPLOYMENT.md`.

## Reproducibility and limitations
Snapshot date: **2026-09-07**. Source values remain immutable; multipliers create scenario values. Limitations include developer-reported evidence, a narrow strict set, computed-cost assumptions, no uncertainty bars, no training/energy/latency dimensions, and no architectural causal inference.

## Credits, licenses, AI disclosure, citation
Code is MIT. Research sources retain their own terms. Dependencies and sources are in `docs/SOURCE_AND_LICENSE_RECORD.md`. AI assistance is disclosed in `docs/AI_ASSISTANCE_DISCLOSURE.md`. Cite with `CITATION.cff`.

## Team placeholders
Team name, members, institution, deadline, public URL, and repository URL are intentionally centralized in `CITATION.cff` and `submission/SUBMISSION_LINKS.md`.
