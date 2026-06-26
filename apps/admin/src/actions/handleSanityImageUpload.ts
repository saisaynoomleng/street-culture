'use server';

import { env } from '@/lib/env/server';
import { client } from '@/sanity/lib/client';

const writeClient = client.withConfig({
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function handleSanityImageUpload(formData: FormData) {
  const ALLOWED = [
    'image/pdf',
    'image/jpg',
    'image/jpeg',
    'image/avif',
    'image/webp',
  ];
  try {
    const file = formData.get('file') as File;

    if (!file) throw new Error('No File Provided');

    if (file && file.size > 1 * 1024 * 1024) {
      throw new Error('File size cannot exceeds 1MB');
    }

    if (file && !ALLOWED.includes(file.type)) {
      throw new Error('Only accept image file format');
    }

    const asset = await writeClient.assets.upload('image', file, {
      filename: file.name,
    });

    return asset._id;
  } catch (error) {
    console.error(error);
  }
}
