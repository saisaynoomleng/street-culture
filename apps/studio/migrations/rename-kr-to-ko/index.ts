// migrations/rename-kr-to-ko/index.ts
import {defineMigration, at, set, unset} from 'sanity/migrate'

export default defineMigration({
  title: 'Rename kr to ko in all locale objects',

  migrate: {
    object(node, path) {
      if (node.kr !== undefined) {
        return [at([...path, 'ko'], set(node.kr)), at([...path, 'kr'], unset())]
      }
    },
  },
})
