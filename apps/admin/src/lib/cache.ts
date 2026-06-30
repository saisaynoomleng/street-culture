export const cacheKeys = {
  authors: {
    all: 'authors',
    byId: (id: string) => `author:${id}`,
  },
};
