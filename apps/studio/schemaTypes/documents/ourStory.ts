import {formatTitle} from '@street-culture/utils'
import {VscMilestone} from 'react-icons/vsc'
import {defineField, defineType} from 'sanity'

export const ourStory = defineType({
  name: 'ourStory',
  title: 'Our Stories',
  icon: VscMilestone,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Yearly achievement slogan',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      description: 'Summary of Achievement',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      year: 'year',
    },
    prepare({name, year}) {
      const formatName = name ? formatTitle(name) : 'name not provided'

      return {
        title: formatName,
        subtitle: year,
      }
    },
  },
})
