import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';
import { AnimatedHeadline } from '../animated-headline';

export function BookUsCta() {
  return (
    <section id="book-us" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:1s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="bg-primary/10 p-4 rounded-full">
                <CalendarCheck className="h-10 w-10 text-primary" />
            </div>
            <AnimatedHeadline text="Need Event Coverage?" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" />
            <p className="mx-auto max-w-[700px] text-muted-foreground text-base md:text-lg">
                Our talented team is available to cover your college events, from workshops and seminars to festivals and competitions. Let us capture your important moments.
            </p>
            <Button asChild size="lg" className="mt-4">
                <Link href="/book-us">Book Our Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
