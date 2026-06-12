import {GiNewspaper} from 'react-icons/gi'
import {defineField, defineType} from 'sanity'
import {blogMinRead} from '../components/blogMinRead'
import {formatTitle} from '@street-culture/utils'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  icon: GiNewspaper,
  type: 'document',
  fieldsets: [{name: 'reference', title: 'References', options: {collapsible: true, columns: 2}}],
  fields: [
    defineField({
      name: 'name',
      title: 'Blog Title',
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
      description: 'Slug is required to genreate a page on the website',
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      fieldset: 'reference',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'blogCategory'}],
      fieldset: 'reference',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'minRead',
      title: 'Reading Duration',
      type: 'number',
      components: {
        input: blogMinRead,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt Text',
      description: 'Short summary of the blog',
      type: 'localeString',
      validation: (rule) => rule.required().info(`Required to display on the blog card`),
    }),
    defineField({
      name: 'body',
      title: 'Blog Text',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Blog Cover Image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'SEO is need when sharing the blog on the socail media platforms',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is this blog Featured?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'comments',
      title: 'Blog Comments',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'isMemberOnly',
      title: 'Is this blog readable for member only?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Featured',
      name: 'byFeatured',
      by: [{field: 'isFeatured', direction: 'desc'}],
    },
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      author: 'author.name',
      category: 'category.name',
      image: 'image',
    },
    prepare({name, author, category, image}) {
      const nameFormatted = name ? formatTitle(name) : 'Blog title not provided'
      const authorFormatted = author ? formatTitle(author) : 'Author name not provided'
      const categoryFormatted = category ? formatTitle(category) : 'Category name not provided'

      return {
        title: nameFormatted,
        subtitle: `Author: ${authorFormatted} | Category: ${categoryFormatted}`,
        media: image || GiNewspaper,
      }
    },
  },
})
