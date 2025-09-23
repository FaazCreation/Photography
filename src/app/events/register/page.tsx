'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { UserCheck, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { eventRegistrationSchema } from '@/lib/schemas';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Metadata cannot be exported from a client component.
/*
export const metadata: Metadata = {
  title: 'Event Registration',
  description: 'Register for an upcoming event with the Tejgaon College Photography Club.',
};
*/

// This would typically come from a database or API
const upcomingEvents = [
  { id: 'photo-walk-old-dhaka', name: 'Monthly Photo Walk: Old Dhaka' },
  { id: 'workshop-portrait-lighting', name: 'Workshop: Introduction to Portrait Lighting' },
];

type RegistrationFormValues = z.infer<typeof eventRegistrationSchema>;

export default function EventRegistrationPage() {
  const { toast } = useToast();
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(eventRegistrationSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsappNumber: '',
      memberId: '',
      eventId: '',
    },
  });

  function onSubmit(data: RegistrationFormValues) {
    console.log(data);
    toast({
      title: 'Registration Successful!',
      description: 'Thank you for registering. We look forward to seeing you at the event!',
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Event Registration
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          Confirm your spot for one of our upcoming events.
        </p>
      </div>

      <div className="mx-auto max-w-2xl pt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <UserCheck />
                Register for an Event
            </CardTitle>
            <CardDescription>
                Fill out the form below to secure your place.
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
                        <FormLabel>Full Name</FormLabel>
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
                        <FormLabel>Email Address</FormLabel>
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
                    name="memberId"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Student ID</FormLabel>
                        <FormControl>
                        <Input placeholder="TC123456" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                  control={form.control}
                  name="eventId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an event to register for" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {upcomingEvents.map((event) => (
                            <SelectItem key={event.id} value={event.id}>
                              {event.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Register Now
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}