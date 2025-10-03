
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImageById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function FounderPresident() {
  const founder = getImageById('founder');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
           <div className="flex items-center justify-center lg:order-last">
            <Card className="overflow-hidden shadow-2xl rounded-lg max-w-md w-full">
              <CardContent className="p-0">
                <Image
                  src={founder.imageUrl}
                  alt={founder.name || 'Portrait of Founder of Tejgaon College Photography Club (TCPC)'}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full aspect-square"
                  data-ai-hint={founder.imageHint}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Badge>A Word from Our Founder</Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl text-primary leading-tight">
                The Vision Behind TCPC
            </h2>
             <div className="prose max-w-full text-muted-foreground text-base md:text-lg">
                <p>
                  "{founder.quote}"
                </p>
             </div>
             <div className='pt-4'>
                <p className='font-semibold'>{founder.name}</p>
                <p className='text-sm text-muted-foreground'>{founder.role}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

    