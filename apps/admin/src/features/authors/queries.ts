import { defineQuery } from 'next-sanity';

/**
 * Get All Authors's name, image from sanity
 */
export const ALL_AUTHORS = defineQuery(`*[_type == 'author'
 && defined(slug.current)]{
  _id,
  name,
  "slug": slug.current,
  "imageUrl": coalesce(image.asset->url),
  "imageAlt": coalesce(image.alt)
 }`);

/**
 * Get Specific Author's Details
 */
export const AUTHOR = defineQuery(`*[_type == 'author'
 && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  "bioEn": coalesce(body.en, ''),
  "bioKo": coalesce(body.ko, ''),
  "imageUrl": coalesce(image.asset->url, ''),
  "imageAlt": coalesce(image.alt, ''),
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
