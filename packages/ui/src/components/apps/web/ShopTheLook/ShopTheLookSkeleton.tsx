import type { JSX } from 'react';
import { Bounded } from '../../../shared';
import { Skeleton } from '../../../ui';

export const ShopTheLookSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="flex flex-col md:flex-row md:gap-x-5 gap-y-4">
      <Skeleton className="w-full md:w-[50%] h-100" />

      <div className="flex flex-col justify-center items-center w-full md:w-[50%] gap-y-5">
        <Skeleton className="w-full h-5" />
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
      </div>
    </Bounded>
  );
};
