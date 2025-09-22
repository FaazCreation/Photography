import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rss } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Club Blog
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Tips, stories, and insights from our members.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-8 pt-12">
        <Card className="text-center">
          <CardHeader>
            <Rss className="mx-auto h-12 w-12 text-primary" />
            <CardTitle className="mt-4">Our Blog is Coming Soon!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We're currently creating content for our blog. Soon you'll find articles on photography techniques, gear reviews, member spotlights, and much more.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
