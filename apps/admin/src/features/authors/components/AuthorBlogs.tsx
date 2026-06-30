'use client';

import { RenderImage } from '@/components/RenderImage';
import {
  BlogCard,
  BlogCardSkeleton,
  Bounded,
  SectionTitle,
} from '@street-culture/ui';
import clsx from 'clsx';
import React, { Suspense } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAuthor } from '../hooks/useAuthor';
import { useAuthorContext } from './AuthorProvider';

type AuthorBlogsProps = {
  className?: string;
};

const AuthorBlogs = ({ className }: AuthorBlogsProps): React.JSX.Element => {
  const { selectedAuthor } = useAuthorContext();

  const {
    data: author,
    isPending,
    error,
  } = useAuthor(selectedAuthor as string);

  if (isPending) return <BlogCardSkeleton />;

  if (error) return <p className="form-error-message">{error.message}</p>;

  return (
    <Bounded
      as="div"
      padding="none"
      size="full"
      isCentered={false}
      className={twMerge(clsx('space-y-3', className))}
    >
      <SectionTitle as="h3" label="Blogs" size="sm" />

      <div className="flex gap-x-3 overflow-x-scroll">
        {author?.blogs.map((blog) => (
          <Suspense fallback={<BlogCardSkeleton />} key={blog.slug}>
            <BlogCard
              media={{
                imageAlt: blog.imageAlt || '',
                imageUrl: blog.imageUrl || '',
              }}
              publishedAt={blog.publishedAt || ''}
              title={blog.name || ''}
              excerpt={blog.excerptEn || ''}
              renderImage={(props) => (
                <RenderImage
                  imageAlt={props.alt || ''}
                  imageUrl={props.src || ''}
                  className="w-100 h-100"
                />
              )}
            />
          </Suspense>
        ))}
      </div>
    </Bounded>
  );
};

export default AuthorBlogs;
