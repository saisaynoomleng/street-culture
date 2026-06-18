import React, { JSX, useState } from 'react';
import { Bounded } from '../Bounded';
import { Textarea } from '@/components/ui/textarea';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type TextareaProps = {
  className?: string;
  maxLength?: number;
  name: string;
};

export const TextareaWithCounts = ({
  className,
  name,
  maxLength = 1000,
}: TextareaProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
  };

  return (
    <Bounded
      as="div"
      className={twMerge(clsx('', className))}
      isCentered={false}
    >
      <Textarea
        maxLength={maxLength}
        onChange={handleChange}
        name={name}
        className={clsx(
          count === maxLength &&
            'border-brand-error-500 focus-visible:ring-brand-error-300/50',
        )}
      />

      <div className="flex justify-end gap-x-4 items-center">
        {count === maxLength && (
          <p className="form-error-message">Maximum input length reached</p>
        )}
        <p className={clsx('text-fs-300')}>
          {count} / {maxLength}
        </p>
      </div>
    </Bounded>
  );
};
