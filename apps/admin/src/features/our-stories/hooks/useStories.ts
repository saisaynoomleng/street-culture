'use client';

import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getAllStories } from '../actions/getAllStories';

export const useStories = () => {
  return useQuery({
    queryKey: queryKeys.ourStory.all,
    queryFn: () => getAllStories(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
