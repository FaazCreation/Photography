import { z } from 'zod';

export const StyleSuggestionSchema = z.object({
  description: z.string().min(10, { message: 'Please describe your scene in at least 10 characters.' }),
});

export const membershipApplicationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  memberId: z.string().min(4, { message: 'Please enter a valid Member ID.'}),
  department: z.string().min(2, { message: 'Please enter your department.'}),
  interests: z.string().min(10, { message: 'Please tell us about your interests.' }),
});

export const eventProposalSchema = z.object({
  eventName: z.string().min(5, { message: 'Event name must be at least 5 characters.' }),
  proposerName: z.string().min(2, { message: 'Your name must be at least 2 characters.' }),
  proposerEmail: z.string().email({ message: 'Please enter a valid email address.' }),
  proposedDate: z.date().optional(),
  eventDescription: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
});

export const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  eventName: z.string().min(5, { message: "Event name must be at least 5 characters." }),
  eventDate: z.date({
    required_error: "An event date is required.",
  }),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one service.",
  }),
  message: z.string().optional(),
});

export const premiumPaymentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  memberId: z.string().min(4, { message: "Please enter a valid Member ID." }),
  transactionId: z.string().min(5, { message: "Please enter a valid bKash Transaction ID." }),
});

export const eventRegistrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  memberId: z.string().min(4, { message: 'Please enter a valid Member ID.'}),
  eventId: z.string({ required_error: 'Please select an event.' }),
});
