import { Briefcase, Code, Dna, Film, Mic, Users } from 'lucide-react';

const collaboratorsList = [
  {
    name: 'Zoology Club',
    icon: <Dna className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
  {
    name: 'Programming Club',
    icon: <Code className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
  {
    name: 'Sociology Club',
    icon: <Users className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
  {
    name: 'Business Club',
    icon: <Briefcase className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
  {
    name: 'Debating Club',
    icon: <Mic className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
  {
    name: 'Film Club',
    icon: <Film className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />,
  },
];

export function Collaborators() {
  return (
    <section id="collaborators" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:0.8s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">We Work With</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our photography club often collaborates with other clubs at Tejgaon College to cover their events and share creative projects.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center justify-center gap-4 pt-16 grid-cols-3 sm:grid-cols-3 lg:grid-cols-6">
          {collaboratorsList.map((collaborator) => (
            <div key={collaborator.name} className="group flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl aspect-square">
              {collaborator.icon}
              <p className="text-sm font-semibold text-foreground">{collaborator.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
