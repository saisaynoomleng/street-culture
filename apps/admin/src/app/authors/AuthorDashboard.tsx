'use client';

import {
  type DocumentEvent,
  type DocumentHandle,
  useDocumentEvent,
  useDocuments,
} from '@sanity/sdk-react';
import {
  Bounded,
  Button,
  EditSkeleton,
  ListSkeleton,
  PreviewSkeleton,
  SectionTitle,
  Separator,
  toast,
} from '@street-culture/ui';
import { Suspense, useState } from 'react';
import Author from './Author';
import EditAuthor from './EditAuthor';
import PreviewAuthor from './PreviewAuthor';
import CreateAuthor from './CreateAuthor';
import { FaPlus } from 'react-icons/fa';

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
      if (e.type === 'published' || e.type == 'deleted') {
        toast.success('published');
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
        className="shadow-lg h-screen sticky top-10 self-start flex flex-col gap-y-2"
      >
        <SectionTitle as="h4" label="Author Lists" size="sm" />
        <Button
          variant="success"
          className="flex items-center self-end"
          onClick={() => setSelectedAuthor(null)}
        >
          <span>Add New Author</span>
          <span>
            <FaPlus />
          </span>
        </Button>

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
