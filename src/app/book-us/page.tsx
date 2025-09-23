'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CalendarCheck, List, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { bookingSchema } from '@/lib/schemas';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';

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
      whatsappNumber: '',
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
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary leading-tight">
          Book Our Services
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          Need coverage for your event? Fill out the form below to book the Tejgaon College Photography Club (TCPC).
        </p>
      </div>

      <div className="mx-auto max-w-6xl pt-12 grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:gap-16 items-start">
        
        <Card className="md:order-2">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <List />
                    Terms & Conditions
                </CardTitle>
                 <CardDescription>
                    Please review our conditions before booking.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">&#x2713;</span>
                        <span>Our services are primarily for events held within the <strong className="font-semibold text-foreground">Tejgaon College campus</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">&#x2713;</span>
                        <span>For professional or non-college events, a <strong className="font-semibold text-foreground">service charge</strong> will be applicable. Please discuss the details with us.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">&#x2713;</span>
                        <span>The <strong className="font-semibold text-foreground">Tejgaon College Photography Club (TCPC)</strong> must be credited in all event promotions and media.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary font-bold mt-1">&#x2713;</span>
                        <span>Arrangements for <strong className="font-semibold text-foreground">snacks and lunch</strong> for the photography team on the event day are required.</span>
                    </li>
                </ul>
            </CardContent>
        </Card>

        <Card className="md:order-1 mt-8 md:mt-0">
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
                  name="whatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 01712345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
