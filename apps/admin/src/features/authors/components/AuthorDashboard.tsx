'use client';

import { Bounded } from '@street-culture/ui';
import clsx from 'clsx';
import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import AuthorWorkspace from './AuthorWorkspace';
import AuthorSidebar from './AuthorSidebar';
import { AuthorProvider } from './AuthorProvider';

type AuthorDashboardProps = {
  className?: string;
};

const AuthorDashboard = ({ className }: AuthorDashboardProps): JSX.Element => {
  return (
    <AuthorProvider>
      <Bounded
        isCentered={false}
        padding="none"
        size="full"
        className={twMerge(
          clsx('grid grid-cols-[300px_1fr] gap-x-3', className),
        )}
      >
        <AuthorSidebar />

        <AuthorWorkspace />
      </Bounded>
    </AuthorProvider>
  );
};

export default AuthorDashboard;
