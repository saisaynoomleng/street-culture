import { formatDate } from '@street-culture/utils';
import clsx from 'clsx';
import { ComponentPropsWithRef, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

type BlogCardProps<T extends ElementType> = {
  as?: T;
  name: string;
  publishedAt: string | Date;
  excerpt: string;
  media: Media;
  className?: string;
} & Omit<ComponentPropsWithRef<T>, 'as'>;

type Media = {
  imageUrl: string;
  imageAlt: string;
};

const BlogCard = <T extends ElementType = 'div'>({
  as,
  name,
  publishedAt,
  excerpt,
  media,
  className,
}: BlogCardProps<T>) => {
  const Comp = as || 'div';

  return (
    <Comp
      className={twMerge(clsx('flex flex-col gap-y-3 max-w-100', className))}
    >
      <div className="overflow-hidden relative aspect-square">
        <img
          src={media.imageUrl}
          alt={media.imageAlt}
          loading="lazy"
          width={400}
          height={400}
          className="object-cover max-h-100 max-w-100"
        />
      </div>

      <p className="font-semibold">{name}</p>
      <p className="text-fs-300 text-brand-neutral-500">
        {formatDate(publishedAt)}
      </p>
      <p className="text-ellipsis">{excerpt}</p>
    </Comp>
  );
};

export default BlogCard;
