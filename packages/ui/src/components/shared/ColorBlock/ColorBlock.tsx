import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type ColorBlockProps = {
  color:
    | `#${string}`
    | `rgb(${number} ${number} ${number})`
    | `rgba(${number} ${number} ${number})/${number}`;
  className?: string;
} & ComponentPropsWithoutRef<'div'>;

export const ColorBlock = ({ color, className, ...props }: ColorBlockProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={twMerge(clsx('w-5 h-5 rounded-full border', className))}
      {...props}
    />
  );
};
