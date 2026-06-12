import {formatTitle} from '@street-culture/utils'
import {MdOutlineStoreMallDirectory} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const store = defineType({
  name: 'store',
  title: 'Store',
  icon: MdOutlineStoreMallDirectory,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Store Name',
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
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'zip',
      title: 'ZIP/Postal Code',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
      description: 'Latitude can be copied from Google Map',
      validation: (rule) =>
        rule.required().info(`Latitude is required to generate a map on the website`),
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
      description: 'Longitude can be copied from Google Map',
      validation: (rule) =>
        rule.required().info(`Longitude is required to generate a map on the website`),
    }),
    defineField({
      name: 'body',
      title: 'Shop Description',
      type: 'text',
      description: 'Short Summary of the Shop',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Shop Image',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      city: 'city',
      email: 'email',
      image: 'image',
    },
    prepare({title, city, email, image}) {
      const titleFormatted = title ? formatTitle(title) : 'Title Not provided'
      const cityFormatted = city ? formatTitle(city) : 'City Not provided'

      return {
        title: titleFormatted,
        subtitle: `City: ${cityFormatted} | Email: ${email}`,
        media: image || MdOutlineStoreMallDirectory,
      }
    },
  },
})
