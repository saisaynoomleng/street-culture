import clsx from 'clsx';
import Image from 'next/image';
import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type Media = {
  imageUrl: string;
  imageAlt: string;
  className?: string;
};

export const RenderImage = ({
  imageUrl,
  imageAlt,
  className,
}: Media): JSX.Element => {
  const imgUrl = imageUrl ?? 'https://placehold.co/30';

  return (
    <div
      className={twMerge(
        clsx('overflow-hidden aspect-square relative', className),
      )}
    >
      <Image
        src={imgUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 300px) 66vw"
        className="object-cover"
      />
    </div>
  );
};
