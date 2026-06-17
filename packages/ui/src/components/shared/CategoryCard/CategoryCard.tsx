import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ImageProps, Media } from '@/lib/types';
import React from 'react';
import { Bounded } from '../Bounded';

type CategoryCardProps = {
  className?: string;
  media: Media;
  title: string;
  numberInStocks: number;
  renderImage: (prop: ImageProps) => React.ReactNode;
};

const CategoryCard = ({
  className,
  media,
  title,
  numberInStocks,
  renderImage,
}: CategoryCardProps) => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('flex flex-col gap-y-2 max-w-100 h-100 aspect-square', className),
      )}
      aria-label={`${title} category card`}
    >
      <div className="overflow-hidden border-4 relative aspect-square">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
          className: 'w-full h-full object-cover',
        })}
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">{title}</p>
        <p>
          <span className="font-semibold">{numberInStocks}</span> products in
          stocks
        </p>
      </div>
    </Bounded>
  );
};

export default CategoryCard;
