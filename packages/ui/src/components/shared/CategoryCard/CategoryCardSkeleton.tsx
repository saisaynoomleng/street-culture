import type { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '@/components/ui/skeleton';

export const CategoryCardSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="flex flex-col w-100 h-100 gap-y-1">
      <Skeleton className="w-full h-full" />

      <div className="flex justify-between items-center">
        <Skeleton className="w-30 h-5" />
        <Skeleton className="w-30 h-5" />
      </div>
    </Bounded>
  );
};
