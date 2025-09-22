import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, MapPin, PlusCircle } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Monthly Photo Walk: Old Dhaka",
    date: "Saturday, October 12, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "Meet at Star Mosque",
    description: "Explore the historic streets and vibrant life of Old Dhaka. A great opportunity for street photography.",
  },
  {
    title: "Workshop: Introduction to Portrait Lighting",
    date: "Friday, October 18, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Room 304, Arts Building",
    description: "Learn the fundamentals of using natural and artificial light to create stunning portraits.",
  },
  {
    title: "Guest Speaker: Yousuf Tushar",
    date: "Friday, November 1, 2024",
    time: "3:30 PM - 4:30 PM",
    location: "College Auditorium",
    description: "Renowned travel photographer Yousuf Tushar shares his experiences and tips for capturing the world.",
  },
  {
    title: "Annual Exhibition: 'Dhaka Through Our Eyes'",
    date: "December 5-7, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Zainul Gallery, Faculty of Fine Arts",
    description: "Our year-end exhibition showcasing the best work from club members.",
  },
];

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Upcoming Events
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join us for workshops, photo walks, and more. All events are free for members.
        </p>
         <Button asChild>
            <Link href="/propose-event">
              <PlusCircle className="mr-2" />
              Propose an Event
            </Link>
        </Button>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 pt-12">
        {events.map((event, index) => (
          <Card key={index} className="flex flex-col md:flex-row">
            <CardHeader className="md:w-1/3 md:border-r">
              <div className="flex items-center gap-3">
                 <Calendar className="h-6 w-6 text-primary" />
                 <div>
                    <CardTitle>{event.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">{event.date}</p>
                 </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 md:w-2/3">
              <div className="space-y-4">
                <p>{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Camera className="h-4 w-4" />
                        <span>{event.time}</span>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
