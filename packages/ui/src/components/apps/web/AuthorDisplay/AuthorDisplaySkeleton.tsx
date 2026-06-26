import { type JSX } from 'react';
import { Skeleton } from '../../../ui';

export const AuthorDisplaySkeleton = (): JSX.Element => {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-4 p-6">
      <Skeleton className="w-full h-100" />
      <div className="flex flex-col gap-y-2">
        <Skeleton className="w-1/4 h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
};
