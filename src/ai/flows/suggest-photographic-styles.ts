'use server';

/**
 * @fileOverview AI-powered tool that suggests photographic styles or techniques based on a description.
 *
 * - suggestPhotographicStyles - A function that suggests photographic styles.
 * - SuggestPhotographicStylesInput - The input type for the suggestPhotographicStyles function.
 * - SuggestPhotographicStylesOutput - The return type for the suggestPhotographicStyles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPhotographicStylesInputSchema = z.object({
  description: z.string().describe('A description of the scene or subject to be photographed.'),
});
type SuggestPhotographicStylesInput = z.infer<typeof SuggestPhotographicStylesInputSchema>;

const SuggestPhotographicStylesOutputSchema = z.object({
  styleSuggestion: z.string().describe('A single suggested photographic style or technique.'),
});
type SuggestPhotographicStylesOutput = z.infer<typeof SuggestPhotographicStylesOutputSchema>;

export async function suggestPhotographicStyles(input: SuggestPhotographicStylesInput): Promise<SuggestPhotographicStylesOutput> {
  return suggestPhotographicStylesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPhotographicStylesPrompt',
  input: {schema: SuggestPhotographicStylesInputSchema},
  output: {schema: SuggestPhotographicStylesOutputSchema},
  prompt: `You are a photography expert. Based on the description of the scene or subject provided, suggest a single photographic style or technique that would be effective.\n\nDescription: {{{description}}}`,
});

const suggestPhotographicStylesFlow = ai.defineFlow(
  {
    name: 'suggestPhotographicStylesFlow',
    inputSchema: SuggestPhotographicStylesInputSchema,
    outputSchema: SuggestPhotographicStylesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
