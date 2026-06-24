import clsx from 'clsx';
import { ComponentPropsWithoutRef, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type Headings = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SectionTitle<T extends Headings> = {
  as?: T;
  className?: string;
  label: string;
  size?: Size;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

type Size = 'sm' | 'md' | 'lg';

const sizeVariants: Record<Size, string> = {
  sm: 'text-fs-400 md:text-fs-500 lg:text-fs-600',
  md: 'text-fs-500 md:text-fs-600 lg:text-fs-700',
  lg: 'text-fs-600 md:text-fs-800 lg:text-fs-900',
};

export const SectionTitle = <T extends Headings>({
  as,
  className,
  label,
  size = 'md',
  ...props
}: SectionTitle<T>): JSX.Element => {
  const Comp = as ?? 'h2';

  return (
    <Comp
      className={twMerge(
        clsx('font-semibold font-heading', sizeVariants[size], className),
      )}
      {...props}
      tabIndex={0}
    >
      {label}
    </Comp>
  );
};
