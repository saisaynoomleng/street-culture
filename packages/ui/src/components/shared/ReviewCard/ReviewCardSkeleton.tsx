import type { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '@/components/ui/skeleton';

export const ReviewCardSkeleton = (): JSX.Element => {
  return (
    <Bounded
      as="div"
      className="flex flex-col gap-y-2 justify-center items-center w-100 h-100"
    >
      <Skeleton className="w-full h-80" />

      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
    </Bounded>
  );
};
