---
title: "Number Generation with GANs"
description: "A GAN model that learns to generate MNIST-like handwritten digits using PyTorch, with MLP-based generator and discriminator architectures, and extended to conditional GANs for digit-specific generation."
date: "2024-03-21"
tags: ["ML", "PyTorch", "GANs"]
featured: true
github: "https://github.com/rmdluo/GAN-Number-Generation"
---

# Number Generation with GANs

## Overview

This project implements a Generative Adversarial Network (GAN) that learns to generate MNIST-like handwritten digits. The implementation uses PyTorch and features both traditional GANs and conditional GANs for digit-specific generation.

## Technical Details

### Architecture

The model consists of two main components:

1. **Generator**: A Multi-Layer Perceptron (MLP) that takes random noise as input and generates images resembling handwritten digits.
2. **Discriminator**: Another MLP that learns to distinguish between real MNIST images and generated fake images.

### Implementation Highlights

- PyTorch-based implementation
- MLP architecture for both generator and discriminator
- Extension to conditional GANs for controlled digit generation
- Training pipeline with adversarial loss functions

## Results

The model successfully learns to generate realistic handwritten digits, demonstrating the power of GANs in image synthesis tasks.

## Future Improvements

- Implement more advanced architectures (DCGAN, WGAN)
- Add interactive demo for digit generation
- Improve training stability
- Extend to other datasets 