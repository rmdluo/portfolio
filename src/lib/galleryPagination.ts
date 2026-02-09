import { imagesReversed as images } from '../data/gallery';
import type { ImageCardProps } from '../types/ImageCardProps';

export const PER_PAGE = 24;

export function getAllTags(): string[] {
  return [...new Set(images.flatMap(img => img.tags ?? []))].sort();
}

export function getImagesByTag(tag?: string) {
  if (!tag) return images;

  return images.filter(img => img.tags?.includes(tag));
}

export function paginateImages(imageList: ImageCardProps[]) {
  const pageCount = Math.ceil(imageList.length / PER_PAGE);

  return Array.from({ length: pageCount }).map((_, i) => {
    const page = i + 1;
    const start = i * PER_PAGE;
    const end = start + PER_PAGE;

    return {
      page,
      pageCount,
      pageImages: imageList.slice(start, end),
    };
  });
}