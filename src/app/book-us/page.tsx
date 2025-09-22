'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CalendarCheck, Send, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { bookingSchema } from '@/lib/schemas';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const services = [
    { id: "photography", label: "Photography" },
    { id: "videography", label: "Videography" },
    { id: "editing", label: "Photo/Video Editing" },
    { id: "drone", label: "Drone Footage" },
]

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookUsPage() {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      eventName: '',
      services: [],
      message: '',
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    toast({
      title: 'Booking Request Sent!',
      description: 'Thank you for your request. We will review the details and get back to you shortly to confirm.',
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Book Our Services
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Need coverage for your event? Fill out the form below to book the Tejgaon College Photography Club.
        </p>
      </div>

      <div className="mx-auto max-w-2xl pt-12 grid gap-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <CalendarCheck />
                Event Booking Form
            </CardTitle>
            <CardDescription>
                Please provide as much detail as possible. We'll respond within 48 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jane.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="eventName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Annual Computer Science Fest" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Event Date</FormLabel>
                        <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                            <Button
                                variant={"outline"}
                                className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                                )}
                            >
                                {field.value ? (
                                format(field.value, "PPP")
                                ) : (
                                <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                        </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="services"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Services Required</FormLabel>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                            {services.map((item) => (
                                <FormField
                                key={item.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                    return (
                                    <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                        <FormControl>
                                        <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([...(field.value || []), item.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                    (value) => value !== item.id
                                                    )
                                                )
                                            }}
                                        />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                        {item.label}
                                        </FormLabel>
                                    </FormItem>
                                    )
                                }}
                                />
                            ))}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us more about the event, location, specific requirements, etc." className="resize-none" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Booking Request
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Video />
                    Schedule a Virtual Meeting
                </CardTitle>
                <CardDescription>
                    Want to discuss your event in more detail? Schedule a Google Meet call with our team.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild className="w-full">
                    <Link href="#" target="_blank">
                        Book a 15-Minute Call
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
