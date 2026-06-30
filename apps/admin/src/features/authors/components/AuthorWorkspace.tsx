import { Bounded, Separator } from '@street-culture/ui';
import clsx from 'clsx';
import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import EditAuthor from './EditAuthor';
import AuthorPreview from './AuthorPreview';
import AuthorBlogs from './AuthorBlogs';

type AuthorWorkspaceProps = {
  className?: string;
};

const AuthorWorkspace = ({
  className,
}: AuthorWorkspaceProps): JSX.Element | null => {
  return (
    <Bounded
      padding="sm"
      size="full"
      isCentered={false}
      className={twMerge(
        clsx(
          'shadow-lg shadow-brand-neutral-800/30 dark:shadow-brand-neutral-600/30 space-y-6 overflow-x-hidden',
          className,
        ),
      )}
    >
      <AuthorPreview />
      <Separator />

      <AuthorBlogs />
      <Separator />

      <EditAuthor />
    </Bounded>
  );
};

export default AuthorWorkspace;
