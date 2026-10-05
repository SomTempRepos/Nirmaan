---
title: 'Backend and telemetry pipelines'
summary: 'Backend services and messaging pipelines for telemetry ingestion and device communication.'
role: 'Associate Software Engineer, Backend & AI Systems'
timeframe: '[TODO: confirm project dates]'
stack:
  - FastAPI
  - MQTT
status: draft
confidentiality: abstracted
order: 2
featured: false
tags:
  - backend
  - telemetry
  - messaging
links: []
---

## Problem and constraints

[TODO: describe the ingestion and communication problem without internal system names, device/customer details, or proprietary data.]

## What I built

The resume describes FastAPI services for telemetry ingestion, idempotent APIs with retry/backoff behavior, and an MQTT messaging system for concurrent device communication and state synchronization.

## Decisions and trade-offs

[TODO: explain the delivery guarantees, retry behavior, and design alternatives you evaluated.]

## Evidence and outcome

[TODO: confirm whether a p95 latency result is approved for public use. If cleared, provide the endpoint, workload, measurement window, and test/production context before including a metric.]

## What broke or what I would change

[TODO: add a verified failure, lesson, or next step.]

## Publication review

This draft is based on resume content and has not been cleared as a public case study. Keep unpublished until architecture details and performance figures are reviewed.