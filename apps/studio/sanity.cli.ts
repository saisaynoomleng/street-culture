import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'g8wycn5o',
    dataset: 'production',
  },
  deployment: {
    appId: 'f3j9a4wcuaxi1c8haz2p82z8',
    autoUpdates: true,
  },
  typegen: {
    path: '../admin/src/**/*.{js,ts,jsx,tsx}',
    schema: '../admin/src/sanity/schema.json',
    generates: '../admin/src/sanity/types.ts',
    overloadClientMethods: true,
  },
})
