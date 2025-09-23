'use client';

import Image from 'next/image';
import { getGalleryPageImages, ImagePlaceholder } from '../../lib/placeholder-images';
import { Card, CardContent } from '../../components/ui/card';
import { Metadata } from 'next';
import { useState, useMemo, useCallback } from 'react';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '../../components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useHotkeys } from 'react-hotkeys-hook';

// Metadata can't be exported from a client component directly.
// This page would need to be a parent server component to export metadata.
/*
export const metadata: Metadata = {
  title: 'Gallery | TCPC',
  description: 'Explore the events gallery of the Tejgaon College Photography Club (TCPC). A collection of moments captured during our workshops, photo walks, and events.',
};
*/

const categories = [
  { id: 'all', name: 'All' },
  { id: 'event', name: 'Event Photography' },
  { id: 'campus', name: 'Campus Life' },
  { id: 'nature-street', name: 'Nature & Street' },
  { id: 'portraits', name: 'Portraits' },
  { id: 'exhibitions', name: 'Exhibitions Highlights' },
];

export default function GalleryPage() {
  const allImages = useMemo(() => getGalleryPageImages(), []);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') {
      return allImages;
    }
    return allImages.filter((image) => image.category === activeFilter);
  }, [activeFilter, allImages]);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useHotkeys('arrowright', goToNext, [goToNext]);
  useHotkeys('arrowleft', goToPrevious, [goToPrevious]);
  useHotkeys('esc', closeLightbox, [closeLightbox]);

  const selectedImage = filteredImages[selectedImageIndex];

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary leading-tight">
          Our Gallery
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          A collection of moments captured by TCPC during our workshops, photo walks, and events.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 my-8 md:my-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeFilter === category.id ? 'default' : 'outline'}
            onClick={() => setActiveFilter(category.id)}
            className="capitalize"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Card className="h-full w-full">
              <CardContent className="p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description || 'Gallery image from Tejgaon College Photography Club (TCPC)'}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm -mb-20 group-hover:mb-0 transition-all duration-300">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl w-full h-auto p-2 sm:p-4 bg-background/80 backdrop-blur-sm border-0">
          {selectedImage && (
             <div className="relative w-full h-full flex items-center justify-center">
                <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description || 'Enlarged gallery image from Tejgaon College Photography Club (TCPC)'}
                    width={1600}
                    height={1200}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
             </div>
          )}
           <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
           <DialogClose className="absolute top-2 right-2 rounded-full p-2 bg-black/30 hover:bg-black/50 text-white transition-opacity">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
