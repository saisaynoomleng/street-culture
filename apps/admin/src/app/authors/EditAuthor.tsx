'use client';

import {
  deleteDocument,
  publishDocument,
  unpublishDocument,
  useApplyDocumentActions,
  useDocument,
  useEditDocument,
  type DocumentHandle,
} from '@sanity/sdk-react';
import {
  Bounded,
  Button,
  DocumentStatus,
  Input,
  SectionTitle,
  Separator,
  TextareaWithCounts,
} from '@street-culture/ui';
import clsx from 'clsx';
import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import { SubmitHandler, useForm } from 'react-hook-form';
import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { IoMdInformationCircle } from 'react-icons/io';

interface EditAuthorProps {
  documentHandle: DocumentHandle;
  className?: string;
}

interface AuthorData {
  name: string;
  imageUrl: string;
  imageAlt: string;
  bioEn: string;
  bioKo: string;
  socialLink?: string;
}

const EditAuthor = ({
  documentHandle,
  className,
}: EditAuthorProps): JSX.Element => {
  const apply = useApplyDocumentActions();

  const isDraft = useDocument(documentHandle).data?._id.startsWith('drafts.');

  // Atuhor Data
  const { data: name } = useDocument<string>({
    ...documentHandle,
    path: 'name',
  });

  const { data: bioEn } = useDocument<string>({
    ...documentHandle,
    path: 'body.en',
  });

  const { data: bioKo } = useDocument<string>({
    ...documentHandle,
    path: 'body.ko',
  });

  const { data: imageUrl } = useDocument({
    ...documentHandle,
    path: 'image.asset._ref',
  });

  const { data: imageAlt } = useDocument<string>({
    ...documentHandle,
    path: 'image.alt',
  });

  const { data: socialLink } = useDocument<string>({
    ...documentHandle,
    path: 'socialLink',
  });

  //   Author Edits
  const editName = useEditDocument<string>({
    ...documentHandle,
    path: 'name',
  });

  const editImageUrl = useEditDocument<string>({
    ...documentHandle,
    path: 'image.asset._ref',
  });

  const editImageAlt = useEditDocument<string>({
    ...documentHandle,
    path: 'image.alt',
  });

  const editBioEn = useEditDocument<string>({
    ...documentHandle,
    path: 'body.en',
  });

  const editBioKo = useEditDocument<string>({
    ...documentHandle,
    path: 'body.ko',
  });

  const editSocialLink = useEditDocument<string>({
    ...documentHandle,
    path: 'socialLink',
  });

  const {
    register,
    formState: { errors, isSubmitting },
    setValue,
    setError,
    handleSubmit,
  } = useForm<AuthorData>({
    defaultValues: {
      name: name ?? '',
      bioEn: bioEn ?? '',
      bioKo: bioKo ?? '',
      socialLink: socialLink ?? '',
      imageAlt: imageAlt ?? '',
      imageUrl: imageUrl ?? '',
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const ALLOWED_TYPES = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/webp',
      'image/avif',
    ];
    const MAX_SIZE = 1 * 1024 * 1024;

    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('imageUrl', {
        message: 'Only accept image format',
      });
      return;
    }

    if (file.size > MAX_SIZE) {
      setError('imageUrl', {
        message: 'File size cannot exceeds 1 MB',
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const assetId = await handleSanityImageUpload(formData);

    if (!assetId) {
      setError('imageUrl', {
        message: 'Image upload failed!',
      });
      return;
    }

    setValue('imageUrl', assetId, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<AuthorData> = async (data) => {
    editName(data.name ?? name);
    editBioEn(data.bioEn ?? bioEn);
    editBioKo(data.bioKo ?? bioKo);
    editSocialLink(data.socialLink ?? socialLink);
    editImageUrl(data.imageUrl ?? imageUrl);
    editImageAlt(data.imageAlt ?? imageAlt);

    await apply(publishDocument(documentHandle));
  };

  return (
    <Bounded
      padding="sm"
      isCentered={false}
      className={twMerge(clsx('shadow-lg w-full space-y-2', className))}
      size="full"
    >
      <SectionTitle as="h4" label="Edit Authors" size="sm" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        {isDraft !== undefined && (
          <DocumentStatus isDraft={isDraft} className="self-start" />
        )}

        <div className="space-y-1">
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <Input
            type="text"
            {...register('name')}
            id="name"
            defaultValue={name}
          />
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

        <div className="flex gap-x-3 justify-between">
          <Button variant="success" disabled={isSubmitting}>
            Submit & Publish
          </Button>

          <div className="flex gap-x-3">
            <Button
              type="button"
              variant="warning"
              disabled={isSubmitting}
              onClick={() => {
                apply(unpublishDocument(documentHandle));
              }}
            >
              Make Draft
            </Button>
            <Button
              type="button"
              variant="error"
              disabled={isSubmitting}
              onClick={() => {
                apply(deleteDocument(documentHandle));
              }}
            >
              Delete Author
            </Button>
          </div>
        </div>

        <p className="self-end text-fs-300 flex items-center gap-x-1">
          <IoMdInformationCircle className="text-fs-400 " />
          Documents needed to be in published mode in order to delete
        </p>
      </form>
    </Bounded>
  );
};

export default EditAuthor;
