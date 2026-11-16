---
title: "AI Text Detector"
description: "Flags AI-generated writing from seven weighted signals and names the sentence that most tipped the call"
date: "2026-01-16"
featured: false
technologies: ["React", "Vite", "FastAPI", "sentence-transformers", "Tesseract OCR", "pdfplumber"]
github: "https://github.com/Faheem8585/ai-text-detector"
image: "/images/projects/ai-text-detector.png"
---

## Overview

A detector that flags likely AI-generated writing and, more usefully, names the specific sentence that most influenced the verdict.

## Seven Weighted Signals

| Signal | Weight |
|---|---|
| Centroid tightness | 23% |
| Semantic drift | 22% |
| Hedge frequency | 15% |
| AI-phrase patterns | 12% |
| Structural symmetry | 12% |
| Linguistic predictability | 8% |
| Sentence variance | 8% |

OCR artefacts contribute a parallel boost when the input is an image.

## Verdict Bands

Below 28 percent likely human, 28 to 52 percent inconclusive, 52 to 82 percent likely AI, above 82 percent deeply synthesised. The inconclusive band exists on purpose: a detector that always commits is lying about its certainty.

## The Honest Note

The tool scores 12 out of 12 with an AUC of 1.00 on its own small benchmark set. The README says what that actually means:

> That's a clean, easy benchmark. The numbers tell you the pipeline works end to end, not that the problem is solved.

## Stack

React with Vite and Tailwind, FastAPI, sentence-transformers using all-MiniLM-L6-v2, Tesseract through pytesseract, pdfplumber, ReportLab.
