import { defineQuery } from 'next-sanity';

/**
 * Get All Authors's name, image from sanity
 */
export const ALL_AUTHORS = defineQuery(`*[_type == 'author'
 && defined(slug.current)]{
  _id,
  name,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
 }`);

/**
 * Get Specific Author's Details
 */
export const AUTHOR = defineQuery(`*[_type == 'author'
 && slug.current == $slug][0]{
  _id,
  name,
  "bioEn": body.en,
  "bioKo": body.ko,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt,
  socialLink,
  "blogs": *[_type == 'blog'
            && defined(slug.current)
            && references(^._id)]
            | order(publishedAt){
              name,
              "slug": slug.current,
              "imageUrl": image.asset->url,
              "imageAlt": image.alt,
              publishedAt,
              "excerptEn": excerpt.en,
              "excerptKo": excerpt.ko
            }
 }`);
