import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

export function getImageById(id: string): ImagePlaceholder {
  const image = placeholderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
}

export function getGalleryImages(): ImagePlaceholder[] {
  return placeholderImages.filter(img => img.id.startsWith('gallery-'));
}
