import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type DocumentStatusProps = {
  isDraft: boolean;
  className?: string;
};

export const DocumentStatus = ({
  isDraft,
  className,
}: DocumentStatusProps): JSX.Element => {
  return (
    <p
      className={twMerge(
        clsx(
          'px-4 font-semibold py-1 rounded-sm',
          isDraft
            ? 'bg-yellow-400/50 text-yellow-900'
            : 'bg-brand-success-500/50 text-brand-success-900',
          className,
        ),
      )}
    >
      {isDraft ? 'Draft' : 'Published'}
    </p>
  );
};
