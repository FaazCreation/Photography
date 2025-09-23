import { Camera, Image, Map, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedHeadline } from "../animated-headline";

const activities = [
  {
    icon: <Image className="h-10 w-10 text-primary" />,
    title: "Workshops",
    description: "Hands-on sessions on lighting, editing and more.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Photo Walks",
    description: "Explore scenic spots and practice your skills.",
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "Exhibitions",
    description: "Showcase your best work to a larger audience.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Competitions",
    description: "Challenge yourself and win exciting prizes.",
  },
];

export function Activities() {
  return (
    <section id="activities" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AnimatedHeadline text="Workshops & Activities" />
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
            Engage, learn, and grow with our diverse range of activities tailored for every photography enthusiast.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-4 pt-12">
          {activities.map((activity, index) => (
            <Card key={index} className="text-center p-6 bg-background">
              <CardHeader className="p-0 flex flex-col items-center">
                {activity.icon}
                <CardTitle className="mt-4 text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
