import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getImageById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function AdvisorSpeech() {
  const chiefAdvisor = getImageById('advisor-1');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
           <div className="flex items-center justify-center">
            <Card className="overflow-hidden shadow-2xl rounded-lg max-w-md w-full">
              <CardContent className="p-0">
                <Image
                  src={chiefAdvisor.imageUrl}
                  alt={chiefAdvisor.name || 'Portrait of Chief Advisor of Tejgaon College Photography Club (TCPC)'}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full aspect-square"
                  data-ai-hint={chiefAdvisor.imageHint}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <Badge>Message from our Chief Advisor</Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary leading-tight">
                A Word of Encouragement
            </h2>
             <div className="prose max-w-full text-muted-foreground text-base md:text-lg">
                <p>
                "Photography is a powerful medium of expression. It allows us to freeze a moment, tell a story and share our unique perspective with the world. Here at Tejgaon College Photography Club (TCPC), we are more than just a group of students with cameras; we are a family of creators, innovators and storytellers."
                </p>
                <p>
                "I have watched this club grow and flourish, and I am continually impressed by the talent and passion of our members. Whether you are capturing the bustling energy of Dhaka's streets, the serene beauty of a village landscape, or the intimate emotion of a portrait, you are contributing to a rich visual tapestry. I encourage you all to keep exploring, keep learning and never be afraid to push the boundaries of your creativity. Your vision is valuable, and we are here to support you in every step of your photographic journey."
                </p>
             </div>
             <div className='pt-4'>
                <p className='font-bold'>{chiefAdvisor.name}</p>
                <p className='text-sm text-muted-foreground'>{chiefAdvisor.role}, {chiefAdvisor.specialty}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
