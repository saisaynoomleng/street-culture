import {formatTitle} from '@street-culture/utils'
import {IoMdResize} from 'react-icons/io'
import {defineField, defineType} from 'sanity'
import {sanitySlugifier} from '../components/sanitySlugifier'
import {GrCircleQuestion} from 'react-icons/gr'

export const sizeChart = defineType({
  name: 'sizeChart',
  title: 'Size Chart',
  icon: IoMdResize,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Size Chart Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-size-chart`,
        slugify: sanitySlugifier,
      },
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'measurementDesc',
      title: 'Measurement Instructions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Measurement Label',
              type: 'localeString',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'body',
              title: 'Measurement Instructions',
              type: 'localeText',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              label: 'label.en',
            },
            prepare({label}) {
              return {
                title: label,
                media: GrCircleQuestion,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Size Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'measurements',
              title: 'Measurements',
              type: 'array',
              of: [{type: 'measurement'}],
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
    },
    prepare({name, image}) {
      const nameFormatted = name ? formatTitle(name) : 'Name not provided'

      return {
        title: nameFormatted,
        media: image || IoMdResize,
      }
    },
  },
})
