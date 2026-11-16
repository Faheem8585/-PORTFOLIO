---
title: "AeroLattice: Urban Wind Simulation"
description: "Draw a boundary on a map and a lattice-Boltzmann solver computes airflow around the real buildings inside it"
date: "2026-09-12"
featured: true
technologies: ["Python", "FastAPI", "MapLibre GL", "OpenStreetMap", "CFD", "Docker", "nginx"]
github: "https://github.com/Faheem8585/aerolattice"
image: "/images/projects/aerolattice.png"
---

## Overview

Draw a boundary on a map. A lattice-Boltzmann CFD solver, written from scratch, computes the airflow around the real OpenStreetMap building footprints, heights and terrain inside it, driven by live wind data from Open-Meteo, and renders the result as animated streamlines.

## Physics

A D3Q19 lattice with two-relaxation-time collision and a Smagorinsky eddy-viscosity closure.

The README explains why TRT was chosen over full MRT: a hand-verified 19x19 MRT moment matrix carries a real risk of producing a result that is subtly wrong but looks entirely plausible. In a visual simulation, a wrong answer that looks right is the worst outcome, so the simpler scheme was the safer engineering choice.

## Honest Scoping

The repository includes a "what this is and what it isn't" section. It captures large recirculation, wake and channelling patterns around buildings. It is not wind-tunnel-grade quantitative load estimation, and it does not claim to be. Solves target roughly 10 to 30 seconds for preview quality over an area of a few hundred metres.

## Stack

FastAPI backend, MapLibre GL JS frontend with no bundler, nginx, Docker Compose, pytest.
