---
title: "Your repo stays yours."
lead: "A manifesto for agent workflows that remain inspectable, reviewable, and under operator control."
description: "Why Tessariq exists: a manifesto for Git-native agent workflows with portable artifacts, explicit safety boundaries, and evidence operators can inspect."
date: 2026-03-28T12:00:00+01:00
lastmod: 2026-04-07T19:10:00+01:00
draft: false
toc: false
---

As more planning, coding, and review work moves toward agents, the dependency surface moves with it. The question is no longer only who owns the code. It is who owns the workflow memory, the execution environment, and the record of what actually happened.

Tessariq exists to keep that control with the operator. Agent work should not require handing over repo history, runtime assumptions, or operational memory to a system you cannot inspect or move.

## Thesis

Agent work should look and feel like engineering work: inspectable, reviewable, and reversible. Runs should leave behind durable artifacts in open formats and move through normal Git review, not disappear into product-specific dashboards that trap context and history.

## What it is

<div class="tq-manifesto-list" role="list">
  <div class="tq-manifesto-item" role="listitem">
    <h3>Git-native execution</h3>
    <p>A substrate for agent tasks that fits normal repository workflows instead of replacing them.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Detached runs</h3>
    <p>Work stays isolated until an operator chooses to promote it.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Evidence-first artifacts</h3>
    <p>Manifests, logs, diffs, and status files are part of the product surface, not debugging leftovers.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Portable formats</h3>
    <p>Markdown, JSON, YAML, and plain text over proprietary workflow memory.</p>
  </div>
</div>

## What it is not

<div class="tq-manifesto-list tq-manifesto-list-muted" role="list">
  <div class="tq-manifesto-item" role="listitem">
    <h3>Not a closed agent IDE</h3>
    <p>The workflow should not disappear behind a proprietary interface that owns the context.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Not a single-agent platform bet</h3>
    <p>No one agent or runtime should define the long-term shape of the workflow.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Not a claim of perfect autonomy</h3>
    <p>The aim is legible execution with explicit boundaries, not the pretense of infallible automation.</p>
  </div>
</div>

## Operating principles

<div class="tq-manifesto-principles" role="list">
  <div class="tq-manifesto-principle" role="listitem">
    <div class="tq-manifesto-principle-index">01</div>
    <div class="tq-manifesto-principle-body">
      <h3>Git-native by default</h3>
      <p>Change control should stay where teams already collaborate. Branches, pull requests, and code review remain the decision points for promotion.</p>
    </div>
  </div>
  <div class="tq-manifesto-principle" role="listitem">
    <div class="tq-manifesto-principle-index">02</div>
    <div class="tq-manifesto-principle-body">
      <h3>Detached execution by default</h3>
      <p>Runs execute in isolated workspaces so your active working tree is not silently mutated. Promotion is explicit.</p>
    </div>
  </div>
  <div class="tq-manifesto-principle" role="listitem">
    <div class="tq-manifesto-principle-index">03</div>
    <div class="tq-manifesto-principle-body">
      <h3>Evidence before trust</h3>
      <p>Every run should leave behind human-readable and machine-readable evidence. If a result cannot be inspected after the fact, it should not be trusted in the first place.</p>
    </div>
  </div>
  <div class="tq-manifesto-principle" role="listitem">
    <div class="tq-manifesto-principle-index">04</div>
    <div class="tq-manifesto-principle-body">
      <h3>Safe boundaries first</h3>
      <p>Sandboxing and controlled egress are baseline requirements, not enterprise add-ons. Unsafe behavior should require explicit operator opt-in.</p>
    </div>
  </div>
  <div class="tq-manifesto-principle" role="listitem">
    <div class="tq-manifesto-principle-index">05</div>
    <div class="tq-manifesto-principle-body">
      <h3>Replaceable components</h3>
      <p>Adapters and interfaces should stay swappable. No single model vendor, runtime, or workflow product should own the long-term memory of your engineering process.</p>
    </div>
  </div>
</div>

## Operator promises

<div class="tq-manifesto-list" role="list">
  <div class="tq-manifesto-item" role="listitem">
    <h3>Open and scriptable artifacts</h3>
    <p>Execution records should stay usable with normal files, normal tools, and normal automation.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Clear lifecycle boundaries</h3>
    <p>Run, workspace, and promotion should remain separate concepts with visible transitions.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Visible failure states</h3>
    <p>Breakage should be inspectable and explicit instead of hidden behind retries or optimistic summaries.</p>
  </div>
  <div class="tq-manifesto-item" role="listitem">
    <h3>Auditability over theater</h3>
    <p>The priority is not cosmetic autonomy. The priority is a workflow an operator can reason about under pressure.</p>
  </div>
</div>

## Direction

This project is both product and lab. We publish workflows that hold up, but also constraints, edge cases, and failed assumptions.

The aim is not cosmetic autonomy. The aim is a durable way to work with agents that stays legible under pressure: safe execution, open artifacts, normal review paths, and enough evidence for an operator to understand what happened without guessing.
