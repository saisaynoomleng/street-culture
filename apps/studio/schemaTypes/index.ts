import {author} from './documents/author'
import {blog} from './documents/blog'
import {blogCategory} from './documents/blogCategory'
import {faqs} from './documents/FAQs'
import {lookbook} from './documents/lookbook'
import {ourStory} from './documents/ourStory'
import {productContent} from './documents/productContent'
import {store} from './documents/store'
import {utilityPage} from './pages/utilityPage'
import {
  blockContent,
  faq,
  imageWithAlt,
  localeString,
  localeText,
  seo,
  socialLink,
  videoEmbeded,
} from './sharedTypes'

export const schemaTypes = [
  imageWithAlt,
  blockContent,
  localeString,
  localeText,
  socialLink,
  faq,
  videoEmbeded,
  seo,
  author,
  blogCategory,
  blog,
  faqs,
  utilityPage,
  ourStory,
  store,
  productContent,
  lookbook,
]
