import { type JSX } from 'react';
import { Skeleton } from '../../../ui';

export const AdminDashboardSkeleton = (): JSX.Element => {
  return (
    <div className="w-full h-full grid grid-cols-[300px_1fr] gap-x-6">
      <Skeleton className="h-full w-full" />

      <div className="grid grid-rows-4 gap-y-3">
        <div className="grid grid-cols-4 gap-x-6">
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
        </div>

        <div className="grid grid-cols-2 gap-x-6">
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
        </div>

        <div className="grid grid-cols-3 gap-x-6">
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
          <Skeleton className="w-full h-full" />
        </div>

        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};
