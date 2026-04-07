---
title: "What I want from a K3s-backed agent lab"
description: "A forward-looking note on the original vision behind this work: a small cluster that can run background agents, workflows, and experiments without giving up evidence or control."
summary: "A cautious vision piece on background agents, swarms, workflows, and cluster-backed experimentation from the perspective of operator trust."
date: 2026-04-07T18:09:00+01:00
lastmod: 2026-04-07T18:09:00+01:00
draft: true
post_type: "Lab Note"
categories: ["Thinking"]
tags: ["agents", "workflows", "safety"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Working draft.

## Angle

Describe the motivating long-term vision without presenting it as shipped product scope: a K3s-backed environment for background agents, swarms, and side-project workflows.

## Outline

### 1) The original motivation

- a cluster that works for me and with me
- side projects as the proving ground

### 2) What I want such a system to do

- run background work
- coordinate multiple agents when useful
- preserve open artifacts
- stay compatible with normal tools and formats

### 3) What I do not want

- opaque autonomy
- trapped context
- hidden state
- vendor-owned workflow memory

### 4) Why K3s is interesting

- lightweight cluster operations
- scheduling and isolation experiments
- realistic operator constraints

### 5) What has to be true first

- evidence
- boundaries
- review paths
- graceful failure

### 6) Closing

The cluster is not the point. The point is building agent systems that remain legible and useful over time.
