'use client';

import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getAllAuthors } from '../actions/getAuthors';

export const useAuthors = () => {
  return useQuery({
    queryKey: queryKeys.authors.all,
    queryFn: getAllAuthors,
  });
};
