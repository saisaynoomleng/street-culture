'use client';

import {
  type DocumentEvent,
  type DocumentHandle,
  useDocumentEvent,
  useDocuments,
} from '@sanity/sdk-react';
import {
  Bounded,
  EditSkeleton,
  ListSkeleton,
  PreviewSkeleton,
  SectionTitle,
} from '@street-culture/ui';
import { Suspense, useState } from 'react';
import Author from './Author';
import EditAuthor from './EditAuthor';
import PreviewAuthor from './PreviewAuthor';
import CreateAuthor from './CreateAuthor';

const AuthorsDashboard = () => {
  const { data: authors } = useDocuments({
    documentType: 'author',
    orderings: [{ field: 'name', direction: 'desc' }],
  });

  const [selectedAuthor, setSelectedAuthor] = useState<DocumentHandle | null>(
    null,
  );

  useDocumentEvent({
    ...selectedAuthor,
    onEvent: (e: DocumentEvent) => {
      if (e.type === 'published') {
        console.log('published');
      }
    },
  });

  return (
    <Bounded
      isCentered={false}
      padding="none"
      className="grid grid-cols-[300px_1fr] gap-6"
      size="full"
    >
      <Bounded
        isCentered={false}
        padding="sm"
        className="space-y-2 shadow-lg h-screen sticky top-10 self-start"
      >
        <SectionTitle as="h4" label="Author Lists" size="sm" />

        <div className="flex flex-col gap-y-3 ">
          {authors.map((author) => (
            <Suspense key={author.documentId} fallback={<ListSkeleton />}>
              <Author
                documentHandle={author}
                selectedAuthor={selectedAuthor}
                setSelectedAuthor={setSelectedAuthor}
              />
            </Suspense>
          ))}
        </div>
      </Bounded>

      {selectedAuthor && (
        <Bounded
          isCentered={false}
          padding="none"
          className="rounded-sm grid grid-rows-2 gap-6"
          size="full"
        >
          <Suspense fallback={<EditSkeleton />}>
            <EditAuthor
              key={selectedAuthor.documentId}
              documentHandle={selectedAuthor}
            />
          </Suspense>

          <Suspense fallback={<PreviewSkeleton />}>
            <PreviewAuthor
              key={selectedAuthor.documentId}
              documentHandle={selectedAuthor}
            />
          </Suspense>
        </Bounded>
      )}

      {!selectedAuthor && (
        <Bounded isCentered={false} padding="sm" size="full">
          <CreateAuthor />
        </Bounded>
      )}
    </Bounded>
  );
};

export default AuthorsDashboard;
