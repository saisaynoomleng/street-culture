'use client';

import React, { Suspense } from 'react';
import { Bounded, PreviewSkeleton, SidebarSkeleton } from '@street-culture/ui';
import { useStories } from '../hooks/useStories';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const AdminStorySidebar = (): React.JSX.Element => {
  const { data: stories, error, isPending } = useStories();

  if (isPending) return <SidebarSkeleton />;
  if (error) return <p className="form-error-message">{error.message}</p>;

  return (
    <Bounded
      as="div"
      size="full"
      isCentered={false}
      padding="sm"
      className={twMerge(
        clsx(
          'shadow shadow-brand-neutral-800/30 dark:shadow-brand-neutral-700/30',
        ),
      )}
    >
      {stories.map((story) => (
        <Suspense key={story._id} fallback={<PreviewSkeleton />}>
          <div className="flex flex-col gap-y-3 border p-2 border-brand-neutral-800/30 dark:border-brand-neutral-700/30">
            <p className="font-semibold">{story.titleEn}</p>
            <p>
              Year: <span className="font-semibold">{story.year}</span>
            </p>
          </div>
        </Suspense>
      ))}
    </Bounded>
  );
};

export default AdminStorySidebar;
