---
title: "Plant Disease Detection"
description: "MobileNetV2 classifier covering 38 plant diseases across 14 crops, with per-class failure analysis"
date: "2025-11-08"
featured: false
technologies: ["TensorFlow", "Keras", "MobileNetV2", "Transfer Learning", "Computer Vision"]
github: "https://github.com/Faheem8585/plant_disease_detection"
image: "/images/projects/plant-disease.png"
---

## Overview

Classification of 38 plant diseases across 14 crops, trained on the PlantVillage dataset of 54,305 images with a 70/15/15 split.

## Model

MobileNetV2 with transfer learning followed by fine-tuning. 224x224 input, roughly 3.5 million parameters, 25 MB on disk. Adam at 1e-4, categorical crossentropy, batch size 32, 20 epochs then 10, around 7 hours of training.

## Results

| Metric | Score |
|---|---|
| Training accuracy | 99.01% |
| Validation accuracy | 98.55% |
| **Test accuracy** | **94.88%** |
| Top-3 accuracy | 99.89% |

The number that counts is **94.88 percent on the test set**. The validation figure of 98.55 percent is the one the model was tuned against, and quoting it as the headline would overstate what the model does on genuinely unseen images. The four-point gap between them is exactly the effect that makes validation scores untrustworthy.

## Failure Analysis

The weakest classes are documented with their reasons rather than averaged away. Potato-Healthy scores 60.87 percent, but on only 23 test images, which is too few to draw a conclusion from. Classes with few examples and classes whose visual symptoms overlap are where the model struggles, and the README says which is which.
