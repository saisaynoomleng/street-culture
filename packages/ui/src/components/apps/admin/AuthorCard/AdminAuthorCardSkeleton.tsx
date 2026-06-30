import { Skeleton } from '#components/ui/skeleton';
import { type JSX } from 'react';

export const AdminAuthorCardSkeleton = (): JSX.Element => {
  return (
    <div className="flex gap-x-4 items-center w-100 h-20">
      <Skeleton className="w-1/4 h-20" />
      <Skeleton className="w-3/4 h-5" />
    </div>
  );
};
