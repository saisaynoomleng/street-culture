'use client';

import { RenderImage } from '@/components/RenderImage';
import {
  AuthorDisplay,
  AuthorDisplaySkeleton,
  Bounded,
  SectionTitle,
} from '@street-culture/ui';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { useAuthorContext } from './AuthorProvider';
import { useAuthor } from '../hooks/useAuthor';

type AuthorPreviewProps = {
  className?: string;
};

const AuthorPreview = ({
  className,
}: AuthorPreviewProps): React.JSX.Element => {
  const { selectedAuthor } = useAuthorContext();
  const {
    data: author,
    isPending,
    error,
  } = useAuthor(selectedAuthor as string);

  if (isPending) return <AuthorDisplaySkeleton />;
  if (error) return <p className="form-error-message">{error.message}</p>;

  return (
    <Bounded
      as="div"
      padding="none"
      size="full"
      isCentered={false}
      className={twMerge(clsx('space-y-3', className))}
    >
      <SectionTitle as="h3" label="Preview" size="sm" />

      <div className="grid grid-cols-2 gap-x-3">
        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">English</p>

          {author && (
            <AuthorDisplay
              media={{
                imageAlt: author.imageAlt as string,
                imageUrl: author.imageUrl as string,
              }}
              renderImage={(props) => (
                <RenderImage imageAlt={props.alt} imageUrl={props.src} />
              )}
              name={author.name as string}
              bio={author.bioEn as string}
              socialLink={author.socialLink || ''}
              renderAction={(socialLink) => (
                <Link href={socialLink}>
                  <FaInstagram />
                </Link>
              )}
            />
          )}
        </div>

        <div className="flex flex-col gap-y-3">
          <p className="font-semibold">Korean</p>
          {author && (
            <AuthorDisplay
              media={{
                imageAlt: author.imageAlt as string,
                imageUrl: author.imageUrl as string,
              }}
              renderImage={(props) => (
                <RenderImage imageAlt={props.alt} imageUrl={props.src} />
              )}
              name={author.name as string}
              bio={author.bioKo as string}
              socialLink={author.socialLink || ''}
              renderAction={(socialLink) => (
                <Link href={socialLink}>
                  <FaInstagram />
                </Link>
              )}
            />
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default AuthorPreview;
