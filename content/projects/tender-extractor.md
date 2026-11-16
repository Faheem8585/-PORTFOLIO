---
title: "Tender Extractor"
description: "Turns multi-file procurement tender PDFs into a structured, deduplicated three-level requirement tree"
date: "2026-08-15"
featured: true
technologies: ["TypeScript", "Node.js", "DeepSeek", "Zod", "pdf-parse", "LLM Pipelines"]
github: "https://github.com/Faheem8585/tender-extractor"
image: "/images/projects/tender-extractor.png"
---

## The Problem

A public procurement tender arrives as a main notice plus a stack of annexes. The requirements a bidder must satisfy are scattered across all of them, often with the same requirement stated twice in different words on different pages. Reading them by hand is slow and easy to get wrong.

## Pipeline

1. Documents are split into overlapping chunks of around 3,000 characters, each carrying a document, page and chunk identifier so every extracted requirement can be traced back to its source.
2. DeepSeek extracts requirements from chunks in parallel batches. Output is validated with Zod, retried on failure and checkpointed so a long run can resume.
3. Two-pass consolidation: a coarse grouping by category label, then an LLM decides which members of a group are genuine duplicates. Every `sourceChunkId` is kept on the surviving node.
4. Tree building in two steps: one call to produce the top level, then one call per bucket for the second level, with buckets over 120 items split further.

## Measured

506 chunks produced 3,469 raw requirements, consolidated down to 2,684.

## The Documented Limitation

Grouping by category label before merging means that two statements of the same requirement filed under different labels, for example "Electrical Testing" and "Testing", are never compared with each other. This is the main source of missed merges, and it is written into the README rather than left for a user to discover.

The README also explains why label grouping was chosen anyway: embeddings are the obvious fix, but label grouping is simpler, cheaper and good enough when the source documents use categories consistently. The trade-off is stated so a reader can judge it.

## Stack

TypeScript, Node 18+, pdf-parse, DeepSeek through the openai npm package, Zod for schema validation.
