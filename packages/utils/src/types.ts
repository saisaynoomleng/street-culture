/**
 * Return Types of Server Action,
 * Tvalues comes from zod schema validations
 */
export type ActionResponse<Tvalues> = {
  success: boolean;
  message: string;
  field?: keyof Tvalues;
};
