---
title: "What agent infrastructure should prove before it scales"
description: "A checklist for what an agent system should demonstrate in evidence, safety, and reviewability before adding orchestration or scale."
summary: "Scale is not the first milestone. Proving boundaries, evidence quality, and operator control comes first."
date: 2026-04-07T18:01:00+01:00
lastmod: 2026-04-07T18:01:00+01:00
draft: true
post_type: "Essay"
categories: ["Thinking"]
tags: ["agents", "safety", "trust"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Argue against scaling an agent system before it can show clear evidence, enforce boundaries, and fit existing engineering review paths.

## Outline

### 1) The common sequencing mistake

- scale first
- observability later

### 2) What should be proven early

- clean execution boundaries
- reproducible enough context
- inspectable artifacts
- explicit failure states
- normal Git review paths

### 3) Why orchestration multiplies weak assumptions

- more runs
- more state
- more invisible failure modes

### 4) A practical test

What can a teammate reconstruct from artifacts alone?

### 5) Closing claim

Infrastructure that cannot explain one run clearly will not explain one hundred runs clearly.
