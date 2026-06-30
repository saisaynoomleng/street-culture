'use client';

import { RenderImage } from '@/components/RenderImage';
import { ALL_AUTHORS_RESULT } from '@/sanity/types';

import {
  AdminAuthorCard,
  AdminAuthorCardSkeleton,
  Bounded,
  Button,
} from '@street-culture/ui';
import clsx from 'clsx';
import { Suspense, useState, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import PreviewAuthor from './PreviewAuthor';
import { FaPlusCircle } from 'react-icons/fa';

type AuthorListProps = {
  className?: string;
  authors: ALL_AUTHORS_RESULT;
};

const AuthorList = ({ authors, className }: AuthorListProps): JSX.Element => {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  return (
    <Bounded
      isCentered={false}
      padding="none"
      size="full"
      className={twMerge(clsx('grid grid-cols-[300px_1fr] gap-3', className))}
    >
      <div className="flex flex-col gap-y-3 shadow-lg shadow-brand-neutral-800/30 dark:shadow-brand-neutral-700/30 p-2 sticky top-0 self-start">
        <Button variant="success" className="self-end">
          <span>New Author</span>
          <span>
            <FaPlusCircle />
          </span>
        </Button>

        {authors.map((author) => (
          <Suspense fallback={<AdminAuthorCardSkeleton />} key={author.slug}>
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
              slug={author.slug as string}
            />
          </Suspense>
        ))}
      </div>

      {selectedAuthor && <PreviewAuthor selectedAuthor={selectedAuthor} />}
    </Bounded>
  );
};

export default AuthorList;
