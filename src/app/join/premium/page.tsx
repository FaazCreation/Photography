
'use client'

import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { useToast } from "../../../hooks/use-toast";
import { Check, Gem, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { premiumPaymentSchema } from "../../../lib/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

const premiumBenefits = [
  'Priority access to club equipment',
  'Exclusive one-on-one mentorship sessions',
  'Access to advanced, pro-level workshops',
  'Discounts on printing and exhibition fees',
  'Personalized portfolio review sessions',
  'Feature on our website\'s homepage',
  'Free entry to all paid events'
];

type PremiumFormValues = z.infer<typeof premiumPaymentSchema>;

export default function PremiumPage() {
    const { toast } = useToast();
    const form = useForm<PremiumFormValues>({
        resolver: zodResolver(premiumPaymentSchema),
        defaultValues: {
            name: "",
            memberId: "",
            transactionId: "",
        },
    });

    function onSubmit(data: PremiumFormValues) {
        console.log(data);
        toast({
            title: "Payment Submitted for Verification!",
            description: "Thank you! We will verify your payment and activate your premium membership within 24 hours.",
        });
        form.reset();
    }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
        <div className="flex justify-start mb-8">
            <Button asChild variant="outline">
                <Link href="/join">
                <ArrowLeft className="mr-2"/>
                Back to Memberships
                </Link>
            </Button>
        </div>
        <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Card>
                <CardHeader className="text-center">
                    <Gem className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mt-4 leading-tight">
                        TCPC Premium Membership
                    </CardTitle>
                    <CardDescription className="text-xl text-muted-foreground px-4">
                        Unlock your full creative potential.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">Exclusive Benefits</h3>
                        <div className="space-y-4">
                            {premiumBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="text-center bg-secondary p-6 rounded-lg">
                        <p className="text-lg">Annual Fee</p>
                        <p className="text-4xl font-bold text-primary">BDT 2400</p>
                        <p className="text-sm text-muted-foreground">Billed once per year</p>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Manual Payment Instructions</CardTitle>
                        <CardDescription>Follow these steps to upgrade your TCPC membership.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">1</div>
                            <div>
                                <p className="font-semibold">Send Money via bKash</p>
                                <p className="text-muted-foreground text-sm">Open your bKash app and choose the "Send Money" option.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">2</div>
                            <div>
                                <p className="font-semibold">Enter Details</p>
                                <p className="text-muted-foreground text-sm">
                                    Enter our bKash number: <strong className="text-foreground">01234567890</strong> <br/>
                                    Enter the amount: <strong className="text-foreground">BDT 2400</strong> <br/>
                                    In the <strong className="text-foreground">Reference</strong> field, enter your <strong className="text-foreground">Member ID</strong>.
                                </p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">3</div>
                            <div>
                                <p className="font-semibold">Save Transaction ID</p>
                                <p className="text-muted-foreground text-sm">After the payment is complete, copy the bKash Transaction ID (TrxID).</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                        <CardTitle>Confirm Your Payment</CardTitle>
                        <CardDescription>Fill out the form below after you have completed the payment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Full Name</FormLabel>
                                        <FormControl>
                                        <Input placeholder="As it appears on your ID" {...field} />
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
                                        <FormLabel>Your Member ID</FormLabel>
                                        <FormControl>
                                        <Input placeholder="The ID used in the payment reference" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="transactionId"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>bKash Transaction ID (TrxID)</FormLabel>
                                        <FormControl>
                                        <Input placeholder="e.g., 9X7Y6Z5A4B" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full">
                                    <Send className="mr-2 h-4 w-4" />
                                    Submit for Verification
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                 </Card>
            </div>

        </div>
    </div>
  );
}
