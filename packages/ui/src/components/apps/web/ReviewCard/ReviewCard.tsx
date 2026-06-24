import type { JSX } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Bounded } from '../../../shared';
import { ImageProps, Media } from '../../../../lib/types';

type ReviewCardProps = {
  fullName: string;
  role: string;
  text: string;
  media: Media;
  className: string;
  renderImage: (props: ImageProps) => React.ReactNode;
};

export const ReviewCard = ({
  fullName,
  role,
  text,
  media,
  renderImage,
  className,
}: ReviewCardProps): JSX.Element => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx(
          'flex flex-col justify-center items-center gap-y-2 max-w-100 h-100 text-center',
          className,
        ),
      )}
    >
      <div className="overflow-hidden relative aspect-square border-2">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
          className: 'w-full h-full object-cover',
        })}
      </div>

      <p className="font-sembild capitalize">{fullName}</p>
      <p className="text-brand-neutral-500 capitalize">{role}</p>
      <p className="text-fs-300">{text}</p>
    </Bounded>
  );
};
