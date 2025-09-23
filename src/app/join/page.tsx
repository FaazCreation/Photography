'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, Send, Gem } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { membershipApplicationSchema } from '@/lib/schemas';
import { Check } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const premiumBenefits = [
  'Priority access to club equipment',
  'Exclusive one-on-one mentorship sessions',
  'Access to advanced, pro-level workshops',
  'Discounts on printing and exhibition fees',
  'Personalized portfolio review sessions'
];

type MembershipFormValues = z.infer<typeof membershipApplicationSchema>;

export default function JoinPage() {
  const { toast } = useToast();
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipApplicationSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsappNumber: '',
      memberId: '',
      department: '',
      interests: '',
    },
  });

  function onSubmit(data: MembershipFormValues) {
    console.log(data);
    toast({
      title: 'Application Sent!',
      description: "Thanks for your interest in joining! We'll review your application and get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Become a Member
        </h1>
        <p className="max-w-[900px] text-muted-foreground text-base md:text-lg px-4">
          Ready to start your photography journey with us? Fill out the form below to apply for a standard membership.
        </p>
      </div>

      <div className="mx-auto max-w-2xl pt-12 grid gap-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <UserPlus />
                Standard Membership Application
            </CardTitle>
            <CardDescription>
                Membership is open to all students of Tejgaon College.
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

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        name="department"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Department</FormLabel>
                            <FormControl>
                            <Input placeholder="e.g., Computer Science" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Photographic Interests</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us what you love to photograph (e.g., portraits, landscapes, street, etc.)" className="resize-none" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Separator />

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
                <Gem />
                Upgrade to Premium
            </CardTitle>
            <CardDescription>
                Unlock exclusive benefits and take your photography skills to the next level with a Premium Membership.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="space-y-3">
                  {premiumBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-muted-foreground">{benefit}</span>
                      </div>
                  ))}
              </div>
              <Button asChild size="lg" className="w-full">
                  <Link href="/join/premium">Upgrade to Premium Now</Link>
              </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}