import { getDynamicFetchOptions, sanityFetch } from '@/sanity/lib/live';
import { ALL_AUTHORS } from '@/sanity/lib/queries';
import { ALL_AUTHORS_RESULT } from '@/sanity/types';
import { LivePerspective } from 'next-sanity/live';

async function fetchAllAuthors(
  perspective: LivePerspective,
  stega: boolean,
): Promise<ALL_AUTHORS_RESULT> {
  'use cache';
  const { data } = await sanityFetch({
    query: ALL_AUTHORS,
    perspective,
    stega,
  });
  return data;
}

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
  'use server';
  const { perspective, stega } = await getDynamicFetchOptions();
  return fetchAllAuthors(perspective, stega);
};
