---
title: "From one-off runs to workflow systems"
description: "How execution tooling and workflow tooling solve different problems, and why that distinction matters for agentic engineering."
summary: "Tessariq and Taskrail point at two different layers: execution and workflow. This piece connects them without collapsing them into one tool."
date: 2026-04-07T18:06:00+01:00
lastmod: 2026-04-07T18:06:00+01:00
draft: true
post_type: "Lab Note"
categories: ["Thinking"]
tags: ["agents", "workflows", "trust"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Introduce the distinction between running tasks safely and deciding which tasks should exist, in what order, and with what verification.

## Outline

### 1) A common confusion in agent tooling

- execution and planning get mixed together

### 2) What an execution substrate owns

- workspace lifecycle
- runtime isolation
- evidence
- promotion

### 3) What a workflow system owns

- authoritative state
- task ordering
- validation
- follow-up

### 4) Why keeping the layers separate helps

- simpler contracts
- replaceable components
- clearer failures

### 5) Bridge to related work

Taskrail as workflow exploration, with Tessariq as execution substrate.
