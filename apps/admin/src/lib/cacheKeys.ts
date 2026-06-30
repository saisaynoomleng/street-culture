export const cacheKeys = {
  authors: {
    all: 'authors' as const,
    bySlug: (slug: string) => `author-${slug}` as const,
  },

  ourStory: {
    all: 'our-stories' as const,
    byId: (id: string) => `our-stories-${id}` as const,
  },
};
