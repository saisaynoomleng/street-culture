'use server';

import { ActionResponse, AdminStoryValues } from '@street-culture/utils';

export const handleCreateStory = async (
  data: AdminStoryValues,
): Promise<ActionResponse<AdminStoryValues>> => {
  try {
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
