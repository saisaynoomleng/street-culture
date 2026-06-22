import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ActionResponse,
  ContactUsFormSchema,
  ContactUsFormValues,
} from '@street-culture/utils';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Input } from '@/components/ui';
import { TextareaWithCounts } from '@/components/shared/TextareaWithCounts';
import { SubmitButton } from '@/components/shared';

type ContactUsFormProps = {
  action: (
    values: ContactUsFormValues,
  ) => Promise<ActionResponse<ContactUsFormValues>>;
  className?: string;
};

export const ContactUsForm = ({
  action,
  className,
}: ContactUsFormProps): JSX.Element => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormValues>({
    resolver: zodResolver(ContactUsFormSchema),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = async (values) => {
    const result = await action(values);

    if (!result.success) {
      setError(result.field as keyof ContactUsFormValues, {
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
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <Input
          {...register('fullName')}
          type="text"
          id="fullname"
          autoComplete="name"
          aria-label="full name"
          placeholder="john doe"
        />
        {errors.fullName && (
          <p className="form-error-message">{errors.fullName.message}</p>
        )}
      </div>

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
          placeholder="johndoe@example.com"
        />
        {errors.email && (
          <p className="form-error-message">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <Input
          type="text"
          {...register('subject')}
          id="subject"
          aria-label="subject"
        />
        {errors.subject && (
          <p className="form-error-message">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <TextareaWithCounts
          id="message"
          maxLength={3000}
          {...register('message')}
          aria-label="message"
        />
        {errors.message && (
          <p className="form-error-message">{errors.message.message}</p>
        )}
      </div>

      <SubmitButton className="self-start">Submit</SubmitButton>
    </form>
  );
};
