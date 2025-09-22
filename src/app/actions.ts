'use server';

import { suggestPhotoStyle } from '@/ai/flows/photo-style-suggestion';
import { StyleSuggestionSchema } from '@/lib/schemas';
import type { z } from 'zod';

export async function getStyleSuggestionAction(data: z.infer<typeof StyleSuggestionSchema>) {
  const validatedFields = StyleSuggestionSchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid input.' };
  }

  try {
    const result = await suggestPhotoStyle({ description: validatedFields.data.description });
    return { success: true, suggestion: result.styleSuggestion };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
