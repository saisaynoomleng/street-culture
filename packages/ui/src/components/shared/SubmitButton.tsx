import { Button } from '../ui';
import { useFormStatus } from 'react-dom';
import { LoadingSpinner } from './LoadingSpinner';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type SubmitButtonProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Button>;

const SubmitButton = ({
  children,
  disabled,
  className,
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      disabled={pending}
      className={twMerge(clsx('', className))}
    >
      {pending ? <span>{<LoadingSpinner />}</span> : <span>{children}</span>}
    </Button>
  );
};

export default SubmitButton;
