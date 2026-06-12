import {GiPencil} from 'react-icons/gi'
import {defineField, defineType} from 'sanity'
import {formatTitle} from '@street-culture/utils'

export const author = defineType({
  name: 'author',
  title: 'Author',
  icon: GiPencil,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug is required to generate a page on the website',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'body',
      title: 'Author Bio',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      title: 'Socail Links',
      of: [{type: 'socialLink'}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
    },
    prepare({name, image}) {
      const nameFormatted = name ? formatTitle(name) : 'Author Name not provided'

      return {
        title: nameFormatted,
        media: image || GiPencil,
      }
    },
  },
})
