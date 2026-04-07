---
title: "Detached workspaces are only the beginning"
description: "Detached workspaces solve one important safety problem, but longer-lived agent workflows need stronger handling for resume, state, and policy."
summary: "Isolation is necessary, but not sufficient, once runs become iterative, resumable, or persistent."
date: 2026-04-07T18:03:00+01:00
lastmod: 2026-04-07T18:03:00+01:00
draft: true
post_type: "Field Note"
categories: ["Operations"]
tags: ["workspaces", "safety", "agents"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Build on the existing detached-workspaces story and extend it toward resume semantics, lineage, and longer-running work.

## Outline

### 1) What detached workspaces solve well

- active tree protection
- bounded mutation

### 2) What they do not solve yet

- resume semantics
- preserved intermediate state
- long-lived task continuity

### 3) Why this gets harder fast

- untracked files
- iterative repair
- operator interruption

### 4) Different workspace tradeoffs

- worktree
- copy plus patch
- repo-rw

### 5) Next question

How should future background execution inherit the same safety guarantees?
