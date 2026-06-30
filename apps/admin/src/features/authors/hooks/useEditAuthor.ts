'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleEditAuthor } from '../actions/handleEditAuthor';
import { queryKeys } from '@/lib/queryKeys';

export const useEditAuthor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: handleEditAuthor,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.authors.all,
      });
    },
  });
};
