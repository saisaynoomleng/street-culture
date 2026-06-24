import { JSX } from 'react';
import { Bounded } from '../../../shared';
import { Skeleton } from '../../../ui';

export const FooterSkeleton = (): JSX.Element => {
  return (
    <Bounded
      as="div"
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-6 bg-brand-neutral-950"
    >
      <div className="space-y-4">
        <Skeleton className="w-20 h-20" />
        <div className="space-y-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
        </div>
      </div>

      {Array.from({ length: 3 }, (_, i) => i).map((_, i) => (
        <div className="space-y-4" key={i}>
          <Skeleton className="w-full h-3" />

          <div className="space-y-1">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
          </div>
        </div>
      ))}

      <div className="col-span-full flex md:justify-between md:items-center flex-col gap-y-2 md:flex-row">
        <Skeleton className="w-1/4 h-3" />
        <Skeleton className="w-1/4 h-3" />
      </div>
    </Bounded>
  );
};
