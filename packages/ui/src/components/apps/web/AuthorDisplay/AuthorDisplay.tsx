import React, { type JSX } from 'react';
import { ImageProps, Media } from '../../../../lib/types';
import { Bounded } from '../../../shared';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type AuthorDisplayProps = {
  media: Media;
  name: string;
  bio: string;
  socialLink: SocialLink;
  renderAction: (socialLink: SocialLink) => React.ReactNode;
  renderImage: (props: ImageProps) => React.ReactNode;
  className?: string;
};

type SocialLink = string;

export const AuthorDisplay = ({
  media,
  name,
  bio,
  socialLink,
  renderAction,
  renderImage,
  className,
}: AuthorDisplayProps): JSX.Element => {
  return (
    <Bounded
      className={twMerge(
        clsx('grid md:grid-cols-2 md:gap-x-6 gap-y-3', className),
      )}
    >
      <div className="overflow-hidden relative aspect-square">
        {renderImage({ src: media.imageUrl, alt: media.imageAlt })}
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="font-semibold">{name}</p>
        <p>{bio}</p>
        {renderAction(socialLink)}
      </div>
    </Bounded>
  );
};
