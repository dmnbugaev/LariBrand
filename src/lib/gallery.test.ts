import { galleryItemMatchesCategory, getGalleryItemCategories } from './gallery'
import type { GalleryItem } from '@/types'

describe('gallery category helpers', () => {
  const combined: GalleryItem = {
    id: 1,
    title: 'Стрижка и реконструкция',
    category: 'Стрижка волос',
    categories: ['Стрижка волос', 'Холодная реконструкция'],
  }

  it('uses all categories of a combined work', () => {
    expect(getGalleryItemCategories(combined)).toEqual(['Стрижка волос', 'Холодная реконструкция'])
    expect(galleryItemMatchesCategory(combined, 'Холодная реконструкция')).toBe(true)
  })

  it('keeps legacy single-category items compatible', () => {
    const legacy: GalleryItem = { id: 2, title: 'Ботокс', category: 'Кератин и ботокс' }
    expect(getGalleryItemCategories(legacy)).toEqual(['Кератин и ботокс'])
    expect(galleryItemMatchesCategory(legacy, 'Окрашивание')).toBe(false)
  })
})
