import {FaRegNewspaper} from 'react-icons/fa'
import {GiGearHammer, GiNewspaper, GiPencil} from 'react-icons/gi'
import {GrCircleQuestion} from 'react-icons/gr'
import {MdCategory, MdOutlineFormatAlignJustify, MdOutlineStoreMallDirectory} from 'react-icons/md'
import {SiNike} from 'react-icons/si'
import {VscMilestone} from 'react-icons/vsc'
import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Street Culture')
    .items([
      S.divider().title('Operation'),
      S.documentTypeListItem('siteSetting').title('Site Setting').icon(GiGearHammer),
      S.documentTypeListItem('ourStory').title('Our Stories').icon(VscMilestone),
      S.documentTypeListItem('store').title('Stores').icon(MdOutlineStoreMallDirectory),
      S.documentTypeListItem('productContent').title('Products').icon(SiNike),
      S.documentTypeListItem('lookbook').title('Lookbooks').icon(FaRegNewspaper),
      S.documentTypeListItem('faqs').title('FAQs').icon(GrCircleQuestion),

      S.divider().title('Pages'),
      S.documentTypeListItem('utilityPage')
        .title('Utility Pages')
        .icon(MdOutlineFormatAlignJustify),
      S.documentTypeListItem('homePage').title('Home Page'),

      S.divider().title('Marketing'),
      S.documentTypeListItem('author').title('Authors').icon(GiPencil),
      S.documentTypeListItem('blogCategory').title('Blog Categories').icon(MdCategory),
      S.documentTypeListItem('blog').title('Blogs').icon(GiNewspaper),
    ])
