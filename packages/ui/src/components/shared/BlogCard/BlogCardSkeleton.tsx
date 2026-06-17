import { JSX } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Bounded } from '../Bounded';

export const BlogCardSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="w-100 h-120 flex flex-col gap-y-2">
      <Skeleton className="aspect-square w-full" />

      <div className="flex flex-col gap-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-10" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
      </div>
    </Bounded>
  );
};
