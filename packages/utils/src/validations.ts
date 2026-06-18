import * as z from 'zod';

/**
 * Validate Contact Us form API
 */
export const ContactUsFormSchema = z.object({
  fullName: z.string().min(1, 'Full Name must have at least one character'),
  email: z.email('Must be a valid email address'),
  subject: z.string().min(1, 'Subject must have at least one character'),
  message: z
    .string()
    .min(1, 'Message must have at least one character')
    .max(3000, 'Message cannot exceed maximum of 3000 characters'),
});
