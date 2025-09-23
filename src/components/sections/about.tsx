import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImageById } from '@/lib/placeholder-images';
import { AnimatedHeadline } from '@/components/animated-headline';
import { TypingAnimation } from '../typing-animation';

export function About() {
  const aboutImage = getImageById('about-us-image');
  const aboutText = [
    `Founded in 2020, the Tejgaon College Photography Club is a vibrant community for students passionate about capturing the world through a lens. Our mission is to foster creativity, technical skill, and a shared love for photography.`,
    1000,
    `We organize workshops, photo walks, exhibitions, and competitions to help our members grow as photographers. Whether you're a seasoned pro with a DSLR or a beginner with a smartphone, you'll find a welcoming space here to learn, share, and create.`
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up [animation-delay:0.4s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <AnimatedHeadline text="About Us" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" />
            <TypingAnimation 
              sequence={aboutText} 
              className="max-w-[600px] text-muted-foreground text-base md:text-lg space-y-4 whitespace-pre-wrap" 
            />
          </div>
          <div className="flex items-center justify-center">
            <Card className="overflow-hidden shadow-2xl rounded-lg">
              <CardContent className="p-0">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  data-ai-hint={aboutImage.imageHint}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
