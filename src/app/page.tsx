import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Gallery from '@/app/components/Home/Gallery'
import Menu from '@/app/components/Home/Menu'
// import Newsletter from '@/app/components/Home/Newsletter'
// import Interior from '@/app/components/Home/Interior'
import ContactForm from './components/Contact/Form'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

// Static data for build time - lightweight version
const getStaticData = async () => {
  // In production, this would fetch from your API
  // For build optimization, we use static data
  return {
    FeaturesData: [
      {
        imgSrc: '/images/Features/feature1.png',
        heading: 'Cozy Korean Aesthetic',
        subheading: 'Modern interiors with a Korean vibe. Soft lighting, plants, and music that feels just right.',
      },
      {
        imgSrc: '/images/Features/feature2.png',
        heading: 'Signature Brunch Dishes',
        subheading: 'Korean-inspired brunch meets international favorites—crafted fresh daily with love.',
      },
      {
        imgSrc: '/images/Features/feature3.png',
        heading: 'Artisan Coffee & Desserts',
        subheading: 'From dalgona coffee to matcha bingsu, every sip and bite is an experience.',
      },
      {
        imgSrc: '/images/Features/feature4.png',
        heading: 'Perfect for Any Occasion',
        subheading: 'Brunch dates, work sessions, or celebrations—our space welcomes you anytime.',
      }
    ] as FeaturesType[],
    ExpertChiefData: [
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
    ] as ExpertChiefType[],
    GalleryImagesData: [
      { src: '/images/Gallery/food1.png', name: 'Photo by cocochou.uz', price: 45000 },
      { src: '/images/Gallery/food2.png', name: 'Photo by cocochou.uz', price: 55000 },
      { src: '/images/Gallery/food3.jpg', name: 'Photo by cocochou.uz', price: 65000 },
      { src: '/images/Gallery/food4.jpg', name: 'Photo by cocochou.uz', price: 40000 },
      { src: '/images/Gallery/food5.jpg', name: 'Photo by cocochou.uz', price: 42000 },
      { src: '/images/Gallery/food6.jpg', name: 'Photo by cocochou.uz', price: 22000 },
    ] as GalleryImagesType[],
    FullMenuData: [
      { name: 'Cocochou Signature Latte', price: '25,000 so\'m', description: 'Smooth espresso with steamed milk and a hint of vanilla' },
      { name: 'Korean Dalgona Coffee', price: '28,000 so\'m', description: 'Whipped coffee magic served hot or iced' },
      { name: 'Butter Croissant', price: '18,000 so\'m', description: 'Flaky layers, golden crust, pure indulgence' },
      { name: 'Cinnamon Roll', price: '22,000 so\'m', description: 'Soft, sweet, with cream cheese frosting' },
    ] as FullMenuType[]
  }
}

// ISR Configuration
export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  // Fetch data at build time for static generation
  const data = await getStaticData()

  return (
    <main>
      <Hero />
      <Features features={data.FeaturesData || []} loading={false} />
      <Cook />
      <Expert expertChief={data.ExpertChiefData || []} loading={false} />
      <Menu />
      <Gallery galleryImages={data.GalleryImagesData || []} fullMenu={data.FullMenuData || []} loading={false} />
      {/* <Interior /> */}
      {/* <Newsletter /> */}
      <ContactForm />
    </main>
  )
}
