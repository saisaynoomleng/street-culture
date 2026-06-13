import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type SectionTitleProps = {
  as?: 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  label: string;
};

export const SectionTitle = ({
  as: Comp = 'h2',
  className,
  label,
}: SectionTitleProps) => {
  return <Comp className={twMerge(clsx('', className))}>{label}</Comp>;
};
