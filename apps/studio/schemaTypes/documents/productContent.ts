import {formatTitle} from '@street-culture/utils'
import {SiNike} from 'react-icons/si'
import {defineField, defineType} from 'sanity'

export const productContent = defineType({
  name: 'productContent',
  icon: SiNike,
  title: 'Product Content',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'displayTitle',
      title: 'Display Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Product Description',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'colorCode',
      title: 'Color Code',
      type: 'color',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'images.0.asset',
    },
    prepare({name, image}) {
      const nameFormatted = name ? formatTitle(name) : 'Product Name not provided'

      return {
        title: nameFormatted,
        media: image || SiNike,
      }
    },
  },
})
