import {formatTitle} from '@street-culture/utils'
import {FaRegNewspaper} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const lookbook = defineType({
  name: 'lookbook',
  title: 'Look Book',
  icon: FaRegNewspaper,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Lookbook Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Lookbook Images',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Lookbook Description',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'productContent'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'images.0.asset',
    },
    prepare({name, image}) {
      const nameFormatted = name ? formatTitle(name) : 'Name not provided'

      return {
        title: nameFormatted,
        media: image || FaRegNewspaper,
      }
    },
  },
})
