import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Headings = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type SectionTitleProps<T extends Headings = 'h2'> = {
  as?: T;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

const SectionTitle = <T extends Headings = 'h2'>({
  as,
  children,
  className,
}: SectionTitleProps<T>) => {
  const Comp = as || 'h2';

  return (
    <Comp
      className={twMerge(
        clsx(
          'font-heading font-semibold text-fs-500 md:text-fs-600 capitalize',
          className,
        ),
      )}
    >
      {children}
    </Comp>
  );
};

export default SectionTitle;
