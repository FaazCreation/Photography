'use server';

/**
 * @fileOverview AI-powered tool that suggests photographic styles or techniques based on a description.
 *
 * - suggestPhotoStyle - A function that suggests photographic styles.
 * - SuggestPhotoStyleInput - The input type for the suggestPhotoStyle function.
 * - SuggestPhotoStyleOutput - The return type for the suggestPhotoStyle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestPhotoStyleInputSchema = z.object({
  description: z.string().describe('A description of the scene or subject to be photographed.'),
});
type SuggestPhotoStyleInput = z.infer<typeof SuggestPhotoStyleInputSchema>;

const SuggestPhotoStyleOutputSchema = z.object({
  styleSuggestion: z.string().describe('A single suggested photographic style or technique.'),
});
type SuggestPhotoStyleOutput = z.infer<typeof SuggestPhotoStyleOutputSchema>;

export async function suggestPhotoStyle(input: SuggestPhotoStyleInput): Promise<SuggestPhotoStyleOutput> {
  return suggestPhotoStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPhotoStylePrompt',
  input: {schema: SuggestPhotoStyleInputSchema},
  output: {schema: SuggestPhotoStyleOutputSchema},
  prompt: `You are a photography expert. Based on the description of the scene or subject provided, suggest a single photographic style or technique that would be effective.

Description: {{{description}}}`,
});

const suggestPhotoStyleFlow = ai.defineFlow(
  {
    name: 'suggestPhotoStyleFlow',
    inputSchema: SuggestPhotoStyleInputSchema,
    outputSchema: SuggestPhotoStyleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
