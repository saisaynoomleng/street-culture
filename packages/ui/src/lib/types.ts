export type Media = {
  imageUrl: string;
  imageAlt: string;
};

export type Color = `#${string}` | `rgb(${number} ${number} ${number})`;

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export type CallToAction = {
  href: string;
  label: string;
};

export type CallToActionProps = {
  className?: string;
} & CallToAction;
