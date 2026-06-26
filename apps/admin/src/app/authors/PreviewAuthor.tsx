import { RenderImage } from '@/components/RenderImage';
import { DocumentHandle, useDocumentProjection } from '@sanity/sdk-react';
import { AuthorDisplay, Bounded, SectionTitle } from '@street-culture/ui';
import clsx from 'clsx';
import Link from 'next/link';
import { type JSX } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type PreviewAuthorProps = {
  documentHandle: DocumentHandle;
  className?: string;
};

type AuthorData = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  bioEn: string;
  bioKo: string;
  socialLink: string;
};

const PreviewAuthor = ({
  documentHandle,
  className,
}: PreviewAuthorProps): JSX.Element => {
  const {
    data: { name, imageAlt, imageUrl, bioEn, bioKo, socialLink },
  } = useDocumentProjection<AuthorData>({
    ...documentHandle,
    projection: `{
      name,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "bioEn": body.en,
      "bioKo": body.ko,
      socialLink
    }`,
  });

  return (
    <Bounded
      padding="sm"
      className={twMerge(clsx('shadow-lg space-y-6', className))}
      size="full"
      isCentered={false}
    >
      <SectionTitle as="h4" label="Preview Author Display" size="sm" />

      <div className="grid grid-cols-2 gap-x-6">
        <div>
          <p className="font-semibold">Preview In English</p>
          <AuthorDisplay
            media={{ imageAlt, imageUrl }}
            name={name}
            bio={bioEn}
            socialLink={socialLink}
            renderAction={(socialLink) => (
              <Link href={socialLink}>
                <FaFacebook />
              </Link>
            )}
            renderImage={(props) => (
              <RenderImage imageAlt={props.alt} imageUrl={props.src} />
            )}
          />
        </div>

        <div>
          <p className="font-semibold">Preview In Korean</p>
          <AuthorDisplay
            media={{ imageAlt, imageUrl }}
            name={name}
            bio={bioKo}
            socialLink={socialLink}
            renderAction={(socialLink) => (
              <Link href={socialLink}>
                <FaFacebook />
              </Link>
            )}
            renderImage={(props) => (
              <RenderImage imageAlt={props.alt} imageUrl={props.src} />
            )}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default PreviewAuthor;
