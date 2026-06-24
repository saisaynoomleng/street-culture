import type { JSX } from 'react';
import { Bounded } from '../../../shared/Bounded';
import { Skeleton } from '../../../ui';

export const HeroSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div">
      <Skeleton className="w-full h-screen" />
    </Bounded>
  );
};
