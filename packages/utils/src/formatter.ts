export const formatTitle = (title: string): string => {
  if (!title) return '';

  return title
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map((w) => {
      if (w !== w.toLocaleLowerCase() && w !== w.toUpperCase()) {
        return w;
      }

      return w.charAt(0).toLowerCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
};

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
