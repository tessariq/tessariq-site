---
title: "What a run should leave behind"
description: "A practical artifact checklist for agent runs: task input, lifecycle, diffs, logs, runtime state, and workspace provenance."
summary: "If a run cannot leave behind enough evidence to debug and review, it is not ready to be trusted."
date: 2026-04-07T18:04:00+01:00
lastmod: 2026-04-07T18:04:00+01:00
draft: true
post_type: "Field Note"
categories: ["Operations"]
tags: ["evidence", "agents", "trust"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Turn the existing artifacts reference into a more opinionated essay on what a run must preserve for humans and automation.

## Outline

### 1) The operator question

Can someone reconstruct the run from files alone?

### 2) Minimum artifact set

- task input
- status
- patch
- logs
- runtime metadata
- workspace provenance

### 3) Why each artifact exists

- debugging
- review
- audit
- automation

### 4) What missing artifacts usually hide

- scope drift
- silent retries
- environment mismatch

### 5) Closing claim

The artifact set is not documentation overhead. It is the substrate of trust.
