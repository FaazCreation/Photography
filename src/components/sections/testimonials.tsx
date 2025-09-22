
'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getTestimonials } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = getTestimonials();
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up [animation-delay:1.1s] animation-duration-1000"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              What Our Members Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear directly from our community about their experiences with the club.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Quote className="w-10 h-10 text-primary mb-4" />
                        <p className="text-lg font-medium text-foreground max-w-2xl">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.name!}
                            width={64}
                            height={64}
                            className="rounded-full object-cover"
                            data-ai-hint={testimonial.imageHint}
                          />
                          <div>
                            <p className="font-semibold text-left">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground text-left">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-0 md:-ml-12" />
            <CarouselNext className="mr-0 md:-mr-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
