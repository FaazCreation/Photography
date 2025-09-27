
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdminPanelImages, getGeneralMemberImages, getImageById, getAlumniImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedHeadline } from "@/components/animated-headline";
import { AdvisorPanel } from "@/components/sections/advisor-panel";

export const metadata: Metadata = {
  title: 'Our Members | TCPC',
  description: 'Meet the dedicated individuals of the Tejgaon College Photography Club (TCPC), from our experienced advisor panel to our passionate general members and distinguished alumni.',
};

const MemberCard = ({ member }: { member: any }) => (
    <Card className="text-center group overflow-hidden">
        <CardContent className="p-0">
            <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}, member of Tejgaon College Photography Club (TCPC)`}
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
        <CardFooter className="flex flex-col gap-4 p-4 pt-0">
            <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
        </CardFooter>
    </Card>
);


const PhotographerOfTheMonth = () => {
    const spotlightMember = getImageById('spotlight-1');
    return (
        <section className="bg-secondary py-12 md:py-24 lg:py-32">
            <div className="container">
                 <div className="flex flex-col items-center space-y-4 text-center mb-12">
                    <AnimatedHeadline text="Photographer of the Month" className="text-2xl sm:text-3xl" />
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-lg">
                        This month, TCPC features one of our most dedicated members. Get to know the artist behind the lens.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex items-center justify-center">
                        <Card className="overflow-hidden shadow-2xl rounded-lg max-w-md w-full">
                        <CardContent className="p-0">
                            <Image
                            src={spotlightMember.imageUrl}
                            alt={spotlightMember.name || 'Portrait of a featured member from Tejgaon College Photography Club (TCPC)'}
                            width={600}
                            height={600}
                            className="object-cover object-top w-full h-full aspect-square"
                            data-ai-hint={spotlightMember.imageHint}
                            />
                        </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-4">
                        <Badge>Featured TCPC Member</Badge>
                        <h3 className="font-heading text-3xl font-semibold tracking-tighter text-primary leading-tight">
                            {spotlightMember.name}
                        </h3>
                        <div className="prose max-w-full text-muted-foreground text-base md:text-lg">
                            <p>
                                "{spotlightMember.quote}"
                            </p>
                        </div>
                        <div className='pt-2'>
                            <p className='font-semibold'>{spotlightMember.name}</p>
                            <p className='text-sm text-muted-foreground'>{spotlightMember.role}, {spotlightMember.specialty}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function MembersPage() {
    const committee = getAdminPanelImages();
    const activeMembers = getGeneralMemberImages();
    const alumni = getAlumniImages();

    return (
        <div>
            <div className="container py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h1 className="font-heading text-3xl font-semibold tracking-tighter sm:text-5xl text-primary leading-tight">
                        <span className="sm:hidden">Club Structure</span>
                        <span className="hidden sm:inline">Our Club Structure at TCPC</span>
                    </h1>
                    <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
                        Meet the dedicated individuals who form the backbone of the Tejgaon College Photography Club (TCPC), from our advisors and committee to our talented members and alumni.
                    </p>
                </div>

                <div className="space-y-16 mt-16">
                    <AdvisorPanel />

                    <Separator />

                    {/* Current Committee Section */}
                    <section>
                        <h2 className="font-heading text-3xl font-semibold tracking-tighter sm:text-4xl text-center mb-8 leading-tight">
                            Current Committee
                        </h2>
                        <div className="mx-auto grid max-w-6xl gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
                            {committee.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Photographer of the month - full width section */}
            <div className="my-16">
                <PhotographerOfTheMonth />
            </div>
            
            <div className="container">
                <div className="space-y-16">
                    {/* Active Members Section */}
                    <section>
                        <h2 className="font-heading text-3xl font-semibold tracking-tighter sm:text-4xl text-center mb-8 leading-tight">
                            Active Members
                        </h2>
                        <div className="mx-auto grid max-w-6xl gap-8 pt-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                            {activeMembers.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </section>

                    <Separator />
                    
                    {/* Alumni Section */}
                    <section>
                        <h2 className="font-heading text-3xl font-semibold tracking-tighter sm:text-4xl text-center mb-8 leading-tight">
                            Our Alumni
                        </h2>
                        <div className="mx-auto grid max-w-6xl gap-8 pt-2 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                            {alumni.map((member) => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
