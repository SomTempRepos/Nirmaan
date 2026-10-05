---
title: 'AI workflow service'
summary: 'An event-driven AI workflow service with persistent execution state and a retrieval-augmented generation pipeline.'
role: 'Associate Software Engineer, Backend & AI Systems'
timeframe: '[TODO: confirm project dates]'
stack:
  - pgvector
  - Redis
status: draft
confidentiality: abstracted
order: 4
featured: false
tags:
  - AI systems
  - retrieval
  - backend
links: []
---

## Problem and constraints

[TODO: describe the workflow problem and operating constraints without exposing internal prompts, data, service names, or customers.]

## What I built

The resume describes an event-driven workflow engine with persistent state, an end-to-end embedding/retrieval/generation path using pgvector, and Redis caching to reduce repeated computation. It also lists an evaluation pipeline for latency, token usage, and response quality.

## Decisions and trade-offs

[TODO: explain the retrieval, caching, and workflow decisions you personally made and what alternatives were considered.]

## Evidence and outcome

[TODO: confirm whether a redundant-computation result is approved for public use. If cleared, provide the baseline, evaluation method, workload, and measurement period before including a metric.]

## What broke or what I would change

[TODO: add a verified failure, lesson, or next step.]

## Publication review

This draft is based on resume content and has not been cleared as a public case study. Keep unpublished until architecture details and metrics are reviewed.