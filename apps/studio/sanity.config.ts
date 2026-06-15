import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {blockStyles} from 'sanity-plugin-block-styles'
import {media} from 'sanity-plugin-media'
import {structure} from './structure'
import {customColorPicker} from 'sanity-plugin-color-input'

export default defineConfig({
  name: 'default',
  title: 'Street Culture',

  projectId: 'g8wycn5o',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), blockStyles(), media(), customColorPicker()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== 'siteSetting'),
  },
})
