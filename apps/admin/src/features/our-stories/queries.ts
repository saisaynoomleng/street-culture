import { defineQuery } from 'next-sanity';

export const ALL_STORIES_QUERY = defineQuery(`*[_type == 'ourStory'
  && defined(slug.current)]
  |order(year)
{
  _id,
  name,
  "slug": slug.current,
  year,
  "titleEn": coalesce(title.en, ''),
  "titleKo": coalesce(title.ko, ''),
  "bodyEn": coalesce(body.en, ''),
  "bodyKo": coalesce(body.ko, ''),
 }`);

export const STORY_QUERY = defineQuery(`*[_type == 'ourStory'
  && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  year,
  "titleEn": coalesce(title.en, ''),
  "titleKo": coalesce(title.ko, ''),
  "bodyEn": coalesce(body.en, ''),
  "bodyKo": coalesce(body.ko, ''),
 }`);
