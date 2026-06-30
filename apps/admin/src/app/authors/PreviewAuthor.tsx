import { RenderImage } from '@/components/RenderImage';
import { client } from '@/sanity/lib/client';
import { AUTHOR } from '@/sanity/lib/queries';
import { AUTHOR_RESULT } from '@/sanity/types';
import {
  AuthorDisplay,
  BlogCard,
  BlogCardSkeleton,
  Bounded,
  SectionTitle,
} from '@street-culture/ui';
import clsx from 'clsx';
import Link from 'next/link';
import React, { Suspense, useEffect, useState, type JSX } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type PreviewAuthorProps = {
  className?: string;
  selectedAuthor: string | null;
};

const PreviewAuthor = ({
  className,
  selectedAuthor,
}: PreviewAuthorProps): JSX.Element | null => {
  const [author, setAuthor] = useState<AUTHOR_RESULT | null>(null);

  useEffect(() => {
    if (!selectedAuthor) return;

    const fetchAuthor = async () => {
      const result = await client.fetch(AUTHOR, { slug: selectedAuthor });
      setAuthor(result);
    };

    fetchAuthor();
  }, [selectedAuthor]);

  if (!selectedAuthor) return null;

  return (
    <Bounded
      padding="sm"
      size="full"
      isCentered={false}
      className={twMerge(
        clsx(
          'shadow-lg shadow-brand-neutral-800/30 dark:shadow-brand-neutral-600/30 space-y-6 overflow-x-hidden',
          className,
        ),
      )}
    >
      <div className="space-y-3">
        <SectionTitle size="sm" as="h3" label="Preview Author Contents" />

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
      </div>

      <div className="space-y-3">
        <SectionTitle as="h3" label="Written Blogs" size="sm" />

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
      </div>
    </Bounded>
  );
};

export default PreviewAuthor;
