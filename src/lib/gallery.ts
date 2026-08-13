import type { GalleryItem } from '@/types'

export function getGalleryItemCategories(item: GalleryItem): string[] {
  return item.categories ?? [item.category]
}

export function galleryItemMatchesCategory(item: GalleryItem, category: string): boolean {
  return getGalleryItemCategories(item).includes(category)
}
