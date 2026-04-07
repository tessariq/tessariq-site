---
title: "Run artifacts"
description: "Reference for the files produced by each run, including required fields and how to use them in automation and review."
summary: "File-level contract for manifests, status, agent, runtime, workspace, logs, and patch outputs."
date: 2026-03-30T10:00:00+01:00
lastmod: 2026-03-31T10:00:00+01:00
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

This page defines the practical contract used by operators and automation. All JSON artifacts include a `schema_version` field for forward compatibility.

## Directory contract

```text
.tessariq/runs/<run-id>/
├── manifest.json
├── status.json
├── agent.json
├── runtime.json
├── workspace.json
├── task.md
├── diff.patch
├── diffstat.txt
├── run.log
└── runner.log
```

Proxy-mode runs also produce `egress.compiled.yaml` (resolved allowlist) and `egress.events.jsonl` (blocked egress attempts).

## Files

### `manifest.json`

Purpose: immutable run metadata.

Required fields:

- `schema_version`
- `run_id`
- `created_at`
- `task_path` and `task_title`
- `agent`
- `base_sha`
- `workspace_mode`
- `requested_egress_mode` and `resolved_egress_mode`
- `allowlist_source`
- `container_name`

Invariant: this file identifies what was asked to run and under which execution policy.

### `status.json`

Purpose: lifecycle state and terminal outcome.

Required fields:

- `schema_version`
- `state` (`success`, `failed`, `timeout`, `killed`, `interrupted`)
- `started_at`
- `finished_at`
- `exit_code`
- `timed_out`

Invariant: automation should treat this file as the source of truth for run completion and outcome.

### `agent.json`

Purpose: agent-specific options as requested and as supported by the selected agent.

Required fields:

- `schema_version`
- `agent`
- `requested` (options the user asked for, such as `model` or `interactive`)
- `supported` (which recorded options the selected agent can honor exactly)

Invariant: when a requested option cannot be honored exactly, this file records that capability gap. This is an agent-capability record, not a replay of every runtime decision.

### `runtime.json`

Purpose: runtime image and mount state.

Required fields:

- `schema_version`
- `image`
- `image_source`
- `auth_mount_mode`
- `auth_mount_count`
- `agent_config_mount` and `agent_config_mount_status`

Invariant: this file records the execution environment independently of the agent, so operators can reproduce or audit the container state.

### `workspace.json`

Purpose: workspace provenance and reproducibility context.

Required fields:

- `schema_version`
- `workspace_mode` (v0.1.0: `worktree`)
- `base_sha`
- `workspace_path`
- `repo_mount_mode`
- `repo_clean`
- `reproducibility`

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

Invariant: should be retained long enough to investigate unexpected behavior. Capped with a truncation marker if truncated.

### `runner.log`

Purpose: runtime/container lifecycle log.

Invariant: used to diagnose infrastructure-level failures separate from task logic.

### Proxy-mode artifacts

When `resolved_egress_mode` is `proxy`, runs also produce:

- `egress.compiled.yaml` — the fully resolved destination allowlist with provenance.
- `egress.events.jsonl` — blocked egress attempts with timestamp, destination, and denial reason.

## Example snippets

`manifest.json`:

```json
{
  "schema_version": 1,
  "run_id": "01JQ...",
  "task_path": "tasks/my-task.md",
  "task_title": "My task",
  "agent": "claude-code",
  "base_sha": "6b5f9f4",
  "workspace_mode": "worktree",
  "requested_egress_mode": "auto",
  "resolved_egress_mode": "proxy",
  "allowlist_source": "built_in",
  "container_name": "tessariq-01JQ...",
  "created_at": "2026-03-30T09:12:00Z"
}
```

`status.json`:

```json
{
  "schema_version": 1,
  "state": "success",
  "exit_code": 0,
  "started_at": "2026-03-30T09:12:31Z",
  "finished_at": "2026-03-30T09:13:02Z",
  "timed_out": false
}
```

`agent.json`:

```json
{
  "schema_version": 1,
  "agent": "claude-code",
  "requested": {
    "model": null,
    "interactive": false
  },
  "supported": {
    "model": true,
    "interactive": true
  }
}
```

`runtime.json`:

```json
{
  "schema_version": 1,
  "image": "ghcr.io/tessariq/claude-code:v0.1.0",
  "image_source": "reference",
  "auth_mount_mode": "read-only",
  "auth_mount_count": 2,
  "agent_config_mount": "disabled",
  "agent_config_mount_status": "disabled"
}
```

`workspace.json`:

```json
{
  "schema_version": 1,
  "workspace_mode": "worktree",
  "base_sha": "6b5f9f4",
  "workspace_path": "/home/user/.tessariq/worktrees/01JQ...",
  "repo_mount_mode": "rw",
  "repo_clean": true,
  "reproducibility": "strong"
}
```

## Policy checks (recommended)

Before promotion, enforce at least:

- terminal state is `success`,
- `exit_code` is `0`,
- `diff.patch` is present when change was requested,
- `diffstat.txt` is within size limits,
- `agent.json` shows no critical option gaps between requested and supported,
- required logs are present for auditability.

For the end-to-end flow, see [Quickstart](/docs/guides/quickstart/).
