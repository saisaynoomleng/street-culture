import React, { ComponentPropsWithoutRef, JSX, ReactNode } from 'react';
import {
  CallToAction,
  CallToActionProps,
  ImageProps,
  Media,
} from '../../../../lib/types';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type FooterProps = {
  footerDescription: string;
  footerColumns: FooterColumn[];
  media: Media;
  renderImage: (props: ImageProps) => ReactNode;
  renderActions: (props: CallToActionProps) => React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'footer'>;

type FooterColumn = {
  title: string;
  columnLinks: CallToAction[];
  className?: string;
};

export const Footer = ({
  className,
  media,
  footerColumns,
  footerDescription,
  renderImage,
  renderActions,
  ...props
}: FooterProps): JSX.Element => {
  return (
    <footer
      className={twMerge(
        clsx(
          'grid md:grid-cols-2 lg:grid-cols-4 bg-brand-neutral-900 text-brand-neutral-50 p-8  gap-x-8 md:gap-x-10 gap-y-6 max-w-7xl mx-auto',
          className,
        ),
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-2">
        <div className="relative overflow-hidden w-20 h-20 aspect-square">
          {renderImage({
            src: media.imageUrl,
            alt: media.imageAlt,
          })}
        </div>
        <p className="text-fs-300">{footerDescription}</p>
      </div>

      {footerColumns.map((column, i) => (
        <div key={i} className="space-y-3">
          <p className="font-semibold">{column.title}</p>
          <ul className="flex flex-col gap-y-1">
            {column.columnLinks.map((link, i) => (
              <li key={i}>
                {renderActions({ label: link.label, href: link.href })}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-span-full flex md:justify-between flex-col md:flex-row md:items-center">
        <p>
          Copyright&copy;2022-{new Date().getFullYear()} — Street Culture&reg;
        </p>
        <p>Designed and developed by Sai Say Noom Leng</p>
      </div>
    </footer>
  );
};
