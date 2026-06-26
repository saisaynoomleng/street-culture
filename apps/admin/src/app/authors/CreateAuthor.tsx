'use client';

import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import {
  createDocument,
  type DocumentHandle,
  publishDocument,
  useApplyDocumentActions,
} from '@sanity/sdk-react';
import {
  Bounded,
  Button,
  Input,
  SectionTitle,
  TextareaWithCounts,
} from '@street-culture/ui';
import { sanitySlugifier } from '@street-culture/utils';
import { useRouter } from 'next/navigation';
import React, { type JSX } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type AuthorData = {
  name: string;
  imageUrl: string;
  imageAlt: string;
  bioEn: string;
  bioKo: string;
  socialLink?: string;
};

const CreateAuthor = (): JSX.Element => {
  const apply = useApplyDocumentActions();
  const router = useRouter();

  const {
    register,
    setValue,
    setError,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<AuthorData>({
    defaultValues: {
      name: '',
      bioEn: '',
      bioKo: '',
      imageUrl: '',
      imageAlt: '',
      socialLink: '',
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const ALLOWED_TYPES = [
      'image/jpg',
      'image/jpeg',
      'image/webp',
      'image/avif',
      'image/png',
    ];

    if (!file) return;

    if (file.size > 1 * 1024 * 1024) {
      setError('imageUrl', {
        message: 'File size exceeds 1MB',
      });
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('imageUrl', {
        message: 'Only accept image format',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const assetId = await handleSanityImageUpload(formData);

    if (!assetId) {
      setError('imageUrl', {
        message: 'Image upload failed',
      });
      return;
    }

    setValue('imageUrl', assetId, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<AuthorData> = async (data) => {
    const authorHandle: DocumentHandle = {
      documentId: crypto.randomUUID(),
      documentType: 'author',
    };

    await apply(
      createDocument(authorHandle, {
        name: data.name,
        slug: {
          _type: 'slug',
          current: sanitySlugifier(data.name),
        },
        image: {
          _type: 'imageWithAlt',
          alt: data.imageAlt,
          asset: {
            _ref: data.imageUrl,
            _type: 'reference',
          },
        },
        body: {
          _type: 'localeText',
          en: data.bioEn,
          ko: data.bioKo,
        },
        socialLink: data.socialLink,
      }),
    );

    await apply(publishDocument(authorHandle));

    reset();
    router.refresh();
  };

  return (
    <Bounded
      isCentered={false}
      padding="sm"
      size="full"
      className="shadow-sm rounded-sm"
    >
      <SectionTitle as="h4" label="Create Author" size="sm" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        <div className="space-y-1">
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <Input type="text" {...register('name')} id="name" />
          {errors.name && (
            <p className="form-error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="bioEn" className="block font-semibold">
            Author&apos;s Bio In English
          </label>
          <TextareaWithCounts
            maxLength={10000}
            id="bioEn"
            {...register('bioEn')}
          />
          {errors.bioEn && (
            <p className="form-error-message">{errors.bioEn.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="bioKo" className="block font-semibold">
            Author&apos;s Bio In Korean
          </label>
          <TextareaWithCounts
            maxLength={10000}
            id="bioKo"
            {...register('bioKo')}
          />
          {errors.bioKo && (
            <p className="form-error-message">{errors.bioKo.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="imageUrl" className="block font-semibold">
            Author&apos; Photo
          </label>
          <Input
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            id="imageUrl"
          />
          {errors.imageUrl && (
            <p className="form-error-message">{errors.imageUrl.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="imageAlt" className="block font-semibold">
            Image Alternative Text{' '}
            <span className="text-brand-error-500 text-fs-300">
              Required when uploading new photo for screen reader
            </span>
          </label>

          <Input type="text" {...register('imageAlt')} id="imageAlt" />
          {errors.imageAlt && (
            <p className="form-error-message">{errors.imageAlt.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="socialLink" className="block font-semibold">
            Author&apos;s Social Media URL
          </label>
          <Input type="text" id="socialLink" {...register('socialLink')} />
          {errors.socialLink && (
            <p className="form-error-message">{errors.socialLink.message}</p>
          )}
        </div>

        <Button
          variant="success"
          disabled={isSubmitting}
          className="self-start"
        >
          Create & Publish
        </Button>
      </form>
    </Bounded>
  );
};

export default CreateAuthor;
