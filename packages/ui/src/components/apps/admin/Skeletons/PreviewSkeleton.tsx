import { type JSX } from 'react';
import { Skeleton } from '../../../ui';

export const PreviewSkeleton = (): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-x-5 w-full ">
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full" />
    </div>
  );
};
