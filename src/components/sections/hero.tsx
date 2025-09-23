import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const heroImage = getImageById('hero-image');

  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg animate-fade-in-down leading-tight">
          Tejgaon College Photography Club
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto drop-shadow animate-fade-in-up [animation-delay:0.2s]">
          Welcome to TCPC, a creative community at Tejgaon College dedicated to capturing moments, honing our craft, and sharing our vision.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.4s]">
          <Button asChild size="lg">
            <Link href="/join">Become a Member</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/events">Upcoming Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
