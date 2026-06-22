import {
  ActionResponse,
  NewsletterSubscriptionFormSchema,
  NewsletterSubscriptionFormValues,
} from '@street-culture/utils';
import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Input } from '@/components/ui';
import { SubmitButton } from '@/components/shared';
import { toast } from 'sonner';

type NewsletterSubscriptionFormProps = {
  action: (
    values: NewsletterSubscriptionFormValues,
  ) => Promise<ActionResponse<NewsletterSubscriptionFormValues>>;
  className?: string;
};

export const NewsletterSubscriptionForm = ({
  action,
  className,
}: NewsletterSubscriptionFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<NewsletterSubscriptionFormValues>({
    resolver: zodResolver(NewsletterSubscriptionFormSchema),
  });

  const onSubmit: SubmitHandler<NewsletterSubscriptionFormValues> = async (
    values,
  ) => {
    const result = await action(values);

    if (!result.success && result.field) {
      setError(result.field as keyof NewsletterSubscriptionFormValues, {
        message: result.message,
      });

      toast.error(result.message);
    }

    toast.success(result.message);
  };

  return (
    <form
      className={twMerge(
        clsx('flex flex-col gap-y-4 md:gap-y-6 p-4 md:p-6', className),
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-2">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Input
          type="email"
          {...register('email')}
          id="email"
          autoComplete="email"
          aria-label="email"
        />
        {errors.email && (
          <p className="form-error-message">{errors.email.message}</p>
        )}
      </div>

      <SubmitButton className="self-start">Subscribe</SubmitButton>
    </form>
  );
};
