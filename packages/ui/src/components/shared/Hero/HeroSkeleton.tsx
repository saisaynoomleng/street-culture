import type { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '@/components/ui/skeleton';

export const HeroSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div">
      <Skeleton className="w-full h-screen" />
    </Bounded>
  );
};
