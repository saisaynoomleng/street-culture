import {
  CallToActionProps,
  CallToAction,
  Media,
  ImageProps,
} from '../../../../lib/types';
import React, { JSX } from 'react';
import { Bounded } from '../../../shared';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type LookbookCardProps = {
  media: Media;
  callToAction: CallToAction;
  renderAction: (props: CallToActionProps) => React.ReactNode;
  renderImage: (props: ImageProps) => React.ReactNode;
  className?: string;
  title: string;
  text: string;
};

export const LookbookCard = ({
  media,
  className,
  callToAction,
  renderAction,
  renderImage,
  title,
  text,
}: LookbookCardProps): JSX.Element => {
  return (
    <Bounded
      as="div"
      className={twMerge(
        clsx('grid md:grid-cols-2 md:gap-x-6 gap-y-4', className),
      )}
    >
      <Bounded
        as="div"
        className="flex flex-col justify-center items-center gap-y-1"
      >
        <p className="font-semibold text-fs-500">{title}</p>
        <p>{text}</p>
        <Bounded as="div" padding="none" className="self-start">
          {renderAction({ href: callToAction.href, label: callToAction.label })}
        </Bounded>
      </Bounded>

      <Bounded as="div" padding="none">
        {renderImage({
          src: media.imageUrl,
          alt: media.imageAlt,
          className: 'object-cover w-full h-full',
        })}
      </Bounded>
    </Bounded>
  );
};
