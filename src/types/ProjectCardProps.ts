import type { CardProps } from "./CardProps";

export interface ProjectCardProps extends CardProps {
    title: string;
    description: string;
    tags: string[];
    featured: boolean;
    internal_link: string;
    link: string;
}
