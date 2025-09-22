import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMemberImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Camera, Linkedin, Twitter } from "lucide-react";

export default function MembersPage() {
  const members = getMemberImages();

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Our Members
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The talented individuals who make our club a creative hub.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <Card key={member.id} className="text-center">
            <CardContent className="p-0">
              <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                <Image
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={member.imageHint}
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <Badge variant="secondary" className="mx-auto mt-1">{member.role}</Badge>
              <p className="text-sm text-muted-foreground pt-2">{member.specialty}</p>
              <div className="flex justify-center gap-4 pt-3">
                 <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                 <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                 <Camera className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
