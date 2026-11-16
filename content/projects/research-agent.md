---
title: "Research Agent"
description: "Document question-answering agent with source citations, web search fallback and a real evaluation harness"
date: "2026-02-14"
featured: false
technologies: ["LangChain", "LangGraph", "ChromaDB", "FastAPI", "Streamlit", "Docker", "GitHub Actions"]
github: "https://github.com/Faheem8585/research-agent"
image: "/images/projects/research-agent.png"
---

## Overview

A document question-answering agent that cites its sources and falls back to web search when the local corpus cannot answer.

## Architecture

A LangGraph ReAct agent with three tools: `retrieve_docs` over ChromaDB, `web_search` via DuckDuckGo, and `summarize_text`. Conversation memory is kept per `session_id` through a LangGraph SQLite checkpointer, so a conversation survives a restart.

## Evaluation

The repository includes an evaluation dataset and harness under pytest. This is the part most agent projects skip: without it, "the agent works" means nothing more than "it produced text when I tried it once."

## Stack

LangChain, LangGraph, ChromaDB, FastAPI, Streamlit, Groq or Ollama for inference, local HuggingFace embeddings, structured JSON logging, Docker, GitHub Actions CI/CD.
