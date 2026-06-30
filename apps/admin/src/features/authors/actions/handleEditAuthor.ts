'use server';

import { cacheKeys } from '@/lib/cacheKeys';
import { env } from '@/lib/env/server';
import { client } from '@/sanity/lib/client';
import {
  ActionResponse,
  EditAuthorFormSchema,
  EditAuthorFormValues,
} from '@street-culture/utils';
import { revalidateTag } from 'next/cache';

const writeClient = client.withConfig({
  token: env.SANITY_WRITE_TOKEN,
});

export const handleEditAuthor = async (
  data: EditAuthorFormValues,
): Promise<ActionResponse<EditAuthorFormValues>> => {
  try {
    const rawData = EditAuthorFormSchema.safeParse(data);

    if (!rawData.success) {
      return {
        success: false,
        message: rawData.error.issues[0]?.message as string,
        field: rawData.error.issues[0]?.path.join(
          '.',
        ) as keyof EditAuthorFormValues,
      };
    }

    const { name, imageAlt, imageUrl, socialLink, bioEn, bioKo, _id, slug } =
      rawData.data;

    await writeClient
      .patch(_id)
      .set({
        name,
        body: {
          en: bioEn,
          ko: bioKo,
        },
        image: {
          alt: imageAlt,
          asset: {
            _type: 'reference',
            _ref: imageUrl,
          },
        },
        socialLink,
      })
      .commit();

    revalidateTag(cacheKeys.authors.all, 'max');
    revalidateTag(cacheKeys.authors.bySlug(slug), 'max');

    return {
      success: true,
      message: 'Author Detail Edited Successfully!',
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));

    return {
      success: false,
      message: 'Something went wrong!',
    };
  }
};
