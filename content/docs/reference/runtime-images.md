---
title: "Runtime images"
description: "How Tessariq chooses runtime images today, when the default quickstart images apply, and when to bring your own custom image."
summary: "Current runtime-image model: quickstart defaults for onboarding, custom images for production control."
date: 2026-04-07T10:00:00+01:00
lastmod: 2026-04-07T10:00:00+01:00
draft: false
weight: 915
toc: true
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

Tessariq runs agents inside Docker containers. Each `tessariq run` uses a runtime image that provides the base operating system, toolchain, and selected agent binary.

## Current model

Today, Tessariq has two runtime-image paths:

- default published agent images for quick onboarding and experimentation,
- custom images you pass with `--image` when you want full control.

If you do not pass `--image`, Tessariq resolves a default image for the selected agent.

## Default images

Current default images:

- `claude-code` -> `ghcr.io/tessariq/claude-code:v<cli-version>`
- `opencode` -> `ghcr.io/tessariq/opencode:v<cli-version>`

These defaults are intended to make the first run simple:

```bash
tessariq run tasks/my-task.md
tessariq run tasks/my-task.md --agent opencode
```

Use them for onboarding, evaluation, and quick local experiments.

## Custom images

For production workflows, bring your own image:

```bash
tessariq run tasks/my-task.md --image my-registry/my-runtime:v1
```

Use a custom image when you need to pin:

- the agent version,
- extra build or language tooling,
- repo-specific utilities,
- your own update cadence.

The selected agent binary must already exist inside the resolved image.

## What `runtime.json` records

Each run writes `runtime.json` into evidence. At minimum, it records:

- `image`
- `image_source`
- `auth_mount_mode`
- `auth_mount_count`
- `agent_config_mount`
- `agent_config_mount_status`

This separates runtime provenance from `agent.json`, which records requested options and agent capability support.

## Auth and config mounts

Tessariq does not mount your host `HOME` into the container.

Instead, it reuses supported local auth state through read-only file mounts. Optional config-directory mounts are available through `--mount-agent-config`.

That means a compatible image must contain the agent binary already; Tessariq forwards supported auth state, but it does not install the agent for you at run time.

## Operational guidance

- Use the default image when you want the shortest path to a first run.
- Use `--image` when reproducibility and toolchain control matter.
- Inspect `runtime.json` after a run if you need to confirm which image and mount policy were actually used.
