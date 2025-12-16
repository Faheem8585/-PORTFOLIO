---
title: "Classical Image Processing Pipeline"
description: "Traditional rule-based pipeline for electrode degradation assessment using OpenCV and scikit-image"
date: "2024-10-18"
featured: false
technologies: ["Python", "OpenCV", "Scikit-image", "Image Processing", "CLAHE"]
github: "https://github.com/Faheem8585/Classical-Image-processing-pipeline-"
image: "/images/projects/image-processing.png"
---

## Overview

A sophisticated classical computer vision pipeline for assessing electrode degradation in microscope images, utilizing traditional image processing techniques without deep learning.

## Technical Approach

### Preprocessing
- Illumination correction for uniform lighting
- CLAHE (Contrast Limited Adaptive Histogram Equalization)
- Adaptive thresholding

### Analysis
- Mask-based logic for segmentation
- Delamination length calculation
- Overall electrode length measurement
- Substrate coverage analysis

## Methodology

- **Libraries**: OpenCV, scikit-image
- **Techniques**: Morphological operations, contour analysis
- **Output**: CSV metrics, annotated PNG visualizations
- **Application**: Materials science, electrode research

## Results

Accurate quantification of electrode degradation parameters, enabling automated analysis of large microscope image datasets for research purposes.
