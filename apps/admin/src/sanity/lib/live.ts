import { defineLive, resolvePerspectiveFromCookies } from 'next-sanity/live';
import { client } from '@/sanity/lib/client';
import { env } from '@/lib/env/server';
import { DynamicFetchOptionsProps } from '@/lib/types';
import { cookies, draftMode } from 'next/headers';

const token = env.SANTIY_READ_TOKEN;

if (!token) {
  throw new Error('Missing Sanity Read Token');
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  strict: true,
});

export const getDynamicFetchOptions =
  async (): Promise<DynamicFetchOptionsProps> => {
    const { isEnabled: isDraftMode } = await draftMode();
    if (!isDraftMode) {
      return { perspective: 'published', stega: false };
    }

    const jar = await cookies();
    const perspective = await resolvePerspectiveFromCookies({ cookies: jar });
    return { perspective: perspective ?? 'drafts', stega: true };
  };
