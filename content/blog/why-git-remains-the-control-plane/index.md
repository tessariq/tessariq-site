---
title: "Why Git remains the control plane"
description: "Why branches, commits, diffs, and review still form the right decision boundary for agent-assisted engineering."
summary: "Agents may generate work, but Git still provides the clearest promotion boundary and the best shared memory for teams."
date: 2026-04-07T18:02:00+01:00
lastmod: 2026-04-07T18:02:00+01:00
draft: true
post_type: "Essay"
categories: ["Thinking"]
tags: ["git", "agents", "trust"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Make the case that agent workflows should terminate in normal Git objects and review processes rather than in product-specific approval systems.

## Outline

### 1) What Git already gives us

- history
- diffs
- branching
- attribution
- review

### 2) What agent tooling often tries to replace

- workflow memory
- review context
- approval boundary

### 3) Why promotion matters

- proposal vs application
- explicit operator decision

### 4) Limits and caveats

- Git is not a scheduler
- Git is not runtime isolation
- Git still needs evidence around it

### 5) Practical conclusion

Use Git as the control plane and build agent execution around it.
