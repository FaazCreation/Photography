import { z } from 'zod';

export const StyleSuggestionSchema = z.object({
  description: z.string().min(10, { message: 'Please describe your scene in at least 10 characters.' }),
});
