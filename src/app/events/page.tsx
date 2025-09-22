import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Upcoming Events
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join us for workshops, photo walks, and more.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-8 pt-12">
        <Card className="text-center">
          <CardHeader>
            <Calendar className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="mt-4">Events Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Check back soon for our schedule of events. We are planning exciting workshops, photo walks, and exhibitions for our members.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
