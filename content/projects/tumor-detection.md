---
title: "Brain Tumour Detection with Grad-CAM"
description: "MobileNetV2 tumour classifier with visual explanations, built to run on CPU and to flag its own low-confidence predictions"
date: "2025-10-02"
featured: false
technologies: ["PyTorch", "MobileNetV2", "Grad-CAM", "Streamlit", "OpenCV", "Docker"]
github: "https://github.com/Faheem8585/tumor_detection_cpu"
image: "/images/projects/tumor-detection.png"
---

## Overview

Brain tumour classification from MRI with Grad-CAM heatmaps showing which region drove each decision. Built to run on CPU throughout.

## Model

MobileNetV2 at roughly 3.5 million parameters, chosen over ResNet50 and its 25 million-plus specifically for CPU throughput. A custom Grad-CAM implementation hooks the final `Conv2dNormActivation` block, intercepts the backward gradients and global-average-pools them to weight the activation maps.

## CPU Optimisations

- Device locked to CPU, with no silent GPU path
- `num_workers=0` and `pin_memory=False`, because the multiprocessing machinery that speeds up GPU data loading actively slows CPU tensor loading down
- Gradient accumulation emulating batch sizes of 16 or 32 from micro-batches of 4 or 8

## The Safeguard That Matters

Any prediction below 60 percent confidence is flagged rather than reported as a result. In a medical context, a model that quietly returns its best guess on an image it does not understand is worse than one that says so.

## Stack

PyTorch, Streamlit, OpenCV, NumPy, scikit-learn, Docker, Makefile.
