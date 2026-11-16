---
title: "German GPT Tutor"
description: "Adaptive German learning app with hybrid retrieval, grammar correction, voice input and gamified lessons from A1 to B2"
date: "2026-03-22"
featured: false
technologies: ["FastAPI", "LangGraph", "LangChain", "Qdrant", "PostgreSQL", "Redis", "Next.js 15", "React 19"]
github: "https://github.com/Faheem8585/German_GPT_Tutor"
image: "/images/projects/german-tutor.png"
---

## Overview

A German learning application with an adaptive AI tutor, grammar correction, voice input and output, six game types, 17 lessons across five units covering A1 to B2, and a progress dashboard.

## Architecture

Every message runs through a single LangGraph state pipeline:

1. **Safety check** including prompt injection detection
2. **Hybrid retrieval** combining BM25 keyword search with Qdrant vector search, merged using Reciprocal Rank Fusion
3. **Intent router** dispatching to tutor, grammar correction, lesson planning or motivation

Hybrid retrieval matters here because a language learner's question often hinges on an exact word form that a pure vector search will smooth over.

## Stack

**Backend:** FastAPI, async SQLAlchemy, PostgreSQL, Redis, LangGraph, LangChain, Qdrant, rank-bm25, Pydantic v2, Structlog, Prometheus and Grafana.

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind, Zustand, TanStack Query, Framer Motion, Recharts.

**Model:** Google Gemma 3 12B on the free tier, deliberately, so running the app costs nothing.

**Deployment:** Docker Compose behind nginx.
