import AdminStoryDashboard from '@/features/our-stories/components/AdminStoryDashboard';
import { AdminStoryProvider } from '@/features/our-stories/components/AdminStoryProvider';
import { AdminStoryQueryProvider } from '@/features/our-stories/components/AdminStoryQueryProvider';
import { Bounded } from '@street-culture/ui';
import { JSX } from 'react';

const OurStoriesPage = (): JSX.Element => {
  return (
    <AdminStoryProvider>
      <AdminStoryQueryProvider>
        <Bounded padding="sm" isCentered={false} size="full">
          <AdminStoryDashboard />
        </Bounded>
      </AdminStoryQueryProvider>
    </AdminStoryProvider>
  );
};

export default OurStoriesPage;
