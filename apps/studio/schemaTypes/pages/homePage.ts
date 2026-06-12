import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'homePage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Page Name',
      type: 'string',
    }),
    defineField({
      name: 'blockStyles',
      type: 'blockStyles',
    }),
  ],
})
