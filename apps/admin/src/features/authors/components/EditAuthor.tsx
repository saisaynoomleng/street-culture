'use client';

import {
  Button,
  EditSkeleton,
  Input,
  SectionTitle,
  TextareaWithCounts,
  toast,
} from '@street-culture/ui';
import {
  EditAuthorFormSchema,
  EditAuthorFormValues,
} from '@street-culture/utils';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, type JSX } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useAuthorContext } from './AuthorProvider';
import { useAuthor } from '../hooks/useAuthor';
import { handleSanityImageUpload } from '@/actions/handleSanityImageUpload';
import { useEditAuthor } from '../hooks/useEditAuthor';
import { zodResolver } from '@hookform/resolvers/zod';

type EditAuthorProps = {
  className?: string;
};

const EditAuthor = ({ className }: EditAuthorProps): JSX.Element => {
  const { selectedAuthor } = useAuthorContext();
  const editAuthor = useEditAuthor();

  const {
    data: author,
    isPending,
    error: queryError,
  } = useAuthor(selectedAuthor as string);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
    reset,
  } = useForm<EditAuthorFormValues>({
    resolver: zodResolver(EditAuthorFormSchema),
    defaultValues: {
      name: '',
      bioEn: '',
      bioKo: '',
      imageAlt: '',
      imageUrl: '',
      socialLink: '',
      slug: '',
      _id: '',
    },
  });

  useEffect(() => {
    if (!author) return;

    reset({
      _id: author._id,
      slug: author.slug ?? '',
      name: author.name ?? '',
      bioEn: author.bioEn ?? '',
      bioKo: author.bioKo ?? '',
      imageUrl: author.imageUrl ?? '',
      imageAlt: author.imageAlt ?? '',
      socialLink: author.socialLink,
    });
  }, [author, reset]);

  if (isPending) return <EditSkeleton />;
  if (queryError)
    return <p className="form-error-message">{queryError.message}</p>;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const ALLOWED_TYPES = [
      'image/webp',
      'image/jpg',
      'image/jpeg',
      'image/avif',
      'image/png',
    ];
    const MAX_SIZE = 1 * 1024 * 1024;

    if (!file) return;

    if (file.size > MAX_SIZE) {
      setError('imageUrl', {
        message: 'Image size cannot exceeds 1 MB',
      });
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('imageUrl', {
        message: 'Only accepts image type',
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

  const onSubmit: SubmitHandler<EditAuthorFormValues> = async (data) => {
    console.log('SUbmitting', data);
    const result = await editAuthor.mutateAsync(data);

    if (!result.success) {
      setError(result.field as keyof EditAuthorFormValues, {
        message: result.message,
      });
      return;
    }

    toast.success(result.message);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(clsx('flex flex-col gap-y-3', className))}
    >
      <SectionTitle as="h3" size="sm" label="Edit Author" />
      <input type="hidden" {...register('slug')} />
      <input type="hidden" {...register('_id')} />

      <div className="space-y-1">
        <label htmlFor="name">Name</label>
        <Input type="text" {...register('name')} id="name" />
        {errors.name && (
          <p className="form-error-message">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="bioEn">Bio in English</label>
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
        <label htmlFor="bioKo">Bio in Korean</label>
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
        <label htmlFor="imageUrl">Upload an Image</label>
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          id="imageUrl"
        />
        {errors.imageUrl && (
          <p className="form-error-message">{errors.imageUrl.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="imageAlt">
          Image Alternative Text{' '}
          <span className="font-semibold">
            Required if an image is uploaded
          </span>
        </label>
        <Input type="text" id="imageAlt" {...register('imageAlt')} />
      </div>

      <div className="space-y-1">
        <label htmlFor="socialLink">Social Media URL</label>
        <Input type="text" {...register('socialLink')} id="socialLink" />
      </div>

      <Button
        type="submit"
        variant="success"
        className="self-start"
        disabled={editAuthor.isPending}
      >
        {editAuthor.isPending ? 'Publishing...' : 'Publish'}
      </Button>
    </form>
  );
};

export default EditAuthor;
