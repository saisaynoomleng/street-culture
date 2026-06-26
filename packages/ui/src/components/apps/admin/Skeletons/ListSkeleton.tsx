import { type JSX } from 'react';
import { Skeleton } from '../../../ui';

export const ListSkeleton = (): JSX.Element => {
  return (
    <div className="w-full flex gap-x-3 items-center p-5">
      <Skeleton className="w-1/4 h-5" />
      <Skeleton className="w-full h-5" />
    </div>
  );
};
