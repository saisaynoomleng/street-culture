import {
  AdminDashboardSkeleton,
  Bounded,
  ListSkeleton,
  SectionTitle,
} from '@street-culture/ui';
import { JSX, Suspense } from 'react';
import AuthorList from './AuthorList';
import { getAllAuthors } from '@/lib/dal';

const AuthorPage = async (): Promise<JSX.Element> => {
  const authors = await getAllAuthors();

  if (!authors) <AdminDashboardSkeleton />;

  return (
    <Bounded isCentered={false} className="space-y-3" size="full">
      <SectionTitle as="h3" size="sm" label="Authors" />

      <div className="flex flex-col gap-y-3">
        <Suspense fallback={<ListSkeleton />}>
          <AuthorList authors={authors} />
        </Suspense>
      </div>
    </Bounded>
  );
};

export default AuthorPage;
