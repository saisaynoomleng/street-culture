'use server';

import { sanityFetch } from '@/sanity/lib/live';
import { ALL_AUTHORS } from '@/sanity/lib/queries';
import { ALL_AUTHORS_RESULT } from '@/sanity/types';

/**
 * Get all authors
 * @returns Array<{
  name: string | null;
  slug: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
}>;
 */
export const getAllAuthors = async (): Promise<ALL_AUTHORS_RESULT> => {
  const { data } = await sanityFetch({
    query: ALL_AUTHORS,
  });

  return data;
};
