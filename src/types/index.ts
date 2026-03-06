export interface PriceItem {
  title: string
  price: string
}

export interface PriceV2Item {
  title: string
  price: string
  note?: string
}

export interface PriceV2Section {
  title?: string
  subtitle?: string
  badge?: string
  headers?: string[]
  rows?: string[][]
  simpleItems?: PriceV2Item[]
  notes?: string[]
}

export interface PriceV2 {
  sections: PriceV2Section[]
}

export interface ServiceHero {
  image: string
  title: string
}

export interface ServiceInfo {
  text: string
}

export interface ServiceBook {
  text: string
}

export interface ServiceData {
  hero: ServiceHero
  info: ServiceInfo
  book: ServiceBook
  price: PriceItem[]
  priceV2?: PriceV2
}

export interface Review {
  author: string
  text: string
}

export interface Work {
  id: number
  image: string
  title: string
  description: string
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  beforeImage?: string
  afterImage?: string
  singleImage?: string
}

export interface ContentData {
  hero_title: string
  hero_subtitle: string
  hero_p: string
  hero_image: string
  about_text_1: string
  about_text_2: string
  about_text_3: string
  about_text_4: string
  grid_1: string
  grid_2: string
  grid_3: string
  grid_4: string
  grid_5: string
  grid_6: string
  grid_7: string
  grid_8: string
  sing_up_img: string
  sing_up_link: string
  our_team: string
  our_team_img: string
  phone_number_1: string
  phone_number_1_link: string
  phone_number_2: string
  phone_number_2_link: string
  telegram_link: string
  whatsapp_link: string
  vk_link: string
  keratin_and_botox: ServiceData
  safe_hair_straightening: ServiceData
  cold_hair_reconstruction: ServiceData
  bioavailability: ServiceData
  hair_coloring: ServiceData
  hair_cutting: ServiceData
  afro_weaving: ServiceData
  hair_styling: ServiceData
  total_reconstruction: ServiceData
  additional_services: ServiceData
  reviews: Review[]
  works: Work[]
}
