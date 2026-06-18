import { Bounded } from '@/components/shared';
import { Skeleton } from '@/components/ui';
import type { JSX } from 'react';

export const ContactUsFormSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="flex flex-col gap-y-4 md:gap-y-6">
      <div className="space-y-2">
        <Skeleton className="w-1/8 h-3" />
        <Skeleton className="w-full h-5" />
      </div>

      <div className="space-y-2">
        <Skeleton className="w-1/8 h-3" />
        <Skeleton className="w-full h-5" />
      </div>

      <div className="space-y-2">
        <Skeleton className="w-1/8 h-3" />
        <Skeleton className="w-full h-5" />
      </div>

      <div className="space-y-2">
        <Skeleton className="w-1/8 h-3" />
        <Skeleton className="w-full h-20" />
      </div>

      <Skeleton className="w-1/8 h-5" />
    </Bounded>
  );
};
