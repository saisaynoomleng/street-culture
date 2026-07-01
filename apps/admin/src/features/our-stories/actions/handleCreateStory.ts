'use server';

import { env } from '@/lib/env/server';
import { client } from '@/sanity/lib/client';
import {
  ActionResponse,
  CreateAdminStorySchema,
  CreateAdminStoryValues,
} from '@street-culture/utils';
import { revalidatePath } from 'next/cache';

const writeClient = client.withConfig({
  token: env.SANITY_WRITE_TOKEN,
});

export const handleCreateStory = async (
  data: CreateAdminStoryValues,
): Promise<ActionResponse<CreateAdminStoryValues>> => {
  try {
    const result = CreateAdminStorySchema.safeParse(data);

    if (!result.success) {
      return {
        success: false,
        message: result.error.issues[0]?.message as string,
        field: result.error.issues[0]?.path.join(
          '.',
        ) as keyof CreateAdminStoryValues,
      };
    }

    const { name, slug, bodyEn, bodyKo, year, titleEn, titleKo } = result.data;

    await writeClient.create({
      _type: 'ourStory',
      name,
      slug: {
        current: slug,
      },
      body: {
        en: bodyEn,
        ko: bodyKo,
      },
      year,
      title: {
        en: titleEn,
        ko: titleKo,
      },
    });

    revalidatePath('/our-stories');

    return {
      success: true,
      message: 'Story Created Successfully!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Something went wrong! Try again later!',
    };
  }
};
