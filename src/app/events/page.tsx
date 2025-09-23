
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, MapPin, PlusCircle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getEventImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    status: "upcoming",
    type: "Photo Walk",
    title: "Monthly Photo Walk: Old Dhaka",
    date: "Saturday, October 12, 2024",
    time: "8:00 AM - 12:00 PM",
    location: "Meet at Star Mosque",
    description: "Explore the historic streets and vibrant life of Old Dhaka. A great opportunity for street photography.",
    registrationOpen: true,
  },
  {
    status: "upcoming",
    type: "Workshop",
    title: "Workshop: Introduction to Portrait Lighting",
    date: "Friday, October 18, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Room 304, Arts Building",
    description: "Learn the fundamentals of using natural and artificial light to create stunning portraits.",
    registrationOpen: true,
  },
  {
    status: "upcoming",
    type: "Guest Speaker",
    title: "Guest Speaker: Yousuf Tushar",
    date: "Friday, November 1, 2024",
    time: "3:30 PM - 4:30 PM",
    location: "College Auditorium",
    description: "Renowned travel photographer Yousuf Tushar shares his experiences and tips for capturing the world.",
    registrationOpen: false,
  },
  {
    status: "past",
    type: "Exhibition",
    title: "Annual Exhibition: 'Dhaka Through Our Eyes'",
    date: "December 5-7, 2023",
    time: "10:00 AM - 6:00 PM",
    location: "Zainul Gallery, Faculty of Fine Arts",
    description: "Our year-end exhibition showcased the best work from club members throughout the year.",
    imageIds: ["event-1", "event-2", "event-3"],
  },
  {
    status: "past",
    type: "Competition",
    title: "Monsoon Moments Photo Contest",
    date: "July 15, 2023",
    time: "Online Submission",
    location: "Online",
    description: "A month-long online competition to capture the essence of the monsoon season in Bangladesh.",
    imageIds: ["event-4", "event-5", "event-6"],
  },
  {
    status: "past",
    type: "Photo Walk",
    title: "Sadarghat Terminal Photo Walk",
    date: "June 10, 2023",
    time: "7:00 AM - 11:00 AM",
    location: "Sadarghat Launch Terminal",
    description: "Captured the chaos and beauty of Dhaka's main river port, a hub of activity and stories.",
    imageIds: ["event-7", "event-8", "event-9"],
  },
];

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
    const eventImages = event.status === 'past' && event.imageIds ? getEventImages(event.imageIds) : [];
    
    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-2">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">{event.type}</Badge>
                </div>
                <CardDescription className="flex items-center gap-2 pt-1">
                    <Calendar className="h-4 w-4" /> 
                    {event.date}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground">{event.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Camera className="h-4 w-4" />
                        <span>{event.time}</span>
                    </div>
                </div>
                {event.status === 'past' && eventImages.length > 0 && (
                    <div>
                        <h4 className="text-sm font-semibold mb-3 mt-4">Event Glimpses</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {eventImages.map(image => (
                                <div key={image.id} className="relative aspect-square w-full overflow-hidden rounded-md">
                                    <Image 
                                        src={image.imageUrl} 
                                        alt={image.description || 'Event photo'} 
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
            {event.status === 'upcoming' && (
                <CardFooter>
                    {event.registrationOpen ? (
                        <Button className="w-full" asChild>
                            <Link href="/book-us">Register Now</Link>
                        </Button>
                    ) : (
                        <Button className="w-full" disabled variant="outline">
                            <CheckCircle className="mr-2" />
                            Registration Coming Soon
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
}

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Club Events
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          Join us for workshops, photo walks and more. See what we've been up to.
        </p>
         <Button asChild>
            <Link href="/propose-event">
              <PlusCircle className="mr-2" />
              Propose an Event
            </Link>
        </Button>
      </div>
      
      <div className="mx-auto max-w-6xl pt-12">
        <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
                <div className="grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event, index) => <EventCard key={index} event={event} />)
                    ) : (
                        <p className="text-muted-foreground text-center md:col-span-2 lg:col-span-3">No upcoming events scheduled. Check back soon!</p>
                    )}
                </div>
            </TabsContent>
            <TabsContent value="past">
                <div className="grid gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
                     {pastEvents.length > 0 ? (
                        pastEvents.map((event, index) => <EventCard key={index} event={event} />)
                    ) : (
                        <p className="text-muted-foreground text-center md:col-span-2 lg:col-span-3">No past event records yet.</p>
                    )}
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
