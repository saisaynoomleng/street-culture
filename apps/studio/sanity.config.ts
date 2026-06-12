import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {blockStyles} from 'sanity-plugin-block-styles'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Street Culture',

  projectId: 'g8wycn5o',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), blockStyles(), media()],

  schema: {
    types: schemaTypes,
  },
})
