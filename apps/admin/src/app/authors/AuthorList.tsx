'use client';

import { RenderImage } from '@/components/RenderImage';
import { ALL_AUTHORS_RESULT } from '@/sanity/types';

import {
  AdminAuthorCard,
  AdminAuthorCardSkeleton,
  Bounded,
} from '@street-culture/ui';
import clsx from 'clsx';
import { Suspense, useState, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type AuthorListProps = {
  className?: string;
  authors: ALL_AUTHORS_RESULT;
};

const AuthorList = ({ authors, className }: AuthorListProps): JSX.Element => {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  return (
    <Bounded
      isCentered={false}
      padding="sm"
      className={twMerge(clsx('border', className))}
    >
      <div className="flex flex-col gap-y-3">
        {authors.map((author) => (
          <Suspense fallback={<AdminAuthorCardSkeleton />} key={author._id}>
            <AdminAuthorCard
              name={author.name || ''}
              media={{
                imageAlt: author.imageAlt || '',
                imageUrl: author.imageUrl || '',
              }}
              renderImage={(props) => (
                <RenderImage imageAlt={props.alt || ''} imageUrl={props.src} />
              )}
              selectedAuthor={selectedAuthor}
              setSelectedAuthor={setSelectedAuthor}
              id={author._id}
            />
          </Suspense>
        ))}
      </div>
    </Bounded>
  );
};

export default AuthorList;
