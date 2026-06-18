import { SubmitButton } from '@/components/shared';
import { Input } from '@/components/ui';
import { PrevFormStateProps } from '@/lib/types';
import { initialFormState } from '@/lib/utils';
import clsx from 'clsx';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

type NewsletterSubscriptionFormProps = {
  action: (
    prevState: PrevFormStateProps,
    formData: FormData,
  ) => Promise<PrevFormStateProps>;
  className?: string;
};

export const NewsletterSubscriptionForm = ({
  action,
  className,
}: NewsletterSubscriptionFormProps) => {
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
      className={twMerge(clsx('space-y-2 w-full p-4 md:p-6', className))}
    >
      <div className="space-y-2">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          aria-label="email"
        />
        {!state.success && (
          <p className="form-error-message">{state.message}</p>
        )}
      </div>

      <SubmitButton>Subscribe</SubmitButton>
    </form>
  );
};
