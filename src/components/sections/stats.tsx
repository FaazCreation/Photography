import { Calendar, Users, Camera, Award, Milestone } from 'lucide-react';

const stats = [
  {
    icon: <Milestone className="h-10 w-10 text-primary" />,
    value: '2010',
    label: 'Founded',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '150+',
    label: 'Members',
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    value: '50+',
    label: 'Events Hosted',
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    value: '10+',
    label: 'Exhibitions',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    value: '25+',
    label: 'Awards Won',
  },
];

export function Stats() {
  return (
    <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in-up [animation-delay:0.2s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Club at a Glance</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A snapshot of our vibrant and growing community of photographers.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center space-y-3 text-center">
              {stat.icon}
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-lg font-semibold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
