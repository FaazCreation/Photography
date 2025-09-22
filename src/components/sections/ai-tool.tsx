'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
import { Wand2, Loader2, Camera, Compass, ListChecks } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getStyleSuggestionAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { StyleSuggestionSchema } from '@/lib/schemas';
import type { SuggestPhotoStyleOutput } from '@/ai/flows/photo-style-suggestion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type Suggestion = SuggestPhotoStyleOutput['suggestions'][0];

export function AiTool() {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof StyleSuggestionSchema>>({
    resolver: zodResolver(StyleSuggestionSchema),
    defaultValues: {
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof StyleSuggestionSchema>) {
    setIsLoading(true);
    setSuggestions(null);

    const result = await getStyleSuggestionAction(values);

    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    }

    setIsLoading(false);
  }

  return (
    <section id="ai-tool" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">AI Photo Style Tool</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unsure how to shoot a scene? Describe it below and let our AI suggest creative photographic styles for you to try.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Scene Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A lone tree on a foggy hill at sunrise"
                        className="resize-none bg-background"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Suggest Styles
              </Button>
            </form>
          </Form>

          {isLoading && (
            <Card className="mt-8 text-left">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <div>
                    <p className="font-semibold">Generating suggestions...</p>
                    <p className="text-sm text-muted-foreground">Our AI is thinking creatively for you.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {suggestions && (
            <Card className="mt-8 text-left animate-fade-in-up">
              <CardHeader>
                <CardTitle>Style Suggestions</CardTitle>
                <CardDescription>Here are some creative approaches you could take. Click to expand.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {suggestions.map((suggestion, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-3">
                          <Camera className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{suggestion.styleName}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-5">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold flex items-center gap-2 mb-2">
                              <Compass />
                              Why it works
                            </h4>
                            <p className="text-muted-foreground">{suggestion.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold flex items-center gap-2 mb-2">
                              <ListChecks />
                              Technical Tips
                            </h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                              {suggestion.technicalTips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
