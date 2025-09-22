import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = getImageById('hero-image');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        priority
        data-ai-hint={heroImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg animate-fade-in-down">
          Tejgaon College Photography Club
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto drop-shadow animate-fade-in-up [animation-delay:0.2s]">
          Capture the Moment, Create Your Vision.
        </p>
        <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:0.4s]">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#join">Join Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
            <a href="#gallery">View Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
