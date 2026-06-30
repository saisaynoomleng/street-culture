import { Bounded } from '#components/shared/Bounded/Bounded';
import { ImageProps, Media } from '#lib/types';
import clsx from 'clsx';
import React, { Dispatch, SetStateAction, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

type AdminAuthorCardProps = {
  className?: string;
  name: string;
  media: Media;
  renderImage: (props: ImageProps) => React.ReactNode;
  selectedAuthor: string | null;
  setSelectedAuthor: Dispatch<SetStateAction<string | null>>;
  id: string;
};

export const AdminAuthorCard = ({
  className,
  name,
  media,
  renderImage,
  selectedAuthor,
  setSelectedAuthor,
  id,
}: AdminAuthorCardProps): JSX.Element => {
  const isSelected = selectedAuthor === id;

  const handleSelectAuthor = () => setSelectedAuthor(isSelected ? null : id);

  return (
    <Bounded
      as="div"
      padding="sm"
      size="full"
      isCentered={false}
      className={twMerge(
        clsx(
          'flex gap-x-3 items-center p-2 border border-brand-neutral-500/30 hover:cursor-pointer',
          isSelected && 'bg-brand-primary-800 text-brand-neutral-50 ',
          className,
        ),
      )}
      onClick={handleSelectAuthor}
    >
      <div className="w-15">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
        })}
      </div>

      <p className="font-semibold">{name}</p>
    </Bounded>
  );
};
