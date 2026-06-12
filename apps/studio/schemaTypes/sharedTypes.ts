import {defineArrayMember, defineField, defineType} from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Alt text is important for accessibility and SEO',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'imageWithAlt',
    }),
  ],
})

export const socialLink = defineType({
  name: 'socialLink',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Social Media Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'GitHub', value: 'github'},
          {title: 'Twitter X', value: 'twitterx'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'url',
      title: 'Full URL to the socail media platform',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      description: 'Text in English to display on the website',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kr',
      title: 'Korean',
      type: 'string',
      description: 'Text in Korean to display on the website',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'blockContent',
    }),
    defineField({
      name: 'kr',
      title: 'Korean',
      type: 'blockContent',
    }),
  ],
})

export const seo = defineType({
  name: 'seo',
  type: 'object',
  description: "SEO is important while sharing on social media platform and website's performance",
  fields: [
    defineField({
      name: 'metaTitle',
      description: 'SEO Title',
      type: 'localeString',
    }),
    defineField({
      name: 'metaDescription',
      description: 'SEO Description',
      type: 'localeString',
    }),
    defineField({
      name: 'ogImage',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
      description:
        'If set to false, page will not be indexed, RECOMMENDED TO SET TO FALSE FOR ADMIN PAGES',
    }),
  ],
})

export const videoEmbeded = defineType({
  name: 'videoEmbeded',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Full URL to the video',
      type: 'url',
    }),
    defineField({
      name: 'caption',
      title: 'Video Caption',
      description: 'Video caption is important for accessibility',
      type: 'string',
    }),
  ],
})

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'FAQ title',
      type: 'localeString',
    }),
    defineField({
      name: 'body',
      title: 'FAQ text',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({title}) {
      return {
        title: title || 'FAQ title not provided',
      }
    },
  },
})
