import {defineMigration, del} from 'sanity/migrate'

export default defineMigration({
  title: 'Delete all documents',
  documentTypes: ['blog', 'faqs', 'ourStory', 'utilityPage', 'author'],
  migrate: {
    document(doc) {
      return del(doc._id)
    },
  },
})
