import { Camera, Film, Lightbulb, Users, Award, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeadline } from "@/components/animated-headline";

const benefits = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Expert-Led Workshops",
    description: "Learn everything from camera basics to advanced lighting and post-processing techniques from seasoned photographers.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Regular Photo Walks",
    description: "Join curated trips to explore interesting locations, practice your skills and capture stunning images with fellow members.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Exhibitions & Contests",
    description: "Showcase your best work in our annual exhibitions and participate in friendly contests to win prizes and recognition.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Creative Community",
    description: "Connect with a diverse group of passionate photographers, share ideas, receive feedback and grow together.",
  },
  {
    icon: <Film className="h-10 w-10 text-primary" />,
    title: "Access to Equipment",
    description: "Get hands-on experience with a variety of club-owned cameras, lenses and lighting gear for your projects.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Networking Opportunities",
    description: "Build connections with professionals and alumni in the photography industry through our guest speaker sessions and events.",
  },
];

export function WhatWeProvide() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up [animation-delay:0.6s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AnimatedHeadline text="What We Provide" />
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
            As a member of our club, you'll receive access to a wide range of resources and opportunities to fuel your passion for photography.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 bg-secondary/50 border-0 shadow-none">
              <CardHeader className="p-0 flex flex-col items-center">
                {benefit.icon}
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
