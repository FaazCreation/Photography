'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, MapPin, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { contactFormSchema } from '@/lib/schemas';
import { SocialIcon } from 'react-social-icons';
import { Separator } from '@/components/ui/separator';

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { network: 'facebook', url: 'https://facebook.com/your-club' },
  { network: 'instagram', url: 'https://instagram.com/your-club' },
  { network: 'x', url: 'https://x.com/your-club' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsappNumber: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tighter sm:text-5xl text-primary leading-tight">
          Get in Touch
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          Have a question or want to collaborate? Send us a message or find us online.
        </p>
      </div>

      <div className="mx-auto max-w-6xl pt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
        
        <Card className="order-2 lg:order-1 mt-12 lg:mt-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Info />
                Contact Information
            </CardTitle>
             <CardDescription>
                Other ways to connect with us.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <p className="font-semibold text-foreground">Club Email</p>
                    <a href="mailto:contact@tcpc.edu" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@tcpc.edu
                    </a>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <p className="font-semibold text-foreground">Our Location</p>
                    <p className="text-muted-foreground">Room 304, Arts Building</p>
                    <p className="text-muted-foreground">Tejgaon College, Dhaka-1215</p>
                </div>
              </div>

              <Separator />

               <div>
                    <p className="font-semibold text-foreground mb-4">Follow Us</p>
                    <div className="flex items-center gap-4">
                      {socialLinks.map((social) => (
                        <SocialIcon 
                            key={social.network} 
                            url={social.url} 
                            style={{ height: 40, width: 40 }}
                            className="hover:scale-110 transition-transform" 
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                      ))}
                    </div>
               </div>
          </CardContent>
        </Card>
        
        <Card className="order-1 lg:order-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Send />
                Send us a Message
            </CardTitle>
            <CardDescription>
                We'll do our best to respond within 48 hours.
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Question about membership" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." className="resize-none" rows={6} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
