---
title: "Why review quality needs its own benchmark"
description: "Why agent systems should be measured not only by what code they write, but by how well they review, question, and prioritize changes."
summary: "A draft framing for PullPrism: code generation benchmarks do not tell us enough about review quality."
date: 2026-04-07T18:07:00+01:00
lastmod: 2026-04-07T18:07:00+01:00
draft: true
post_type: "Lab Note"
categories: ["Thinking"]
tags: ["agents", "trust", "review"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Frame the need for a benchmark around human-quality pull-request review without implying PullPrism is already a released benchmark suite.

## Outline

### 1) What current coding benchmarks emphasize

- code generation
- issue resolution

### 2) What they under-measure

- critique quality
- prioritization
- risk detection
- review taste and judgment

### 3) Why review quality matters operationally

- agents will increasingly review other agent output
- weak review creates hidden failure chains

### 4) What a better benchmark would examine

- relevance
- severity ranking
- false positive rate
- missing major issues

### 5) Draft direction

PullPrism as an exploration of review quality, not yet a public claim of solved evaluation.
