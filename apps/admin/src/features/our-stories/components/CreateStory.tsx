'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AdminStorySchema, AdminStoryValues } from '@street-culture/utils';
import React from 'react';
import { useForm } from 'react-hook-form';

type CreateStoryProps = {
  className?: string;
};

const CreateStory = ({ className }: CreateStoryProps): React.JSX.Element => {
  const {
    register,
    setValue,
    setError,
    formState: { errors },
  } = useForm<AdminStoryValues>({
    resolver: zodResolver(AdminStorySchema),
    defaultValues: {
      _id: '',
      name: '',
      slug: '',
      year: '',
      titleEn: '',
      titleKo: '',
      bodyEn: '',
      bodyKo: '',
    },
  });

  return <form>CreateStory</form>;
};

export default CreateStory;
