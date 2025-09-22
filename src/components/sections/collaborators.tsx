import { Briefcase, Code, Dna, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const collaboratorsList = [
  {
    name: 'Zoology Club',
    icon: <Dna className="h-12 w-12 text-primary" />,
  },
  {
    name: 'Programming Club',
    icon: <Code className="h-12 w-12 text-primary" />,
  },
  {
    name: 'Sociology Club',
    icon: <Users className="h-12 w-12 text-primary" />,
  },
  {
    name: 'Business Club',
    icon: <Briefcase className="h-12 w-12 text-primary" />,
  },
];

export function Collaborators() {
  return (
    <section id="collaborators" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">We Work With</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our photography club often collaborates with other clubs at Tejgaon College to cover their events and share creative projects.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12 pt-16">
          {collaboratorsList.map((collaborator) => (
            <Card key={collaborator.name} className="text-center flex flex-col items-center justify-center p-6 border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                {collaborator.icon}
                <p className="mt-4 font-semibold">{collaborator.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
