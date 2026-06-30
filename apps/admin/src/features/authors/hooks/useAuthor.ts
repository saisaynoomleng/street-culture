'use client';

import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getAuthor } from '../actions/getAuthor';

export const useAuthor = (slug: string) => {
  return useQuery({
    queryKey: queryKeys.authors.bySlug(slug),
    queryFn: () => getAuthor(slug),
    enabled: !!slug,
  });
};
