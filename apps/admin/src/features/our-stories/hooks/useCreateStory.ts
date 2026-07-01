'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleCreateStory } from '../actions/handleCreateStory';
import { queryKeys } from '@/lib/queryKeys';

export const useCreateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleCreateStory,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.authors.all,
        exact: true,
        type: 'all',
      });
    },
  });
};
