import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType, JSX, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type BoundedProps<T extends ElementType> = {
  as?: T;
  className?: string;
  padding?: Padding;
  isCentered?: boolean;
  children: ReactNode;
  size?: Size;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

type Padding = 'none' | 'sm' | 'md' | 'lg';
type Size = 'content' | 'wide' | 'full';

const paddingVariants: Record<Padding, string> = {
  none: '',
  sm: 'px-4 md:px-6 lg:px-8',
  md: 'px-6 md:px-8 lg:px-10',
  lg: 'px-8 md:px-10 lg:px-12',
};

const sizeVariants: Record<Size, string> = {
  content: 'max-w-4xl',
  wide: 'max-w-7xl',
  full: 'max-w-none',
};

export const Bounded = <T extends ElementType = 'div'>({
  as,
  className,
  padding = 'md',
  isCentered = true,
  size = 'wide',
  children,
  ...props
}: BoundedProps<T>): JSX.Element => {
  const Comp = as ?? 'section';

  return (
    <Comp
      className={twMerge(
        clsx(
          'py-4 md:py-6',
          paddingVariants[padding],
          isCentered && 'mx-auto',
          sizeVariants[size],
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
