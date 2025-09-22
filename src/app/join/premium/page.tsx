
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, Gem, CreditCard, ArrowLeft } from "lucide-react";
import Link from "next/link";

const premiumBenefits = [
  'Priority access to club equipment',
  'Exclusive one-on-one mentorship sessions',
  'Access to advanced, pro-level workshops',
  'Discounts on printing and exhibition fees',
  'Personalized portfolio review sessions',
  'Feature on our website\'s homepage',
  'Free entry to all paid events'
];

export default function PremiumPage() {
    const { toast } = useToast();

    const handlePayment = () => {
        toast({
            title: "Thank you for upgrading!",
            description: "Welcome to Premium Membership. Your payment is confirmed and all benefits are now active.",
        });
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
        <div className="mx-auto max-w-3xl">
            <Card>
                <CardHeader className="text-center">
                    <Gem className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mt-4">
                        Premium Membership
                    </CardTitle>
                    <CardDescription className="text-xl text-muted-foreground">
                        Unlock your full creative potential.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">Exclusive Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
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
                        <p className="text-4xl font-bold text-primary">BDT 1000</p>
                        <p className="text-sm text-muted-foreground">Billed once per year</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full" onClick={handlePayment}>
                        <CreditCard className="mr-2" />
                        Confirm & Pay
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}
