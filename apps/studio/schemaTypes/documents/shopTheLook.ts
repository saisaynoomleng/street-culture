import {formatTitle} from '@street-culture/utils'
import {GrWorkshop} from 'react-icons/gr'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const shopTheLook = defineType({
  name: 'shopTheLook',
  title: 'Shop the look',
  icon: GrWorkshop,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Combinations Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hotspots',
      title: 'Hotspots',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'x',
              title: 'X Percent on Image',
              type: 'number',
            }),
            defineField({
              name: 'y',
              title: 'Y Percent on Image',
              type: 'number',
            }),
            defineField({
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{type: 'productContent'}],
            }),
          ],
          preview: {
            select: {
              x: 'x',
              y: 'y',
              title: 'product.name',
              image: 'product.images.0.asset',
            },
            prepare({x, y, title, image}) {
              const nameFormatted = title ? formatTitle(title) : 'Title not provided'

              return {
                title: nameFormatted,
                subtitle: `x: ${x}, y: ${y}`,
                media: image,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      const titleFormatted = title ? formatTitle(title) : 'Title not provided'

      return {
        title: titleFormatted,
        media: image || GrWorkshop,
      }
    },
  },
})
