import { Building, Users, BookOpen, UserCheck, Milestone } from 'lucide-react';

const stats = [
  {
    icon: <Milestone className="h-10 w-10 text-primary" />,
    value: '1961',
    label: 'Founded',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: '230+',
    label: 'Faculties',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    value: '28',
    label: 'Departments',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    value: '160+',
    label: 'Academic Staff',
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    value: '24,000+',
    label: 'Students',
  },
];

export function Stats() {
  return (
    <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Tejgaon College at a Glance</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A rich history of academic excellence and community since 1961.
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
