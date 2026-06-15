import {PiFlagBanner} from 'react-icons/pi'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: PiFlagBanner,
  fields: [
    defineField({
      name: 'banners',
      title: 'Banners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localeString',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'localeText',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Banner Photo',
              type: 'imageWithAlt',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'position',
              title: 'Text Position',
              type: 'string',
              options: {
                list: [
                  {title: 'left', value: 'left'},
                  {title: 'right', value: 'right'},
                ],
                layout: 'radio',
              },
            }),
          ],
          preview: {
            select: {
              title: 'title.en',
            },
            prepare({title}) {
              return {
                title,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Main Hero',
      }
    },
  },
})
