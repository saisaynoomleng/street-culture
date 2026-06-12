import {MdOutlineFormatAlignJustify} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const utilityPage = defineType({
  name: 'utilityPage',
  icon: MdOutlineFormatAlignJustify,
  title: 'Utility Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Page Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      hidden: ({document}) => !document?.name,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Page Content',
      type: 'localeText',
    }),
  ],
})
