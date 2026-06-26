'use client';

import React, { ComponentPropsWithoutRef, JSX, useState } from 'react';
import { Bounded } from '../Bounded';
import { Textarea } from '../../../components/ui';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type TextareaProps = {
  className?: string;
  maxLength?: number;
  id: string;
  name: string;
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'className'>;

export const TextareaWithCounts = ({
  className,
  name,
  id,
  maxLength = 1000,
  onChange,
  ...props
}: TextareaProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    onChange?.(e);
  };

  return (
    <Bounded
      as="div"
      className={twMerge(clsx('w-full py-0! my-0!', className))}
      isCentered={false}
      padding="none"
      size="full"
    >
      <Textarea
        maxLength={maxLength}
        onChange={handleChange}
        id={id}
        name={name}
        className={clsx(
          count === maxLength &&
            'border-brand-error-500 focus-visible:ring-brand-error-300/50',
        )}
        aria-label="textarea"
        {...props}
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
