---
title: "Your repo stays yours."
description: "Why Tessariq exists: a manifesto for Git-native agent workflows with portable artifacts, explicit safety boundaries, and evidence operators can inspect."
date: 2026-03-28T12:00:00+01:00
lastmod: 2026-03-28T12:00:00+01:00
draft: false
toc: false
---

Software teams are rapidly delegating planning, coding, and review work to agents. That shift can increase throughput, but it also creates a new dependency surface: who controls your workflow memory, your execution environment, and your operational evidence.

Tessariq exists to keep that control with the operator.

## Thesis

Agent work should look and feel like engineering work: inspectable, reviewable, and reversible. Runs should produce durable artifacts in open formats and flow through normal Git review, not through opaque dashboards that trap context and history.

## What it is

- A Git-native execution substrate for agent tasks.
- A detached run model that isolates work until you promote it.
- An evidence-first artifact model: manifests, logs, diffs, and status files.
- A portability stance: Markdown, JSON, YAML, and plain text over proprietary formats.

## What it is not

- Not a proprietary agent IDE that owns your workflow.
- Not a one-workflow platform that locks you into a single agent or runtime.
- Not a claim of perfect determinism or autonomous infallibility.

## Operating principles

### 1) Git-native by default

Change control should stay where teams already collaborate. Branches, pull requests, and code review remain the decision points for promotion.

### 2) Detached execution by default

Runs execute in isolated workspaces so your active working tree is not silently mutated. Promotion is explicit.

### 3) Evidence before trust

Every run should leave behind machine-readable and human-readable evidence. If a result cannot be inspected, it cannot be trusted.

### 4) Safe boundaries first

Sandboxing and controlled egress are baseline requirements, not enterprise add-ons. Unsafe behavior should require explicit operator opt-in.

### 5) Replaceable components

Adapters and interfaces should stay swappable. No single model vendor or runtime should own the long-term memory of your engineering process.

## Operator promises

Tessariq commits to:

- keeping execution artifacts open and scriptable;
- preserving clear boundaries between run, workspace, and promotion;
- making failure states visible rather than hidden;
- prioritizing auditability over cosmetic autonomy claims.

## Direction

This project is both product and lab. We publish not only successful workflows but also constraints, edge cases, and failed assumptions so teams can evaluate the model on evidence instead of marketing language.
