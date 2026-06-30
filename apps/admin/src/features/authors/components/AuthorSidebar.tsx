'use client';

import { RenderImage } from '@/components/RenderImage';
import {
  AdminAuthorCard,
  AdminAuthorCardSkeleton,
  Button,
  SidebarSkeleton,
} from '@street-culture/ui';
import clsx from 'clsx';
import { Suspense } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { JSX } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { useAuthorContext } from './AuthorProvider';
import { useAuthors } from '../hooks/useAuthors';

type AuthorSidebarProps = {
  className?: string;
};

const AuthorSidebar = ({ className }: AuthorSidebarProps): JSX.Element => {
  const { selectedAuthor, setSelectedAuthor } = useAuthorContext();
  const { data: authors, isPending, error } = useAuthors();

  if (isPending) return <SidebarSkeleton />;

  if (error) {
    console.error(error.message);
    return (
      <div>
        <p className="form-error-message">{error.message}</p>
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        clsx(
          'flex flex-col gap-y-3 shadow-lg shadow-brand-neutral-800/30 dark:shadow-brand-neutral-700/30 p-2 sticky top-0 self-start',
          className,
        ),
      )}
    >
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
  );
};

export default AuthorSidebar;
