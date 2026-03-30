---
title: "Quickstart"
description: "Run one task in an isolated workspace, inspect the artifacts, and promote the result through normal Git review."
summary: "A first run in five steps: execute, inspect, validate, and promote."
date: 2026-03-30T10:00:00+01:00
lastmod: 2026-03-30T10:00:00+01:00
draft: false
weight: 810
toc: true
params:
  math: false
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

This quickstart shows the core loop:

1. run a task in a detached workspace,
2. inspect evidence artifacts,
3. validate outcome,
4. promote through Git.

## Prerequisites

- A local Git repository.
- A configured Tessariq runtime.
- A task you can verify with a command (for example `npm run build` or `npm test`).

## 1) Start a detached run

Create a task file and execute it with detached workspace mode.

```bash
tessariq run --task task.md --workspace detached
```

Expected result: a new run directory is created under `.tessariq/runs/<run-id>/`.

## 2) Inspect run artifacts

Each run writes an evidence tree you can inspect with shell tools and scripts.

```text
.tessariq/runs/01JQ.../
├── manifest.json
├── status.json
├── workspace.json
├── task.md
├── diff.patch
├── diffstat.txt
├── run.log
└── runner.log
```

Minimum checks before promotion:

- `status.json` reports a successful terminal state.
- `diff.patch` matches the requested task scope.
- `run.log` has no hidden retry loops or policy violations.

## 3) Validate in your repo context

Apply or promote the proposed changes, then run project checks.

```bash
npm run build
```

Use the validation command that matches your repository. The key point is to verify behavior in your real toolchain before review.

## 4) Promote with Git review

Promotion should follow normal engineering controls:

- open the diff,
- request review,
- merge only after checks pass.

Do not bypass your standard review path just because a run succeeded.

## 5) Keep the evidence

Store run artifacts with the work item or CI records when needed for auditing, debugging, or incident analysis.

See [Run artifacts](/docs/reference/run-artifacts/) for file-by-file contract details.

## Troubleshooting

### Run completed but output looks wrong

Inspect `task.md` and `diff.patch` first. Most early failures are scope mismatches, not runtime failures.

### Validation fails locally

Use `run.log` and `runner.log` to compare runtime assumptions (dependencies, environment, network policy) with your local setup.

### No diff produced

Check `status.json` for terminal state and exit code. A successful process can still produce no changes if the task is ambiguous or already satisfied.
