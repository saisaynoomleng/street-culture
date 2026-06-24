import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import { JSX } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';

type PageLocationProps<T extends ElementType> = {
  as?: T;
  label: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<'p'>, 'as' | 'className'>;

export const PageLocation = <T extends ElementType = 'p'>({
  as,
  label,
  className,
  ...props
}: PageLocationProps<T>): JSX.Element => {
  const Comp = as || 'p';

  return (
    <Comp className={twMerge(clsx('text-fs-300', className))} {...props}>
      {label}
    </Comp>
  );
};
