'use client';

import { ReactNode } from 'react';
import { SanityApp, type SanityConfig } from '@sanity/sdk-react';
import { env } from '@/lib/env/client';
import { PageLoading } from '@street-culture/ui';

const config: SanityConfig[] = [
  {
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  },
];

const SanityProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <SanityApp config={config} fallback={<PageLoading />}>
      {children}
    </SanityApp>
  );
};

export default SanityProvider;
