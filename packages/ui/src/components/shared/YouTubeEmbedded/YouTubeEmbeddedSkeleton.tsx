import { JSX } from 'react';
import { Bounded } from '../Bounded';
import { Skeleton } from '../../../components/ui';

export const YouTubeEmbeddedSkeleton = (): JSX.Element => {
  return (
    <Bounded as="div" className="w-full h-100 aspect-video">
      <Skeleton className="w-full h-full" />
    </Bounded>
  );
};
