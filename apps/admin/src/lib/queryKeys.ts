export const queryKeys = {
  authors: {
    all: ['authors'] as const,
    bySlug: (slug: string) => ['author', slug] as const,
  },

  ourStory: {
    all: ['our-story'] as const,
    byId: (id: string) => ['our-story', id] as const,
  },
};
