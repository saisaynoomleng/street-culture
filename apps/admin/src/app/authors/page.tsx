import { AdminDashboardSkeleton, Bounded } from '@street-culture/ui';
import { Suspense } from 'react';
import AuthorsDashboard from './AuthorDashboard';

const AuthorPage = () => {
  return (
    <Bounded as="main" size="full" isCentered={false} className="space-y-3">
      <Suspense fallback={<AdminDashboardSkeleton />}>
        <AuthorsDashboard />
      </Suspense>
    </Bounded>
  );
};

export default AuthorPage;
