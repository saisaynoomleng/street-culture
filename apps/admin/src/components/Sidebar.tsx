'use client';

import { type JSX } from 'react';
import { Bounded, ThemeProviderToggle } from '@street-culture/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RenderImage } from './RenderImage';
import { FaRegNewspaper } from 'react-icons/fa';
import { GiGearHammer, GiNewspaper, GiPencil } from 'react-icons/gi';
import { GrCircleQuestion, GrWorkshop } from 'react-icons/gr';
import { IoMdResize } from 'react-icons/io';
import {
  MdCategory,
  MdOutlineFormatAlignJustify,
  MdOutlineStoreMallDirectory,
} from 'react-icons/md';
import { PiFlagBanner } from 'react-icons/pi';
import { SiNike } from 'react-icons/si';
import { VscGraph, VscMilestone } from 'react-icons/vsc';

const SIDE_BAR_NAVS = [
  { name: 'Dashboard', url: '/', component: <VscGraph /> },
  { name: 'Our Stories', url: '/our-stories', component: <VscMilestone /> },
  {
    name: 'Stores',
    url: '/stores',
    component: <MdOutlineStoreMallDirectory />,
  },
  { name: 'Products', url: '/products', component: <SiNike /> },
  { name: 'Lookbooks', url: '/lookbooks', component: <FaRegNewspaper /> },
  { name: 'Shop The Look', url: '/shop-the-looks', component: <GrWorkshop /> },
  { name: 'Size Chart', url: '/size-charts', component: <IoMdResize /> },
  { name: 'FAQs', url: '/faqs', component: <GrCircleQuestion /> },
  { name: 'Hero Banner', url: '/hero-banners', component: <PiFlagBanner /> },
  {
    name: 'Utility Pages',
    url: '/utility-pages',
    component: <MdOutlineFormatAlignJustify />,
  },
  { name: 'Authors', url: '/authors', component: <GiPencil /> },
  {
    name: 'Blog Categories',
    url: '/blog-categories',
    component: <MdCategory />,
  },
  { name: 'Blogs', url: '/blogs', component: <GiNewspaper /> },
  { name: 'Site Settings', url: '/site-settings', component: <GiGearHammer /> },
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
          'flex flex-col py-2 px-4 border-r border-brand-neutral-500/30 sticky top-0 min-h-screen self-start',
          className,
        ),
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="overflow-hidden relative apsect-square">
          <RenderImage
            imageUrl="https://cdn.sanity.io/images/g8wycn5o/production/1a7b9c7f7cb90e2d114b5ff2b33975e9b9439ceb-539x609.png"
            imageAlt="Haru Commerce Logo"
            className="w-20 mx-auto"
          />
          <p className="text-center">
            Street Culture by
            <span className="inline-block text-brand-primary-950 font-medium">
              Haru Commerce
            </span>
          </p>
        </div>
      </div>

      <div className="divider" />

      <ThemeProviderToggle />

      {SIDE_BAR_NAVS.map((sidebar) => (
        <Link
          href={sidebar.url}
          key={sidebar.url}
          className={clsx(
            'px-2 py-2 flex gap-x-5 items-center rounded-sm',
            pathname === sidebar.url
              ? 'bg-brand-primary-100 text-brand-primary-800 font-semibold'
              : 'bg-brand-neutral-50',
          )}
        >
          <span>{sidebar.component}</span>
          <span>{sidebar.name}</span>
        </Link>
      ))}
    </Bounded>
  );
};
