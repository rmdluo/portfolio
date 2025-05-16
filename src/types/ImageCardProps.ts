export type AspectRatio = "square" | "landscape" | "portrait" | "wide" | "ultrawide";
export type Size = "small" | "medium" | "large" | "full" | "dynamic";

export interface ImageCardProps {
    src: string;
    alt: string;
    caption?: string;
    aspectRatio?: AspectRatio;
    size?: Size;
    unedited_src?: string;
}
