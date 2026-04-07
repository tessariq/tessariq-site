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

1. initialise a repository for Tessariq,
2. run a task in an isolated worktree,
3. inspect evidence artifacts,
4. validate outcome,
5. promote through Git.

## Prerequisites

- A local Git repository with a clean working tree (no staged, unstaged, or untracked files).
- Host binaries: `git`, `tmux`, `docker`.
- A task file (Markdown) inside the repository.
- A verification command for your project (for example `npm run build` or `npm test`).

## 1) Initialise the repository

```bash
tessariq init
```

This creates `.tessariq/runs/` and adds `.tessariq/` to `.gitignore`.

## 2) Start a detached run

Point Tessariq at a task file inside your repository.

```bash
tessariq run tasks/my-task.md
```

The run executes in an isolated worktree. By default, Tessariq uses the selected agent's published quickstart image unless you override it with `--image`. Expected output includes the `run_id`, evidence path, and the commands for `attach` and `promote`.

## 3) Inspect run artifacts

Each run writes an evidence tree you can inspect with shell tools and scripts.

```text
.tessariq/runs/01JQ.../
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

Minimum checks before promotion:

- `status.json` reports `"state": "success"`.
- `diff.patch` matches the requested task scope.
- `run.log` has no hidden retry loops or policy violations.

## 4) Validate in your repo context

Apply or promote the proposed changes, then run project checks.

```bash
npm run build
```

Use the validation command that matches your repository. The key point is to verify behavior in your real toolchain before review.

## 5) Promote with Git review

```bash
tessariq promote last
```

Promotion creates one branch and exactly one commit with trailers linking back to the run. From there, follow normal engineering controls:

- open the diff,
- request review,
- merge only after checks pass.

Do not bypass your standard review path just because a run succeeded.

## 6) Keep the evidence

Store run artifacts with the work item or CI records when needed for auditing, debugging, or incident analysis.

See [Run artifacts](/docs/reference/run-artifacts/) for file-by-file contract details.

## Common flags

Useful workflow flags beyond the minimal example:

- `--attach` to attach immediately to the new run session.
- `--interactive` when you want human approval in the agent loop.
- `--mount-agent-config` to mount the agent's default config directory read-only.
- `--pre` to run host-side setup commands before the agent starts.
- `--verify` to run host-side validation commands after the agent finishes.

## Troubleshooting

### Run completed but output looks wrong

Inspect `task.md` and `diff.patch` first. Most early failures are scope mismatches, not runtime failures.

### Validation fails locally

Use `run.log` and `runner.log` to compare runtime assumptions (dependencies, environment, network policy) with your local setup. Check `runtime.json` for the image used and mount state, and `agent.json` for the requested options and which of them the selected agent supports.

### No diff produced

Check `status.json` for terminal state and exit code. A `success` state can still produce no changes if the task is ambiguous or already satisfied. `promote` will refuse to create a commit when there is no diff.

## Next steps

- See [Run artifacts](/docs/reference/run-artifacts/) for the evidence contract.
- See [Runtime images](/docs/reference/runtime-images/) for the quickstart-image and custom-image model.
