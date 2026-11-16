---
title: "Multimodal Office Platform"
description: "Internal company platform with role-aware dashboards, an approval engine, OCR document ingestion and a department-scoped RAG assistant"
date: "2026-05-05"
featured: true
technologies: ["Python", "TypeScript", "React 18", "PostgreSQL", "pgvector", "Kubernetes", "Helm", "Docker"]
github: "https://github.com/Faheem8585/Multimodal_office_platform"
image: "/images/projects/multimodal-office.png"
---

## Overview

A production-shaped internal platform: role-aware dashboards, a configurable approval engine, document ingestion with OCR, semantic search, and a RAG assistant scoped to the department asking the question. HR, Finance and IT modules are implemented end to end.

## Graceful Degradation

The assistant has three answering modes that fall back in order: a local LLM at no cost, a cloud LLM where quality matters, and an offline extractive fallback that still returns the relevant passage when no model is reachable. The platform stays useful when the expensive part is unavailable.

## Infrastructure

Python 3.11 and TypeScript with React 18. PostgreSQL with pgvector for semantic search alongside relational data in the same database. Docker Compose for local work, Helm charts for Kubernetes deployment, GitHub Actions for CI and CD.

Testing runs at unit, integration and end-to-end level against a real Postgres instance with pgvector, not a mock. The repository includes an operations runbook.
