import {author} from './documents/author'
import {blog} from './documents/blog'
import {blogCategory} from './documents/blogCategory'
import {faqs} from './documents/FAQs'
import {hero} from './pages/hero'
import {lookbook} from './documents/lookbook'
import {ourStory} from './documents/ourStory'
import {productContent} from './documents/productContent'
import {siteSetting} from './documents/siteSetting'
import {store} from './documents/store'
import {utilityPage} from './pages/utilityPage'
import {
  blockContent,
  faq,
  imageWithAlt,
  localeString,
  localeText,
  measurement,
  seo,
  socialLink,
  videoEmbeded,
} from './sharedTypes'
import {shopTheLook} from './documents/shopTheLook'
import {sizeChart} from './documents/sizeChart'

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
  siteSetting,
  hero,
  shopTheLook,
  measurement,
  sizeChart,
]
