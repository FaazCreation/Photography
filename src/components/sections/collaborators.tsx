import Image from 'next/image';
import { getCollaboratorImages } from '@/lib/placeholder-images';
import { AnimatedHeadline } from '@/components/animated-headline';
import { Card, CardContent } from '@/components/ui/card';

export function Collaborators() {
  const collaborators = getCollaboratorImages();

  return (
    <section id="collaborators" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:0.8s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AnimatedHeadline text="Worked With" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" />
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
            Our photography club often collaborates with other clubs at Tejgaon College <br /> to cover their events and share creative projects.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl justify-center gap-6 pt-16 grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-2 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl aspect-square">
              <Card className="rounded-full overflow-hidden border-2 border-primary/10 w-16 h-16 md:w-20 md:h-20">
                <CardContent className="p-0">
                  <Image
                    src={collaborator.imageUrl}
                    alt={collaborator.name ? `Logo for ${collaborator.name}` : 'Collaborator Club Logo for TCPC'}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    data-ai-hint={collaborator.imageHint}
                  />
                </CardContent>
              </Card>
              <p className="text-xs font-semibold text-foreground text-center">{collaborator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
