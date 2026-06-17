import { useFormStatus } from 'react-dom';
import { JSX, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { CiPaperplane } from 'react-icons/ci';
import { Button } from '@/components/ui';
import { LoadingSpinner } from '../LoadingSpinner';

type SubmitButtonProps = {
  className?: string;
  children: ReactNode;
};

export const SubmitButton = ({
  className,
  children,
}: SubmitButtonProps): JSX.Element => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="submit"
      aria-label="submit"
      disabled={pending}
      className={twMerge(clsx('group', className))}
      type="submit"
    >
      {pending ? (
        <span>{<LoadingSpinner />}</span>
      ) : (
        <span className="flex items-center gap-x-2 uppercase">
          {children}
          <CiPaperplane className="-rotate-45 group-hover:rotate-0 group-hover:translate-x-2 transition-all duration-200 ease-in-out" />
        </span>
      )}
    </Button>
  );
};
