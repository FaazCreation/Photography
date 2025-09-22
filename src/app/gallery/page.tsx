import Image from "next/image";
import { getGalleryImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Events Gallery
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
          A collection of moments captured during our workshops, photo walks, and events.
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-12">
        {galleryImages.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg">
            <Card className="h-full w-full">
              <CardContent className="p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm -mb-20 group-hover:mb-0 transition-all duration-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
