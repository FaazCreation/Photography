import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdvisorImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

export function AdvisorPanel() {
  const advisors = getAdvisorImages();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Our Advisors
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                The guiding force behind our club's success.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl justify-items-center gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                {advisors.map((advisor) => (
                <Card key={advisor.id} className="text-center w-full max-w-sm">
                    <CardContent className="p-0">
                    <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                        <Image
                        src={advisor.imageUrl}
                        alt={`Portrait of ${advisor.name}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={advisor.imageHint}
                        />
                    </div>
                    </CardContent>
                    <CardHeader className="p-4">
                    <CardTitle className="text-xl">{advisor.name}</CardTitle>
                    <CardDescription>{advisor.specialty}</CardDescription>
                    </CardHeader>
                    <div className="p-4 pt-0">
                        <Badge variant="secondary">{advisor.role}</Badge>
                    </div>
                </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
