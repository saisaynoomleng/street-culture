import { ComponentPropsWithoutRef } from 'react';

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

export type PrevFormStateProps = {
  success: boolean;
  message: string;
  field?: string;
};
