import { ImageProps, Media } from '../../../lib/types';
import React, { JSX } from 'react';
import { Bounded } from '../Bounded';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { IoPinSharp } from 'react-icons/io5';

type StoreCardProps = {
  name: string;
  media: Media;
  city: string;
  country: string;
  className?: string;
  renderImage: (prop: ImageProps) => React.ReactNode;
};

export const StoreCard = ({
  name,
  media,
  city,
  country,
  className,
  renderImage,
}: StoreCardProps): JSX.Element => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('flex flex-col gap-y-2 max-w-100 h-100', className),
      )}
    >
      <div className="overflow-hidden relative aspect-square border-2">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
          className: 'w-full h-full object-cover',
        })}
      </div>

      <p className="font-semibold">{name}</p>
      <p className="flex gap-x-1 items-center">
        <IoPinSharp className="animate-pulse" />
        <p data-testid="city" className="captialize">
          {city},
        </p>
        <p data-testid="country" className="captialize">
          {country}
        </p>
      </p>
    </Bounded>
  );
};
