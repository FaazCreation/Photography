
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getImageById } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { AnimatedHeadline } from "../animated-headline";

export function FounderPresident() {
  const founder = getImageById("founder");
  const president = getImageById("president");
  const members = [founder, president];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <AnimatedHeadline text="Our Leaders" />
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                Meet the visionary founder and the dedicated president leading our club.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 pt-12 sm:grid-cols-2">
                {members.map((member) => (
                    <Card key={member.id} className="text-center group overflow-hidden">
                        <CardContent className="p-0">
                            <div className="w-full aspect-square overflow-hidden">
                                <Image
                                    src={member.imageUrl}
                                    alt={`Portrait of ${member.name}`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={member.imageHint}
                                />
                            </div>
                        </CardContent>
                        <CardHeader className="p-4">
                            <CardTitle className="text-xl">{member.name}</CardTitle>
                            <CardDescription>{member.specialty}</CardDescription>
                        </CardHeader>
                        <div className="p-4 pt-0">
                            <Badge variant="secondary">{member.role}</Badge>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
