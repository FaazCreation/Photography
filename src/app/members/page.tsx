import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdvisorImages, getAdminPanelImages, getGeneralMemberImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Camera, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const MemberCard = ({ member }: { member: any }) => (
    <Card className="text-center group overflow-hidden">
        <CardContent className="p-0">
            <div className="w-full aspect-square overflow-hidden rounded-t-lg">
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
        <CardFooter className="flex flex-col gap-4 p-4 pt-0">
            <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
            {member.role !== "Advisor" && (
                 <div className="flex justify-center gap-4">
                    <Link href="#" aria-label={`${member.name}'s Twitter`}>
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="#" aria-label={`${member.name}'s LinkedIn`}>
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="#" aria-label={`${member.name}'s Portfolio`}>
                        <Camera className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                </div>
            )}
        </CardFooter>
    </Card>
);

export default function MembersPage() {
    const advisors = getAdvisorImages();
    const adminPanel = getAdminPanelImages();
    const generalMembers = getGeneralMemberImages();

    return (
        <div className="container py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                    Our Club Structure
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Meet the dedicated individuals who form the backbone of our club.
                </p>
            </div>

            <div className="space-y-16 mt-16">
                {/* Advisor Panel Section */}
                <section>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
                        Advisor Panel
                    </h2>
                    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {advisors.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Admin Panel Section */}
                <section>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
                        Admin Panel
                    </h2>
                    <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {adminPanel.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                <Separator />

                {/* General Members Section */}
                <section>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">
                        General Members
                    </h2>
                    <div className="mx-auto grid max-w-6xl gap-8 pt-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {generalMembers.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
