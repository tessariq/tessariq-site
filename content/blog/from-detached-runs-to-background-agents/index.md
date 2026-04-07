---
title: "From detached runs to background agents"
description: "Why safe local execution is the right starting point before moving toward longer-lived background agents and cluster-backed systems."
summary: "A bridge from Tessariq's current detached run model to the longer-term goal of persistent agent workflows."
date: 2026-04-07T18:00:00+01:00
lastmod: 2026-04-07T18:00:00+01:00
draft: true
post_type: "Essay"
categories: ["Thinking"]
tags: ["agents", "workspaces", "safety"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Explain why the path toward background agents should start with detached, inspectable, bounded runs rather than with always-on autonomy.

## Outline

### 1) The end state people imagine

- background agents
- persistent memory
- long-running workflows
- cluster-backed execution

### 2) The missing layer in most demos

- operators need boundaries before persistence
- safe execution matters before continuous execution

### 3) Why detached runs are a useful primitive

- bounded scope
- explicit promotion
- inspectable evidence
- lower recovery cost

### 4) What changes when runs become background work

- scheduling
- interruption and resume
- state continuity
- policy drift

### 5) The thesis

Background agents should inherit the same evidence and promotion discipline as detached runs, not bypass it.
