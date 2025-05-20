---
title: "Q-Learning Snake AI"
description: "An AI agent that learns to play Snake using deep Q-learning reinforcement learning techniques."
date: "2024-03-21"
tags: ["RL", "Python", "Q-Learning"]
featured: true
github: "https://github.com/rmdluo/Snake-Q-Learning"
---

# Q-Learning Snake AI

## Overview

This project implements a reinforcement learning agent that masters the classic game of Snake using deep Q-learning. The AI learns to navigate the game environment, collect food, and avoid collisions through experience and reward-based learning.

## Technical Details

### Architecture

The implementation consists of several key components:

1. **Game Environment**: A custom Snake game implementation that provides the state space and handles game mechanics
    - Initially experimented with a simple state representation, where the state is where the snake head is, where the apple is, and a boolean flag for the safety of each cardinal direction.
    - Switched to a spatial state representation, where the state is the board, where the snake body parts are, and where the apple is.
2. **Q-Learning Agent**: Deep neural network that learns state-action values -- CNN-based
3. **Experience Replay**: Buffer to store and sample from past experiences
4. **Reward System**: +1 on apple pick up, -1 on death

### Implementation Highlights

- Python-based implementation
- Deep Q-Network (DQN) architecture
    - MLP for basic state representation
    - CNN for spatial state representation
- Experience replay for stable learning
- Epsilon-greedy exploration strategy

## Results

In the simple state space, the agent successfully learned to play Snake, demonstrating:
- Efficient path-finding to food
- Collision avoidance

In the spatial state space, the agent was able to learn the same things, but it could not do them consistently and did not learn as efficiently. I would hypothesize that it is due to the large increase in the state space and not being directly given information about what is "safe" and "unsafe." It could also be due to "death" states being rarer than "alive" states -- each run only has one death, but many alive states. In the future, I might experiment with using a prioritized experience replay to see if that helps with the imbalance between the quantities of the two states.

## Future Improvements

- Implement prioritized experience replay
- Experiment with other RL algorithms (policy-based, actor-critic, evolutionary) -- might be able to handle the larger state space better if they focus more on the action space
- Optimize network architecture for better learning
    - deeper
    - wider
    - maybe better loss functions/activations