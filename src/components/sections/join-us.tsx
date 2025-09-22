import { Mail, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { AnimatedHeadline } from '../animated-headline';

export function JoinUs() {
  return (
    <section id="join" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in-up [animation-delay:1.2s] animation-duration-1000">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <AnimatedHeadline text="Join Our Club" />
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to start your photography journey with us? We'd love to have you.
          </p>
           <Button asChild size="lg">
              <Link href="/join">Apply Now</Link>
            </Button>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 pt-16">
          <Card className="text-center flex flex-col">
            <CardHeader>
              <Users className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Membership Benefits</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside text-left text-muted-foreground space-y-2">
                <li>Access to exclusive workshops</li>
                <li>Participate in photo walks</li>
                <li>Showcase work in exhibitions</li>
                <li>Networking opportunities</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col">
            <CardHeader>
              <MapPin className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 flex-grow">
              <p className="text-muted-foreground">Tejgaon College, Dhaka</p>
              <p className="text-muted-foreground">Room 304, Arts Building</p>
              <p className="text-muted-foreground">Fridays, 3:00 PM - 5:00 PM</p>
            </CardContent>
          </Card>
          <Card className="text-center flex flex-col">
            <CardHeader>
              <Mail className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="mt-4">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col justify-center items-center">
              <p className="text-muted-foreground">For any inquiries, feel free to email us.</p>
              <Button asChild>
                <a href="mailto:contact@tcpc.edu">Email the Club</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
