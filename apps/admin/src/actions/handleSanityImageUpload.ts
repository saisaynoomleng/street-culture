'use server';

import { env } from '@/lib/env/server';
import { client } from '@/sanity/lib/client';

const writeClient = client.withConfig({
  token: env.SANITY_WRITE_TOKEN,
});

export const handleSanityImageUpload = async (formData: FormData) => {
  try {
    const file = formData.get('file') as File;

    if (!file) return;

    const assetId = await writeClient.assets.upload('image', file, {
      filename: file.name,
    });

    return assetId._id;
  } catch (error) {
    console.error(error);
  }
};
