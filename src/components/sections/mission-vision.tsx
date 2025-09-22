import { Eye, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function MissionVision() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base md:text-lg">
                To provide a platform for student photographers to explore their creativity, develop their technical skills, and build a strong, collaborative community. We aim to document college life and tell compelling stories through the art of photography.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-base md:text-lg">
                To be the leading hub for creative visual arts at Tejgaon College, fostering a new generation of photographers who are not only skilled but also socially conscious storytellers, recognized for their unique perspectives and artistic excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
