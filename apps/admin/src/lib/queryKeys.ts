export const queryKeys = {
  authors: {
    all: ['authors'] as const,
    bySlug: (slug: string) => ['author', slug] as const,
  },
};
