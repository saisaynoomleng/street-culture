import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type Padding = 'none' | 'sm' | 'md' | 'lg';
type Size = 'content' | 'wide' | 'full';

type BoundedProps<T extends ElementType = 'section'> = {
  as?: T;
  children: ReactNode;

  size?: Size;
  padding?: Padding;

  centered?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const sizeVariants: Record<Size, string> = {
  content: 'max-w-4xl',
  wide: 'max-w-7xl',
  full: 'max-w-none',
};

const paddingVariants: Record<Padding, string> = {
  none: '',
  sm: 'px-4 md:px-6 lg: px-8',
  md: 'px-6 md:px-8 lg:px-10',
  lg: 'px-8 md:px-10 lg:px-12',
};

const Bounded = <T extends ElementType = 'section'>({
  as,
  children,
  className,
  size = 'wide',
  padding = 'sm',
  centered = true,
  ...props
}: BoundedProps<T>) => {
  const Component = as || 'section';

  return (
    <Component
      className={twMerge(
        clsx(
          'w-full space-y-6 md:space-y-8 lg:space-y-10 py-4 md:py-8',
          sizeVariants[size],
          paddingVariants[padding],
          centered && 'mx-auto',
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Bounded;
