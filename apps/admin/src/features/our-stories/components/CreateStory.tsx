'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateAdminStorySchema,
  CreateAdminStoryValues,
  sanitySlugifier,
} from '@street-culture/utils';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateStory } from '../hooks/useCreateStory';
import {
  Button,
  Input,
  SectionTitle,
  TextareaWithCounts,
  toast,
} from '@street-culture/ui';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { FaInfoCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

type CreateStoryProps = {
  className?: string;
};

const CreateStory = ({ className }: CreateStoryProps): React.JSX.Element => {
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<CreateAdminStoryValues>({
    resolver: zodResolver(CreateAdminStorySchema),
    defaultValues: {
      name: '',
      slug: '',
      year: '',
      titleEn: '',
      titleKo: '',
      bodyEn: '',
      bodyKo: '',
    },
  });

  const createStory = useCreateStory();
  const router = useRouter();

  const onSubmit: SubmitHandler<CreateAdminStoryValues> = async (data) => {
    const result = await createStory.mutateAsync(data);

    if (!result.success) {
      setError(result.field as keyof CreateAdminStoryValues, {
        message: result.message,
      });
      return;
    }

    toast.success(result.message);
    router.refresh();
  };

  const generateSlug = () => {
    const name = getValues('name');

    const slugify = sanitySlugifier(name);

    setValue('slug', slugify, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge(
        clsx(
          'flex flex-col gap-y-3 shadow-lg shadow-brand-neutral-800/30 dark:shadow-brand-neutral-700/30 p-4',
          className,
        ),
      )}
    >
      <SectionTitle as="h3" size="sm" label="Create Story" />

      <div className="space-y-1">
        <label htmlFor="name">Name</label>
        <Input type="text" {...register('name')} id="name" />
        {errors.name && (
          <p className="form-error-message">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="slug">Slug</label>
        <p className="text-fs-300 flex gap-x-1 items-center">
          <span>
            <FaInfoCircle className="text-brand-primary-400" />
          </span>
          <span>
            Recommended to use <span className="font-semibold">Generate</span>{' '}
            button
          </span>
        </p>
        <div className="flex gap-x-4 items-center">
          <Input type="text" {...register('slug')} id="slug" />
          <Button type="button" onClick={generateSlug}>
            Generate
          </Button>
        </div>
        {errors.slug && (
          <p className="form-error-message">{errors.slug.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="year">Year</label>
        <Input type="number" {...register('year')} id="year" />
        {errors.year && (
          <p className="form-error-message">{errors.year.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="titleEn">Title in English</label>
        <Input type="text" {...register('titleEn')} id="titleEn" />
        {errors.titleEn && (
          <p className="form-error-message">{errors.titleEn.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="titleKo">Title in Korean</label>
        <Input type="text" {...register('titleKo')} id="titleKo" />
        {errors.titleKo && (
          <p className="form-error-message">{errors.titleKo.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="bodyEn">Description in English</label>
        <TextareaWithCounts
          maxLength={1000}
          {...register('bodyEn')}
          id="bodyEn"
        />
        {errors.bodyEn && (
          <p className="form-error-message">{errors.bodyEn.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label htmlFor="bodyKo">Description in Korean</label>
        <TextareaWithCounts
          maxLength={1000}
          {...register('bodyKo')}
          id="bodyKo"
        />
        {errors.bodyKo && (
          <p className="form-error-message">{errors.bodyKo.message}</p>
        )}
      </div>

      <Button
        variant="success"
        disabled={createStory.isPending}
        className="self-start"
      >
        {createStory.isPending ? 'Publishing...' : 'Publish'}
      </Button>
    </form>
  );
};

export default CreateStory;
