'use client';

import { type JSX } from 'react';

import { type DocumentHandle, useDocumentProjection } from '@sanity/sdk-react';
import { Bounded } from '@street-culture/ui';
import { RenderImage } from '@/components/RenderImage';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface AuthorData {
  name: string;
  imageUrl: string;
  imageAlt: string;
}

interface AuthorProps {
  documentHandle: DocumentHandle;
  selectedAuthor: DocumentHandle | null;
  setSelectedAuthor: (author: DocumentHandle | null) => void;
  className?: string;
}

const Author = ({
  documentHandle,
  selectedAuthor,
  setSelectedAuthor,
  className,
}: AuthorProps): JSX.Element => {
  const {
    data: { name, imageAlt, imageUrl },
  } = useDocumentProjection<AuthorData>({
    ...documentHandle,

    projection: `{
        name,
        "imageUrl": image.asset->url,
        "imageAlt": image.alt
    }`,
  });

  const isSelected = selectedAuthor?.documentId === documentHandle.documentId;

  return (
    <Bounded
      padding="none"
      isCentered={false}
      className={twMerge(
        clsx(
          'p-2! flex gap-x-2 items-center shadow cursor-pointer hover:bg-brand-accent-300/50',
          isSelected && 'bg-brand-primary-300',
          className,
        ),
      )}
      onClick={() => setSelectedAuthor(isSelected ? null : documentHandle)}
    >
      <RenderImage
        imageAlt={imageAlt}
        imageUrl={imageUrl}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex justify-between">
        <p className="capitalize">{name}</p>
      </div>
    </Bounded>
  );
};

export default Author;
