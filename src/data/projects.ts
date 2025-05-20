import type { ProjectCardProps } from '../types/ProjectCardProps';

export const projects: ProjectCardProps[] = [
    {
        title: "Number Generation with GANs",
        description: "A GAN model that learns to generate MNIST-like handwritten digits using PyTorch, with MLP-based generator and discriminator architectures, and extended to conditional GANs for digit-specific generation.",
        tags: ["ML", "PyTorch", "GANs"],
        featured: true,
        link: "https://github.com/rmdluo/GAN-Number-Generation",
        internal_link: "/projects/gan-number-generation",
        year: 2025
    },
    {
        title: "Q-Learning Snake AI",
        description: "An AI agent that learns to play Snake using deep Q-learning reinforcement learning techniques.",
        tags: ["RL", "Python", "Q-Learning"],
        featured: true,
        link: "https://github.com/rmdluo/Snake-Q-Learning",
        internal_link: "/projects/rl-snake",
        year: 2025
    },
    {
        title: "IDL-WAR: Invisible Watermarking And Robustness",
        description: "A group project for CMU's 11785 (PhD-level Intro to Deep Learning) that explores the robustness of image watermarking techniques when multiple of them are combined. This project was done in conjunction Dongjun Hwang, Sungwon Woo, and Tom Gao.",
        tags: ["DL", "Watermarking", "Diffusion", "Encoder-Decoder Architectures"],
        featured: true,
        link: "https://github.com/tomputer-g/idl_war",
        internal_link: "",
        year: 2024
    },
    {
        title: "Handwritten Digit Recognition",
        description: "A simple CNN model that recognizes handwritten digits using TensorFlow. Very old project, so the files may not be up to date and hard to use.",
        tags: ["ML", "TensorFlow", "CNNs"],
        featured: true,
        link: "https://github.com/rmdluo/Digit-Recognizer",
        internal_link: "",
        year: 2019
    },
    {
        title: "ML-Based Face Censoring",
        description: "A simple script that detects, then censors, faces in an image using a pre-trained YoloV3 model and MMDetection.",
        tags: ["ML", "MMDetection", "YOLO"],
        featured: true,
        link: "https://github.com/rmdluo/Face-Censor",
        internal_link: "",
        year: 2022
    },
    {
        title: "Research Connection Visualizer",
        description: "A simple script that visualizes the connections between researchers through their co-authorship. The resulting graph is constructed and rendered using NetworkX.",
        tags: ["Data", "Visualization", "NetworkX"],
        featured: true,
        link: "https://github.com/rmdluo/Research-Connections",
        internal_link: "",
        year: 2022
    }
]; 