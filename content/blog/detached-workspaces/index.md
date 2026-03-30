---
title: "Detached workspaces are a safety primitive"
description: "Why isolated execution should be the default for agent runs, and how it reduces accidental state corruption in real teams."
summary: "Detached execution is not a convenience feature. It is the boundary that keeps local state safe while you evaluate agent output."
date: 2026-03-30T11:00:00+01:00
lastmod: 2026-03-30T11:00:00+01:00
draft: false
post_type: "Field Note"
categories: ["Operations"]
tags: ["workspaces", "safety", "git"]
contributors: ["Felix"]
pinned: false
homepage: false
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

Most teams first encounter detached workspaces after a bad run:

- a local branch is modified unexpectedly,
- generated files overwrite uncommitted work,
- cleanup scripts remove state that was never meant to be touched.

Detached execution prevents this class of failure by making mutation explicit.

## The practical model

Treat agent execution as proposal generation, not direct application.

1. Start from a known base commit.
2. Run in an isolated workspace.
3. Collect artifacts (`diff.patch`, `status.json`, logs).
4. Promote only after validation and review.

This shifts failure from hidden local side effects to visible reviewable output.

## Why this matters in day-to-day work

Detached workspaces reduce three common incidents:

- **Context bleed:** old local files influencing current runs.
- **State corruption:** unrelated branches changed by automation.
- **Audit gaps:** no clean record of what was executed and why.

Even when a run fails, the failure is easier to reason about because evidence is grouped by run id.

## Operational takeaway

If your team is adopting agents, make detached mode the default policy and require explicit opt-in for in-place mutation. You will spend less time repairing local state and more time reviewing concrete diffs.
