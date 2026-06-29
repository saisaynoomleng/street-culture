import { getAllAuthors } from '@/lib/dal';

import { Bounded, ListSkeleton } from '@street-culture/ui';
import clsx from 'clsx';
import { Suspense, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import Author from './Author';

type AuthorListProps = {
  className?: string;
};

const AuthorList = async ({
  className,
}: AuthorListProps): Promise<JSX.Element> => {
  const authors = await getAllAuthors();

  return (
    <Bounded
      isCentered={false}
      padding="sm"
      className={twMerge(clsx('border', className))}
    >
      AuthorList
      {authors.map((a) => (
        <Suspense fallback={<ListSkeleton />} key={a.slug}>
          <Author />
        </Suspense>
      ))}
    </Bounded>
  );
};

export default AuthorList;
