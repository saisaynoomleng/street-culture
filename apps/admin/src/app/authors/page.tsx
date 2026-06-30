import {
  AdminDashboardSkeleton,
  Bounded,
  SidebarSkeleton,
} from '@street-culture/ui';
import { JSX, Suspense } from 'react';

import AuthorDashboard from '../../features/authors/components/AuthorDashboard';
import { getAllAuthors } from '@/features/authors/actions/getAuthors';
import { AuthorQueryProvider } from '@/features/authors/components/AuthorQueryProvider';

const AuthorPage = async (): Promise<JSX.Element> => {
  const authors = await getAllAuthors();

  if (!authors) <AdminDashboardSkeleton />;

  return (
    <AuthorQueryProvider>
      <Bounded isCentered={false} className="space-y-3" size="full">
        <div className="flex flex-col gap-y-3">
          <Suspense fallback={<SidebarSkeleton />}>
            <AuthorDashboard />
          </Suspense>
        </div>
      </Bounded>
    </AuthorQueryProvider>
  );
};

export default AuthorPage;
