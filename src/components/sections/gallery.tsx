"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getGeneralMemberImages } from '@/lib/placeholder-images';
import { AnimatedHeadline } from '../animated-headline';

export function Gallery() {
  const generalMembers = getGeneralMemberImages();

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:0.5s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <AnimatedHeadline text="Meet Our Members" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" />
            <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
              A glimpse of the talented and passionate individuals who make our club vibrant.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {generalMembers.map((member, index) => (
                <CarouselItem key={index} className="basis-full xs:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden rounded-lg group">
                      <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                        <Image
                          src={member.imageUrl}
                          alt={member.name || 'Member portrait'}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={member.imageHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                         <div className="absolute bottom-4 left-4 text-white">
                            <p className="font-bold text-lg">{member.name}</p>
                            <p className="text-sm">{member.role}</p>
                         </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 hidden sm:flex" />
            <CarouselNext className="mr-12 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
