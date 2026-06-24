import {GiGearHammer} from 'react-icons/gi'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSetting = defineType({
  name: 'siteSetting',
  icon: GiGearHammer,
  title: 'Site Setting',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding'},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    // branding
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'branding',
    }),
    defineField({
      name: 'primaryLogo',
      title: 'Primary Logo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
      group: 'branding',
    }),
    defineField({
      name: 'secondaryLogo',
      title: 'SecondaryLogo',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
      group: 'branding',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
      group: 'branding',
    }),

    // Navigation
    defineField({
      name: 'navigation',
      title: 'Navigation',
      group: 'navigation',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'navLink',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localeString',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL',
              description: 'Full URL to the path',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'isButton',
              title: 'Is Button?',
              description: 'Is think link rendered as text or button?',
              type: 'boolean',
              initialValue: false,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label.en',
            },
            prepare({title}) {
              return {
                title,
              }
            },
          },
        }),
        defineArrayMember({
          name: 'navDropdown',
          title: 'Navigation Dropdown',
          type: 'object',
          description: 'This will be rendered as dropdown menu',
          fields: [
            defineField({
              name: 'label',
              title: 'Dropdown Label',
              type: 'localeString',
            }),
            defineField({
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'dropdownItem',
                  title: 'dropdownItem',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'localeString',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'href',
                      title: 'URL',
                      description: 'Full URL to the path',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'isButton',
                      title: 'Is Button?',
                      description: 'Is think link rendered as text or button?',
                      type: 'boolean',
                      initialValue: false,
                      validation: (rule) => rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'label.en',
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

    // Footer
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      description: 'A text to display beside the logo in the footer',
      type: 'localeString',
      group: 'footer',
    }),

    defineField({
      name: 'footerColumns',
      title: 'Footer Columns',
      group: 'footer',
      type: 'array',
      of: [
        defineField({
          name: 'footerColumn',
          title: 'Footer Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Footer Column Title',
              type: 'localeString',
            }),
            defineField({
              name: 'columnLinks',
              title: 'Column Links',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'columnLink',
                  title: 'Column Link',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Link Label',
                      type: 'localeString',
                    }),
                    defineField({
                      name: 'href',
                      title: 'Full URL to the page',
                      type: 'string',
                    }),
                  ],
                }),
              ],
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
})
