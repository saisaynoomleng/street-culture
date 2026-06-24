import type { JSX } from 'react';
import { Bounded } from '../../../shared';
import { Skeleton } from '../../../ui';

export const ReviewCardSkeleton = (): JSX.Element => {
  return (
    <Bounded
      as="div"
      className="flex flex-col gap-y-2 justify-center items-center w-100 h-100"
    >
      <Skeleton className="w-[60%] mx-auto h-50" />

      <Skeleton className="w-[80%] h-3" />
      <Skeleton className="w-[50%] mx-auto h-3" />
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
    </Bounded>
  );
};
