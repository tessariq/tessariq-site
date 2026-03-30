---
title: "Run artifacts"
description: "Reference for the files produced by each run, including required fields and how to use them in automation and review."
summary: "File-level contract for manifests, status, workspace, logs, and patch outputs."
date: 2026-03-30T10:00:00+01:00
lastmod: 2026-03-30T10:00:00+01:00
draft: false
weight: 910
toc: true
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

Each run writes a directory under `.tessariq/runs/<run-id>/`.

This page defines the practical contract used by operators and automation.

## Directory contract

```text
.tessariq/runs/<run-id>/
├── manifest.json
├── status.json
├── workspace.json
├── task.md
├── diff.patch
├── diffstat.txt
├── run.log
└── runner.log
```

## Files

### `manifest.json`

Purpose: immutable run metadata.

Typical fields:

- `run_id`
- `created_at`
- `adapter`
- `policy` (sandbox and egress settings)
- `repo` and `base_sha`

Invariant: this file identifies what was asked to run and under which execution policy.

### `status.json`

Purpose: lifecycle state and terminal outcome.

Typical fields:

- `state` (`queued`, `running`, `succeeded`, `failed`, `cancelled`)
- `started_at`
- `finished_at`
- `exit_code`

Invariant: automation should treat this file as the source of truth for run completion and outcome.

### `workspace.json`

Purpose: workspace provenance and reproducibility context.

Typical fields:

- `mode` (for example `detached`)
- `base_sha`
- `workspace_path`
- `reproducibility` metadata

Invariant: this file explains where and from which base commit the run executed.

### `task.md`

Purpose: exact task input as executed.

Invariant: task content must be versioned exactly as received, without post-hoc edits.

### `diff.patch`

Purpose: line-level proposed changes.

Invariant: review and policy checks should evaluate this file before promotion.

### `diffstat.txt`

Purpose: compact change summary (files touched, insertions, deletions).

Invariant: useful for scope checks and alerting when changes exceed policy thresholds.

### `run.log`

Purpose: agent output stream for debugging and audit.

Invariant: should be retained long enough to investigate unexpected behavior.

### `runner.log`

Purpose: runtime/container lifecycle log.

Invariant: used to diagnose infrastructure-level failures separate from task logic.

## Example snippets

`status.json`:

```json
{
  "state": "succeeded",
  "exit_code": 0,
  "started_at": "2026-03-30T09:12:31Z",
  "finished_at": "2026-03-30T09:13:02Z"
}
```

`workspace.json`:

```json
{
  "mode": "detached",
  "base_sha": "6b5f9f4",
  "workspace_path": "/tmp/tessariq/workspaces/01JQ..."
}
```

## Policy checks (recommended)

Before promotion, enforce at least:

- terminal state is `succeeded`,
- `exit_code` is `0`,
- `diff.patch` is present when change was requested,
- `diffstat.txt` is within size limits,
- required logs are present for auditability.

For the end-to-end flow, see [Quickstart](/docs/guides/quickstart/).
