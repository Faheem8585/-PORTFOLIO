---
title: "JobIntel"
description: "Job search assistant that parses adverts, scores fit transparently, finds skill gaps and tracks applications"
date: "2026-07-20"
featured: true
technologies: ["Python", "Pydantic v2", "FastAPI", "SQLite", "Streamlit", "MCP", "Docker", "pytest"]
github: "https://github.com/Faheem8585/jobintel"
image: "/images/projects/jobintel.png"
---

## Overview

A job search assistant that scrapes adverts from LinkedIn, Indeed, StepStone and XING, scores how well each one fits a candidate profile, identifies the specific skills that are missing, and tracks applications through their lifecycle.

## Transparent Scoring

The fit score is deliberately not a black box. Four weighted components:

- **Skills, 50 percent** — weighted Jaccard similarity, with required skills counted twice
- **Experience, 25 percent** — linear ratio against the stated requirement, with over-qualification capped rather than rewarded
- **Education, 15 percent** — ordinal rank comparison
- **Location, 10 percent** — exact match 1.0, same country 0.5, remote 1.0

Labels follow: Strong at 0.75 and above, Good at 0.55, Weak at 0.35, Poor below that. Every weight and threshold lives in `config.yaml`, with none hardcoded, so the model can be argued with.

## Design Decisions

- Pydantic v2 validation at the boundary, so malformed scraped data fails loudly rather than propagating
- Thread-safe SQLite guarded by an explicit `threading.Lock`
- A fuzzy alias table mapping equivalents such as sklearn to scikit-learn and torch to pytorch, plus substring matching
- A state machine that refuses invalid application status transitions
- Four interfaces over one core: CLI, FastAPI REST API, Streamlit UI, and an MCP server exposing nine documented tools

## Engineering

Python 3.11, Pydantic v2, SQLite, httpx, BeautifulSoup4 with lxml, FastAPI and uvicorn, Streamlit, MCP, pytest with freezegun, flake8, black, mypy, Docker. 87 percent test coverage.
