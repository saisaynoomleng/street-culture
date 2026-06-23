import type { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '../../ui';

export const PageLocationSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="w-full h-full">
      <Skeleton className="w-50 h-5" />
    </Bounded>
  );
};
