---
title: "How to compare coding harnesses without fooling yourself"
description: "A practical framing for comparing harnesses, models, and local-vs-hosted setups without drawing the wrong conclusions from benchmark results."
summary: "A draft framing for MosaicBench: benchmark model quality and harness quality separately, or the results will blur together."
date: 2026-04-07T18:08:00+01:00
lastmod: 2026-04-07T18:08:00+01:00
draft: true
post_type: "Lab Note"
categories: ["Thinking"]
tags: ["agents", "benchmarks", "workflows"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Set up the benchmark-design problem behind MosaicBench: harness effects, model effects, context quality, and execution policy are often conflated.

## Outline

### 1) The comparison problem

- same model, different harness
- same harness, different model
- hosted vs local model constraints

### 2) Where benchmarks go wrong

- unclear task setup
- different tool surfaces
- hidden retries and interventions

### 3) What should be held constant

- task corpus
- evaluation procedure
- evidence capture
- retry rules

### 4) Why smaller local models matter

- cost
- privacy
- portability
- edge use cases

### 5) Draft direction

MosaicBench as a way to compare harnesses more honestly, not as a claim that one number can settle the question.
