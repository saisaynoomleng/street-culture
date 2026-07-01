'use server';

import { getDynamicFetchOptions, sanityFetch } from '@/sanity/lib/live';
import { LivePerspective } from 'next-sanity/live';
import { ALL_STORIES_QUERY } from '../queries';

const fetchOurStories = async (
  perspective: LivePerspective,
  stega: boolean,
) => {
  'use cache';

  const { data } = await sanityFetch({
    query: ALL_STORIES_QUERY,
    perspective,
    stega,
  });

  return data;
};

export const getAllStories = async () => {
  const { perspective, stega } = await getDynamicFetchOptions();

  return fetchOurStories(perspective, stega);
};
