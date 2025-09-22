
'use client'
import { cn } from '@/lib/utils';

type AnimatedHeadlineProps = {
  text: string;
  className?: string;
};

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  const words = text.split(' ');

  return (
    <h2 className={cn("text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-1">
          <span
            className="inline-block animate-word-reveal"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </h2>
  );
}
