import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type BoundedProps = {
  as?: 'section' | 'main';
  children: React.ReactNode;
  className?: string;
  padding?: Padding;
  isCentered?: boolean;
};

type Padding = 'none' | 'sm' | 'md' | 'lg';

const paddingSize: Record<Padding, string> = {
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
