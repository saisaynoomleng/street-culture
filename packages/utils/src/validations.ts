import * as z from 'zod';

/**
 * Validate Contact Us Form Server Action
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
/**
 * Validate Contact Us Form values
 */
export type ContactUsFormValues = z.infer<typeof ContactUsFormSchema>;

/**
 * Validate Newsletter Subscription Form Server Action
 */
export const NewsletterSubscriptionFormSchema = z.object({
  email: z.email('Must be a valid email address'),
});
/**
 * Validate Newsletter Subscription Form UX values
 */
export type NewsletterSubscriptionFormValues = z.infer<
  typeof NewsletterSubscriptionFormSchema
>;

/**
 * Validate Job Applications Form Server Action
 */
export const JobApplicationsFormSchema = z.object({
  firstName: z.string().min(1, 'First name must have at least 1 character'),
  lastName: z.string().min(1, 'Last name must have at least 1 character'),
  email: z.email('Must be a valid email address'),
  phone: z.string().min(1, 'Phone number must have at least 1 character'),
  body: z
    .string()
    .min(1, 'Short intro must have at least 1 character')
    .max(2000, 'Short intro cannot exceeds 2000 chracters'),
  resumeUrl: z.any(),

  address1: z.string().min(1, 'Address 1 must have at least 1 charcter'),
  address2: z.string().nullable(),
  city: z.string().min(1, 'City name must have at least 1 character'),
  state: z.string().min(1, 'State name must have at least 1 character'),
  zip: z.string().min(1, 'Zip/Post Code must have at least 1 character'),
  country: z.string().min(1, 'Country name must have at least 1 character'),

  isAuthorizedToWorkInUS: z.boolean(),

  previousEmployers: z.array(
    z.object({
      name: z
        .string()
        .min(1, 'Previous Employer Name must have at least 1 character'),
      email: z.email('Must be a valid email address'),
      phone: z.string().min(1, 'Phone number must have at least 1 character'),

      reasonForLeaving: z
        .string()
        .min(1, 'Reason For Leaving must have at least 1 character')
        .max(2000, 'Reason for leaving cannot exceeds 2000 characters'),

      previousRole: z
        .string()
        .min(1, 'Previous Role must have at least 1 character'),

      startedDate: z.coerce.date(),
      endedDate: z.coerce.date().nullable(),
    }),
  ),
});
/**
 * Validate Job Applications Form UX inputs
 */
export type JobApplicationsFormValues = z.input<
  typeof JobApplicationsFormSchema
>;

/**
 * Validate Author Detail Form Server Action
 */
export const EditAuthorFormSchema = z.object({
  slug: z.string(),
  _id: z.string(),
  name: z.string(),
  bioEn: z.string(),
  bioKo: z.string(),
  imageUrl: z.string(),
  imageAlt: z.string(),
  socialLink: z.url().nullable(),
});
/**
 * Validate Author Detail Form UX inputs
 */
export type EditAuthorFormValues = z.infer<typeof EditAuthorFormSchema>;

/**
 * Validate Story Schema Form Inputs
 */
export const CreateAdminStorySchema = z.object({
  name: z.string(),
  slug: z.string(),
  titleEn: z.string(),
  titleKo: z.string(),
  bodyEn: z.string(),
  bodyKo: z.string(),
  year: z.coerce.number(),
});
/**
 * Valiate Story schema values Form Inputss
 */
export type CreateAdminStoryValues = z.input<typeof CreateAdminStorySchema>;
