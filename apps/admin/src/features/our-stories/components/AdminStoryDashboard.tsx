'use client';

import { Bounded } from '@street-culture/ui';
import { AdminStoryProvider, useStoryContext } from './AdminStoryProvider';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import AdminStorySidebar from './AdminStorySidebar';
import AdminStoryWorkspace from './AdminStoryWorkspace';
import CreateStory from './CreateStory';

type AdminStoryDashboardProps = {
  className?: string;
};

const AdminStoryDashboard = ({ className }: AdminStoryDashboardProps) => {
  const { selectedStory } = useStoryContext();

  return (
    <AdminStoryProvider>
      <Bounded
        padding="sm"
        isCentered={false}
        size="full"
        className={twMerge(
          clsx('grid grid-cols-[500px_1fr] gap-x-6', className),
        )}
      >
        <AdminStorySidebar />
        {selectedStory && <AdminStoryWorkspace />}
        {selectedStory === null && <CreateStory />}
      </Bounded>
    </AdminStoryProvider>
  );
};

export default AdminStoryDashboard;
