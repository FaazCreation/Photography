
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImageById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { AnimatedHeadline } from '@/components/animated-headline';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MemberSpotlight() {
  const spotlightMember = getImageById('spotlight-1');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <AnimatedHeadline text="Member Spotlight" />
            <p className="max-w-[700px] text-muted-foreground text-base md:text-lg">
                This month, TCPC features one of our most dedicated members. Get to know the artist behind the lens.
            </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center">
           <div className="flex items-center justify-center">
            <Card className="overflow-hidden shadow-2xl rounded-lg max-w-md w-full">
              <CardContent className="p-0">
                <Image
                  src={spotlightMember.imageUrl}
                  alt={spotlightMember.name || 'Portrait of member of Tejgaon College Photography Club (TCPC)'}
                  width={600}
                  height={600}
                  className="object-cover object-top w-full h-full aspect-square"
                  data-ai-hint={spotlightMember.imageHint}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Badge>Featured Member</Badge>
            <h3 className="font-heading text-3xl font-semibold tracking-tighter text-primary leading-tight">
                {spotlightMember.name}
            </h3>
             <div className="prose max-w-full text-muted-foreground text-base md:text-lg">
                <p>
                    "{spotlightMember.quote}"
                </p>
             </div>
             <div className='pt-2'>
                <p className='font-bold'>{spotlightMember.name}</p>
                <p className='text-sm text-muted-foreground'>{spotlightMember.role}, {spotlightMember.specialty}</p>
             </div>
             <div className='pt-4'>
                <Button asChild>
                    <Link href="/members">Meet All Members</Link>
                </Button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
