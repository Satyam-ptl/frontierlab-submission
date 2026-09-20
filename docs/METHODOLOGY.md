# Methodology

Strict view includes only points marked directly comparable, matching ARC-AGI-1, public evaluation, pass@2, and USD cost. Exploratory view shows synthetic teaching points but warns against formal conclusions. The algorithm compares every eligible point against every other point, O(n^2). It uses epsilon 1e-12 only to stabilize floating-point comparisons. Missing, zero, negative, or malformed costs and missing accuracies are rejected. Duplicate exact points do not dominate each other. Cost multipliers create `adjusted_cost`; source cost is immutable.
