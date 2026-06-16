import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ColorBlockProps = {
  color:
    | `#${string}`
    | `rgb(${number} ${number} ${number})`
    | `rgba(${number} ${number} ${number})/${number}`;
  className?: string;
};

const ColorBlock = ({ color, className }: ColorBlockProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={twMerge(clsx('w-5 h-5 rounded-full border', className))}
    />
  );
};

export default ColorBlock;
