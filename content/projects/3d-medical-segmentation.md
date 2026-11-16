---
title: "3D Medical Segmentation on CPU"
description: "MONAI 3D U-Net segmenting the hippocampus from MRI volumes, trained entirely without a GPU"
date: "2026-06-10"
featured: true
technologies: ["MONAI", "PyTorch", "nibabel", "FastAPI", "Streamlit", "Docker", "3D U-Net"]
github: "https://github.com/Faheem8585/3d-medical-segmentation"
image: "/images/projects/3d-medical.png"
---

## Overview

Volumetric segmentation of the anterior and posterior hippocampus from MRI, using the Medical Segmentation Decathlon Task04 dataset. Trained and evaluated entirely on CPU.

## Model

A MONAI UNet with `spatial_dims=3`, channels [16, 32, 64, 128], strides [2, 2, 2] and two residual units, giving roughly 1.2 million parameters. DiceCE loss with the background class excluded, Adam with cosine annealing.

## The Interesting Constraint

The volumes are around 35x50x35 voxels, which is too small for the standard sliding-window patch approach. The pipeline instead uses foreground-biased 32-cubed patch sampling, so that patches actually contain the structure being learned rather than mostly background. Inference uses sliding windows across the full volume.

## Results

| Region | Dice | IoU |
|---|---|---|
| Anterior | 0.8553 | 0.7472 |
| Posterior | 0.8433 | 0.7291 |
| **Mean** | **0.8493** | **0.7382** |

## A Caveat Worth Stating

The split these numbers come from is used for early stopping, which makes it a validation score rather than a clean test score. A properly held-out test split would be the honest next step, and the figure above should be read with that in mind.

## Engineering

FastAPI inference service, Streamlit viewer, Docker and docker-compose, ruff and pytest with over 40 tests.
