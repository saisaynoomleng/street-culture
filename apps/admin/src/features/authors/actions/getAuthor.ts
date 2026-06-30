'use server';

import { cacheKeys } from '@/lib/cacheKeys';
import { getDynamicFetchOptions, sanityFetch } from '@/sanity/lib/live';
import { AUTHOR_RESULT } from '@/sanity/types';
import { cacheTag } from 'next/cache';
import { AUTHOR } from '../queries';
import { LivePerspective } from 'next-sanity/live';

export const fetchAuthor = async (
  slug: string,
  perspective: LivePerspective,
  stega: boolean,
): Promise<AUTHOR_RESULT> => {
  'use cache';

  cacheTag(cacheKeys.authors.bySlug(slug));

  const { data } = await sanityFetch({
    query: AUTHOR,
    params: { slug },
    stega,
    perspective,
  });

  return data;
};

/**
 * Get One Author
 * @param slug string
 * @returns AUTHOR_RESULT
 */
export const getAuthor = async (slug: string): Promise<AUTHOR_RESULT> => {
  const { perspective, stega } = await getDynamicFetchOptions();

  return fetchAuthor(slug, perspective, stega);
};
