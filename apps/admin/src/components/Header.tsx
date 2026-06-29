import { Input, ThemeProviderToggle } from '@street-culture/ui';
import clsx from 'clsx';
import { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type AdminHeaderProps = {
  className?: string;
};

const AdminHeader = ({ className }: AdminHeaderProps): JSX.Element => {
  return (
    <header
      className={twMerge(
        clsx(
          'flex justify-between items-center px-6 py-2 border-b border-brand-neutral-500/30',
          className,
        ),
      )}
    >
      <div className="flex gap-x-3">
        <ThemeProviderToggle />
        <div>
          <Input type="text" />
        </div>
      </div>
      <nav></nav>
    </header>
  );
};

export default AdminHeader;
