---
title: "Statistical 3D Quadruped Shape Model"
description: "A SMPL-family 3D body model for quadrupeds built from scratch, with an experiment testing whether its shape space generalises"
date: "2026-04-18"
featured: true
technologies: ["Python", "3D Geometry", "PCA", "Linear Blend Skinning", "Differentiable Registration", "uv"]
github: "https://github.com/Faheem8585/quadruped-shape-model"
image: "/images/projects/quadruped.png"
---

## Overview

A statistical 3D body model for quadrupeds in the SMPL family, built from scratch: a mesh template, a skeleton, linear blend skinning and a PCA shape space, plus differentiable template-to-scan registration and an evaluation experiment.

One command runs the whole thing: build the template from a public horse scan, register two exemplar quadrupeds, fit the PCA shape space, then run the generalisation experiment.

## The Experiment

Does a shape space trained only on variation between normal-sized horses generalise to a disproportionate pony it has never seen?

**No.** And the gap concentrates in the legs, which is where real miniature-breed anatomy genuinely diverges from scaled-down horse proportions. The failure is anatomically meaningful rather than random, which tells you something about what the shape space has and has not learned.

Running the experiment that could embarrass the model, and reporting that it did, is the point of the repository.

## Engineering

Python 3.12 managed with uv. 59 tests at roughly 91 percent coverage.
