import type { GalleryItem } from '@/types'

export function getGalleryItemCategories(item: GalleryItem): string[] {
  return item.categories ?? [item.category]
}

export function galleryItemMatchesCategory(item: GalleryItem, category: string): boolean {
  return getGalleryItemCategories(item).includes(category)
}

/** Лучшие работы «до/после» для полосы на главной: первые элементы с парой фото. */
export function getFeaturedWorks(items: GalleryItem[], count = 3): GalleryItem[] {
  return items.filter((item) => item.beforeImage && item.afterImage).slice(0, count)
}
