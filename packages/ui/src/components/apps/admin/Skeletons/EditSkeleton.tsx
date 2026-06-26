import { JSX } from 'react';
import { Skeleton } from '../../../ui';

export const EditSkeleton = (): JSX.Element => {
  return (
    <div className="min-w-full flex flex-col gap-y-5 p-6">
      <Skeleton className="w-1/3 h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
      <Skeleton className="w-full h-10" />
    </div>
  );
};
