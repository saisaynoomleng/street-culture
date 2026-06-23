import { Skeleton } from '../../../components/ui/skeleton';
import { Bounded } from '../Bounded';

export const StoreCardSkeleton = () => {
  return (
    <Bounded as="div" className="flex flex-col gap-y-2 w-100 h-100">
      <Skeleton className="w-full h-80" />

      <Skeleton className="w-full h-3" />
      <Skeleton className="w-full h-3" />
    </Bounded>
  );
};
