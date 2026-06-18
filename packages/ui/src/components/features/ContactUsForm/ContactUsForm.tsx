import { SubmitButton } from '@/components/shared';
import { TextareaWithCounts } from '@/components/shared/TextareaWithCounts';
import { Input } from '@/components/ui';
import { PrevFormStateProps } from '@/lib/types';
import { initialFormState } from '@/lib/utils';
import clsx from 'clsx';
import { JSX, useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

type ContactUsFormProps = {
  action: (
    prevState: PrevFormStateProps,
    formData: FormData,
  ) => Promise<PrevFormStateProps>;
  className?: string;
};

export const ContactUsForm = ({
  action,
  className,
}: ContactUsFormProps): JSX.Element => {
  const [state, actionFunction] = useActionState(action, initialFormState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state.message, state.success]);

  return (
    <form
      action={actionFunction}
      className={twMerge(
        clsx('flex flex-col gap-y-4 md:gap-y-6 p-4 md:p-6', className),
      )}
    >
      <div className="space-y-1">
        <label htmlFor="fullname" className="form-label">
          First Name
        </label>
        <Input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="johndoe"
          autoComplete="name"
          aria-label="fullname"
        />
        {!state.success && state.field === 'fullname' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@example.com"
          autoComplete="email"
          aria-label="email"
        />
        {!state.success && state.field === 'email' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <Input type="text" name="subject" id="subject" aria-label="subject" />
        {!state.success && state.field === 'subject' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <TextareaWithCounts name="message" maxLength={3000} />
        {!state.success && state.field === 'message' && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <SubmitButton className="self-start">submit</SubmitButton>
    </form>
  );
};
