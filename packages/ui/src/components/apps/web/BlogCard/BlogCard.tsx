import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { formatDate } from '@street-culture/utils';
import { ReactNode } from 'react';
import { Bounded } from '../../../shared/Bounded';
import { ImageProps, Media } from '../../../../lib/types';

type BlogCardProps = {
  className?: string;
  media: Media;
  publishedAt: string | Date;
  title: string;
  excerpt: string;
  renderImage: (props: ImageProps) => ReactNode;
};

export const BlogCard = ({
  className,
  media,
  publishedAt,
  title,
  excerpt,
  renderImage,
}: BlogCardProps) => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('max-w-100 h-120 flex flex-col gap-y-2', className),
      )}
    >
      <div className="overflow-hidden border-4 relative aspect-square">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
          className: 'w-full h-full object-cover',
        })}
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="font-semibold">{title}</p>
        <p className="text-fs-300 font-semibold text-brand-neutral-500">
          {formatDate(publishedAt)}
        </p>
        <p className="text-ellipsis overflow-hidden">{excerpt}</p>
      </div>
    </Bounded>
  );
};
