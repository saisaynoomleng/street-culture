import {GrCircleQuestion} from 'react-icons/gr'
import {defineField, defineType} from 'sanity'

export const faqs = defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  icon: GrCircleQuestion,
  fields: [
    defineField({
      name: 'name',
      title: 'FAQs Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs Lists',
      type: 'array',
      of: [{type: 'faq'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
