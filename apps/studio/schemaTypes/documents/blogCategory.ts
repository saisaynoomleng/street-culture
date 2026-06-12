import {MdCategory} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Blog Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
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
      description: 'Slug is required to generate a page on the website',
    }),
  ],
})
