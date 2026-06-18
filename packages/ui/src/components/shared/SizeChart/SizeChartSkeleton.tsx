import { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '@/components/ui/skeleton';

export const SizeChartSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="w-full h-full space-y-6">
      <Skeleton className="w-1/2 h-5 mx-auto" />
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="w-full h-5" />

          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="w-full h-5" />

          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="w-full h-5" />

          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="w-full h-5" />

          <Skeleton className="w-1/2 h-5" />
          <Skeleton className="w-full h-5" />
        </div>

        <Skeleton className="w-full h-80" />
      </div>

      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 36 }, (_, i) => i).map((i) => (
          <Skeleton className="w-full h-5" />
        ))}
      </div>
    </Bounded>
  );
};
