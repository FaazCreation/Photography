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

const SuggestionSchema = z.object({
  styleName: z.string().describe('The name of the photographic style.'),
  description: z.string().describe("A brief description of this style and why it's a good fit for the scene."),
  technicalTips: z
    .array(z.string())
    .describe('A list of 2-3 specific, actionable camera setting or composition tips for achieving this style.'),
});

const SuggestPhotoStyleInputSchema = z.object({
  description: z.string().describe('A description of the scene or subject to be photographed.'),
});
export type SuggestPhotoStyleInput = z.infer<typeof SuggestPhotoStyleInputSchema>;

const SuggestPhotoStyleOutputSchema = z.object({
  suggestions: z.array(SuggestionSchema).describe('A list of 2-3 photographic style suggestions.'),
});
export type SuggestPhotoStyleOutput = z.infer<typeof SuggestPhotoStyleOutputSchema>;

export async function suggestPhotoStyle(input: SuggestPhotoStyleInput): Promise<SuggestPhotoStyleOutput> {
  return suggestPhotoStyleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestPhotoStylePrompt',
  input: {schema: SuggestPhotoStyleInputSchema},
  output: {schema: SuggestPhotoStyleOutputSchema},
  prompt: `You are a photography expert. Based on the description of the scene or subject provided, suggest 2-3 photographic styles or techniques that would be effective. For each suggestion, provide a name for the style, a brief description of why it fits, and 2-3 specific, actionable technical tips (e.g., camera settings, composition advice).

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
