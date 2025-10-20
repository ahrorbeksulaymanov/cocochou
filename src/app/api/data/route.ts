import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'about', href: '/#aboutus' },
  { label: 'menu', href: '/#menu' },
  { label: 'reserve', href: '/#reserve' },
  { label: 'gallery', href: '/gallery' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/feature1.png',
    heading: 'Cozy Korean Aesthetic',
    subheading:
      'Modern interiors with a Korean vibe. Soft lighting, plants, and music that feels just right.',
  },
  {
    imgSrc: '/images/Features/feature2.png',
    heading: 'Signature Brunch Dishes',
    subheading:
      'Korean-inspired brunch meets international favorites—crafted fresh daily with love.',
  },
  {
    imgSrc: '/images/Features/feature3.png',
    heading: 'Artisan Coffee & Desserts',
    subheading:
      'From dalgona coffee to matcha bingsu, every sip and bite is an experience.',
  },
  {
    imgSrc: '/images/Features/feature4.png',
    heading: 'Perfect for Any Occasion',
    subheading:
      'Brunch dates, work sessions, or celebrations—our space welcomes you anytime.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Head Chef',
    name: 'Ji-Woo Kim',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Pastry Chef',
    name: 'Ayesha Karimova',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Head Barista',
    name: 'Aziz Rashidov',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/food1.png',
    name: 'Photo by cocochou.uz',
    price: 45000,
  },
  {
    src: '/images/Gallery/food2.png',
    name: 'Photo by cocochou.uz',
    price: 55000,
  },
  {
    src: '/images/Gallery/food3.jpg',
    name: 'Photo by cocochou.uz',
    price: 65000,
  },
  {
    src: '/images/Gallery/food4.jpg',
    name: 'Photo by cocochou.uz',
    price: 40000,
  },
  {
    src: '/images/Gallery/food5.jpg',
    name: 'Photo by cocochou.uz',
    price: 42000,
  },
  {
    src: '/images/Gallery/food6.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food7.jpg',
    name: 'Photo by cocochou.uz',
    price: 38000,
  },
  {
    src: '/images/Gallery/food8.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food9.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food10.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food11.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food12.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food13.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food14.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  },
  {
    src: '/images/Gallery/food15.jpg',
    name: 'Photo by cocochou.uz',
    price: 22000,
  }
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Cocochou Signature Latte',
    price: '25,000 so\'m',
    description: 'Smooth espresso with steamed milk and a hint of vanilla',
  },
  {
    name: 'Korean Dalgona Coffee',
    price: '28,000 so\'m',
    description: 'Whipped coffee magic served hot or iced',
  },
  {
    name: 'Butter Croissant',
    price: '18,000 so\'m',
    description: 'Flaky layers, golden crust, pure indulgence',
  },
  {
    name: 'Cinnamon Roll',
    price: '22,000 so\'m',
    description: 'Soft, sweet, with cream cheese frosting',
  },
  {
    name: 'Seoul Breakfast Bowl',
    price: '45,000 so\'m',
    description: 'Bibimbap-style with egg, veggies, and gochujang',
  },
  {
    name: 'Cocochou Poke Bowl',
    price: '55,000 so\'m',
    description: 'Fresh salmon, rice, avocado, sesame',
  },
  {
    name: 'Truffle Mushroom Pasta',
    price: '65,000 so\'m',
    description: 'Creamy, earthy, comforting',
  },
  {
    name: 'Club Sandwich',
    price: '42,000 so\'m',
    description: 'Grilled chicken, bacon, fresh greens',
  },
  {
    name: 'Matcha Bingsu',
    price: '40,000 so\'m',
    description: 'Korean shaved ice with matcha, red bean, mochi',
  },
  {
    name: 'Strawberry Cheesecake',
    price: '35,000 so\'m',
    description: 'Creamy, dreamy, topped with fresh berries',
  },
  {
    name: 'Tiramisu',
    price: '38,000 so\'m',
    description: 'Classic Italian layers, espresso-soaked perfection',
  },
  {
    name: 'Yuzu Ade',
    price: '22,000 so\'m',
    description: 'Citrus refreshment with a Korean twist',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'company',
    links: [
      { label: 'home', href: '/' },
      { label: 'about', href: '/#aboutus' },
      { label: 'menu', href: '/#menu' },
      { label: 'reserve', href: '/#reserve' },
      { label: 'gallery', href: '/gallery' },
    ],
  }
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
