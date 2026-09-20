# Live defense guide

## 60 seconds
FrontierLab tests one bounded claim: BDH-CQ's reported 29.5% pass@2 at computed $0.0007 per ARC-AGI-1 task is non-dominated in the active compatible snapshot. The browser calculates dominance and the frontier live. Change cost assumptions, filter the set, or add a hypothetical challenger; a compatible point no more expensive and at least as accurate, with one strict improvement, falsifies the claim. BDH-CQ matters because it reports recurrent latent reasoning, but the chart neither runs the model nor proves that mechanism caused the low cost.

## 3-minute demo
1. Show the default chart and developer-reported label. 2. Open exploratory mode and select Teaching Point B to explain domination. 3. move the multiplier. 4. Add Challenger X at 0.0006 and 30%. 5. Read the textual falsification. 6. Open the BDH-CQ module. 7. State the causal and reproduction limitations.

## Technical trace
Data: `public/data/benchmark_snapshot.json`. Validation: `scripts/validate-data.mjs`. Frontier: `src/lib/pareto.ts`. Dominance explanation: `src/lib/dominance.ts`. Hypothetical points carry `hypothetical: true`. Adjusted costs are separate fields.

## Judge Q&A
1. **Why on frontier?** No active compatible point dominates it.
2. **What removes it?** A compatible point no more costly and no less accurate, strictly better on one.
3. **Ratio versus frontier?** A ratio scalarizes objectives; Pareto is a pairwise dominance relation.
4. **Why not pass@1 versus pass@2?** They use different attempt protocols.
5. **Running BDH-CQ?** No. Only browser mathematics runs live.
6. **Live versus precomputed?** Filtering, adjustment, frontier, dominance, ratio, export are live; scores and citations are sourced snapshot data.
7. **Reproduced score?** No. Developer-reported.
8. **General intelligence?** No. It is one benchmark.
9. **Causal mechanism?** No; that needs controlled ablations.
10. **Costs change?** Adjusted scenario costs move points without overwriting evidence.
11. **Log axis?** Costs can span orders of magnitude; the table provides exact values.
12. **Main limitation?** Only one sourced strict point is admitted under complete comparability metadata.
13. **Hypothetical safeguards?** Persistent label, dashed visual, explicit field, and export flag.
14. **Which state changes?** Temporary recurrent/contextual and latent states; trained parameters remain distinct.
15. **Add source point?** Add all schema fields to JSON/CSV, register the source, validate, test, and justify comparability.
