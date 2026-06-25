'use client';

import { type JSX } from 'react';
import { Bounded } from '@street-culture/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const SIDE_BAR_NAVS = [
  { name: 'Dashboard', url: '/' },
  { name: 'Site Settings', url: '/site-settings' },
  { name: 'Our Stories', url: '/our-stories' },
  { name: 'Stores', url: '/stores' },
  { name: 'Products', url: '/products' },
  { name: 'Lookbooks', url: '/lookbooks' },
  { name: 'Shop The Look', url: '/shop-the-looks' },
  { name: 'Size Chart', url: '/size-charts' },
  { name: 'FAQs', url: '/faqs' },
  { name: 'Hero Banner', url: '/hero-banners' },
  { name: 'Utility Pages', url: '/utility-pages' },
  { name: 'Authors', url: '/authors' },
  { name: 'Blog Categories', url: '/blog-categories' },
  { name: 'Blogs', url: '/blogs' },
];

type AdminSidebarProps = {
  className?: string;
};

export const AdminSidebar = ({ className }: AdminSidebarProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <Bounded
      padding="none"
      className={twMerge(
        clsx(
          'flex flex-col gap-y-2 py-2 border-r border-brand-neutral-500/30 sticky top-0 min-h-screen self-start',
          className,
        ),
      )}
    >
      {SIDE_BAR_NAVS.map((sidebar) => (
        <Link
          href={sidebar.url}
          key={sidebar.url}
          className={clsx(
            'px-4',
            pathname === sidebar.url
              ? 'bg-brand-accent-400 font-semibold'
              : 'bg-brand-neutral-50',
          )}
        >
          {sidebar.name}
        </Link>
      ))}
    </Bounded>
  );
};
