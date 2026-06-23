import { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '../../ui';

export const LookbookCardSkeleton = (): JSX.Element => {
  return (
    <Bounded
      as="div"
      className="w-full h-100 grid md:grid-cols-2 md:gap-x-6 gap-y-4"
    >
      <div className="flex flex-col justify-center items-center gap-y-1">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-1/4 self-start h-5" />
      </div>

      <div>
        <Skeleton className="w-full h-full" />
      </div>
    </Bounded>
  );
};
