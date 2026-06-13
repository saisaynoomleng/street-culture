import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

{
  none: '';
  sm: 'px-4 md:px-8 lg:px-10';
  md: 'px-8 md:px-10 lg:px-12';
  lg: 'px-10 md:px-12 lg:px-16';
}

type BoundedProps = {
  as: 'section' | 'main';
  children: React.ReactNode;
  className?: string;
  padding: 'none' | 'sm' | 'md' | 'lg';
  isCentered: boolean;
};

const paddingSize: Record<BoundedProps['padding'], string> = {
  none: '',
  sm: 'px-4 md:px-8 lg:px-10',
  md: 'px-8 md:px-10 lg:px-12',
  lg: 'px-10 md:px-12 lg:px-16',
};

export const Bounded = ({
  padding = 'sm',
  as: Comp = 'section',
  className,
  children,
  isCentered = true,
}: BoundedProps) => {
  return (
    <Comp
      className={twMerge(
        clsx(
          'space-y-8 md:space-y-10 lg:space-y-12 py-4 md:py-6',
          isCentered && 'mx-auto max-w-7xl w-full',
          paddingSize[padding],
          className,
        ),
      )}
    >
      {children}
    </Comp>
  );
};
