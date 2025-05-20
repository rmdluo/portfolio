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

In the conditional models, there is an additional one-hot encoded vector input, representing the desired digit. This allows the model to condition the generation on the digit.

### Implementation Highlights

- PyTorch-based implementation
- MLP architecture for both generator and discriminator
- Extension to conditional GANs for controlled digit generation
- Training pipeline with adversarial loss functions

## Results

The model successfully learns to generate realistic handwritten digits, demonstrating the power of GANs in image synthesis tasks. Furthermore, the conditional model shows similar success in generating specific numbers when conditioned.

One key learning is that, when implementing the training loop, you should train each model on each mini-batch iteratively. Initially, I was training the discriminator on the entire dataset and then training the generator on the entire dataset. This led to significant instability -- the discriminator becomes too powerful, which then prevents the gradients from flowing from the discriminator to the generator. Switching to training the disciminator on a mini-batch, then the generator on the same mini-batch, led to faster convergence and stability.

## Future Improvements

- Implement more advanced architectures (DCGAN, WGAN)
- Experiment with finer control over style (StyleGAN)
- Extend to other datasets
    - Could be interesting to train a GAN to mix two faces into one (if you combine the faces of your parents, will it look like the child's?)