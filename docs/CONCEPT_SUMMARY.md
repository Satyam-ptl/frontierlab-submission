# FrontierLab: Concept Summary

## 1. Design pressure
AI evaluation often reports one accuracy number while hiding the inference resources used to obtain it. Yet a system that gains one percentage point at one hundred times the cost may be inappropriate for constrained use. FrontierLab therefore asks a narrower, falsifiable question: within a fixed, protocol-compatible ARC-AGI-1 snapshot, is the reported BDH-CQ operating point dominated on cost and accuracy?

## 2. Cost-accuracy Pareto frontier
Represent system *i* by p_i=(c_i,a_i), where c is cost per task and a is accuracy under a specified protocol. System j dominates i exactly when c_j <= c_i and a_j >= a_i, with at least one strict inequality. A point is Pareto-optimal when no included compatible point dominates it. This is a property of a comparison set, not a permanent award.

## 3. Why accuracy alone is insufficient
The most accurate system may require substantially greater inference cost. Conversely, the cheapest system may solve too few tasks. A frontier keeps the non-dominated trade-offs visible, while a deployment decision still requires preferences, budgets, latency, reliability, privacy, and operational evidence. ARC-AGI-1 performance is not equivalent to general intelligence or deployment readiness.

## 4. Ratio versus Pareto optimality
FrontierLab also computes accuracy percentage points per US dollar. This scalar can rank points under one chosen ratio, but it collapses two objectives and can be unstable near zero cost. Pareto optimality instead asks whether another point is no worse on both dimensions and better on at least one. Highest ratio, highest accuracy, and frontier membership answer different questions.

## 5. Representative reasoning approaches
Token-serialized reasoning carries intermediate work through generated tokens. Recurrent latent reasoning updates an internal state over iterations and need not verbalize every step. Hybrid systems may combine latent computation, external tools, search, or generated programs. These descriptions are mechanisms, not evidence that one family universally dominates another. Valid comparison still requires the same benchmark, split, pass protocol, scoring method, and aligned cost accounting.

## 6. BDH-CQ's role
The BDH-CQ preprint reports that a 150M-parameter configuration reaches 29.5% pass@2 on the public ARC-AGI-1 evaluation set at a computed inference cost of $0.0007 per task. The paper describes demonstrations updating recurrent memory, followed by iterative computation in latent space without verbalizing every intermediate step [Engdahl et al., 2026](https://arxiv.org/abs/2608.09888). FrontierLab classifies this as developer-reported evidence. It does not claim an independent reproduction.

## 7. Architectural background
The related BDH paper presents a state-space architecture with sparse, positive activations and a synaptic-state interpretation, and provides a GPU-friendly formulation [Kosowski et al., 2025](https://arxiv.org/abs/2509.26507). BDH supplies architectural background, but BDH and BDH-CQ must not be treated as identical systems. A conceptual recurrence in the interface distinguishes temporary latent or contextual state from trained parameters; it is explicitly not an exact official equation or live trace.

## 8. Evidence discipline
The snapshot contains one sourced strict point, BDH-CQ, because no additional benchmark point was imported without verified protocol and cost metadata. Two synthetic points teach dominance only in the exploratory layer. A learner-defined challenger is always labeled hypothetical. Live calculations include validation, cost adjustment, dominance, the frontier, and the efficiency ratio. Published values, the source registry, and explanatory text are precomputed. No BDH checkpoint runs in the browser.

## 9. Uses and limitations
The concept is useful for model selection, evaluation design, budget discussions, and sensitivity analysis. Its limitations are equally important. Computed cost depends on assumptions and dates. Pass@1 cannot be silently compared with pass@2. Developer-reported evidence is not independent reproduction. The chart does not show training cost, energy, latency, uncertainty, or deployment quality. A low-cost benchmark point does not prove architectural causality. Controlled ablations would be required to show that recurrent latent reasoning caused a cost advantage.

## 10. Open question
The most important open question is whether independent, protocol-matched evaluation will reproduce both the reported score and cost under transparent hardware and accounting assumptions. FrontierLab makes this uncertainty operational: add a compatible challenger at cost <= $0.0007 and accuracy >= 29.5% with one strict improvement, and the displayed claim is immediately falsified for the active set.

## Primary sources
- Engdahl, B. et al. (2026), *BDH-CQ: In-Context Learning with Recurrent Latent Reasoning*. https://arxiv.org/abs/2608.09888
- Kosowski, A. et al. (2025), *The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain*. https://arxiv.org/abs/2509.26507
- ARC Prize Foundation (accessed 2026-09-07), official leaderboard and verification context. https://arcprize.org/leaderboard
