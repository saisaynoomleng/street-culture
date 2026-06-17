import type { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton = (): JSX.Element => {
  return (
    <Bounded
      as="div"
      className="flex flex-col justify-center items-center h-100 w-100 gap-y-2"
    >
      <Skeleton className="w-full h-60" />

      <div className="flex justify-center items-center gap-x-1">
        <Skeleton className="w-5 h-5 rounded-full" />
        <Skeleton className="w-5 h-5 rounded-full" />
        <Skeleton className="w-5 h-5 rounded-full" />
      </div>

      <Skeleton className="w-full h-5" />

      <div className="flex justify-center items-center gap-x-1">
        <Skeleton className="w-20 h-5" />
        <Skeleton className="w-20 h-5" />
      </div>
    </Bounded>
  );
};
