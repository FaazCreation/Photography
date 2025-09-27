
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdvisorImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AdvisorPanel() {
  const advisors = getAdvisorImages();
  const chiefAdvisor = advisors.find(a => a.role === "Chief Advisor");
  const associateAdvisors = advisors.filter(a => a.role !== "Chief Advisor");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary leading-tight">
                Our Advisors
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base md:text-lg">
                The guiding force behind our club's success.
                </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center justify-items-center gap-8 pt-12 sm:grid-cols-2 lg:flex lg:justify-center lg:items-start">
                {chiefAdvisor && (
                    <div className="w-full order-1 lg:order-2 lg:w-1/3 lg:px-4">
                        <Card 
                            key={chiefAdvisor.id} 
                            className={cn(
                                "text-center w-full transition-transform duration-300 shadow-lg lg:scale-110 lg:z-10 lg:shadow-2xl"
                            )}
                        >
                            <CardContent className="p-0">
                                <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                                    <Image
                                        src={chiefAdvisor.imageUrl}
                                        alt={`Portrait of ${chiefAdvisor.name}`}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        data-ai-hint={chiefAdvisor.imageHint}
                                    />
                                </div>
                            </CardContent>
                            <CardHeader className="p-4">
                                <CardTitle className="text-xl">{chiefAdvisor.name}</CardTitle>
                                <CardDescription>{chiefAdvisor.specialty}</CardDescription>
                            </CardHeader>
                            <div className="p-4 pt-0">
                                <Badge variant="secondary">{chiefAdvisor.role}</Badge>
                            </div>
                        </Card>
                    </div>
                )}
                {associateAdvisors.map((advisor, index) => (
                     <div key={advisor.id} className={cn("w-full lg:w-1/3 lg:px-4", {
                         "order-2 lg:order-1 lg:mt-8": index === 0,
                         "order-3 lg:order-3 lg:mt-8": index === 1,
                     })}>
                        <Card 
                            className="text-center w-full transition-transform duration-300"
                        >
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
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
