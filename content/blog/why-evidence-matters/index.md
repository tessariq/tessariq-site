---
title: "Why evidence matters more than autonomy"
description: "Autonomy is only useful when runs leave inspectable evidence. This essay explains why artifacts, logs, and diffs matter more than autonomous claims."
summary: "Before we build systems that act on their own, we need systems that can show what they did. Evidence is the prerequisite for trust."
date: 2026-03-28T12:00:00+01:00
lastmod: 2026-03-30T11:30:00+01:00
draft: false
post_type: "Essay"
categories: ["Thinking"]
tags: ["evidence", "agents", "trust"]
contributors: ["Felix"]
pinned: false
homepage: false
---

Autonomy is easy to demo and hard to operate.

A system that can "do things" without supervision looks impressive in a short clip. But production engineering does not fail in demos. It fails when nobody can answer basic questions after the fact:

- What exactly changed?
- Which inputs produced that result?
- Which policy boundaries were active?
- Why did this run fail while the previous run passed?

Without those answers, autonomy creates speed without control.

## Trust is a byproduct of evidence

In engineering, trust is rarely emotional. It is procedural.

We trust build pipelines because logs, artifacts, and exit codes are inspectable. We trust code review because diffs are explicit. We trust incident reports when timelines and evidence are preserved.

Agent systems should meet the same standard.

## A simple operator test

After any run, can a teammate who did not watch it happen reconstruct what occurred from files alone?

If yes, you have an operational system.

If no, you have a black box with a chat transcript.

At minimum, every run should leave behind:

- a task input record,
- lifecycle status with timestamps and exit code,
- a patch-level change artifact,
- full runtime and agent logs,
- workspace provenance (mode and base commit).

These are not compliance extras. They are the debugging substrate.

## Why teams over-index on autonomy

Autonomy has a visible upside: fewer manual steps.

Evidence has an invisible upside: lower recovery cost when something goes wrong.

Early in adoption, teams usually optimize for the visible upside and postpone evidence design. The result is predictable: first serious failure triggers a reactive scramble to rebuild observability and auditability after the fact.

That is backwards. Evidence should be built in before broad delegation.

## Evidence changes behavior

When runs are evidence-first, team behavior improves:

- prompts become clearer because tasks are versioned,
- review becomes faster because diffs are bounded,
- policy discussions become concrete because violations are visible,
- incidents become fixable because traces exist.

Autonomy without evidence obscures responsibility. Evidence with moderate autonomy improves it.

## Closing

Before we ask agents to act with less supervision, we should ask them to leave better records.

The long-term win is not "hands-free coding." It is a workflow where machine assistance increases output while preserving the operator's ability to inspect, verify, and decide.
