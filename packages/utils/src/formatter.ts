/**
 * Capitalize every word in a string
 * @param title string
 * @returns string
 */
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

/**
 * Format date to display better date format on website
 * @param date string | Date
 * @returns string
 */
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Format the currency based on US dollar and Korean Won
 * @param price number
 * @param currency 'usd' | 'krw'
 * @returns string
 */
export const formatCurrency = (
  price: number,
  currency: 'usd' | 'krw',
): string => {
  return new Intl.NumberFormat(undefined, {
    currency,
    style: 'currency',
  }).format(price);
};

/**
 * Calculate the final price if there is a discount percent on the product
 * @param price number
 * @param discount number
 * @returns number
 */
export const calculateDiscountPrice = (
  price: number,
  discount: number,
): number => {
  return price * (1 - discount / 100);
};

/**
 * Generate SKU number depending on the brand, created time & Date, and random number
 * @param brand string
 * @returns string
 */
export const skuGenerator = (brand: string): string => {
  const prefix = brand.slice(0, 3).padEnd(3, 'X');
  const random = crypto.randomUUID().slice(0, 6).toUpperCase();
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');

  return `${prefix}-${date}-${random}`;
};

/**
 * Replace any dash in the text with white space
 * @param text string
 * @returns string
 */
export const replaceDashWithSpace = (text: string): string => {
  return text.trim().replace(/-/g, ' ');
};
