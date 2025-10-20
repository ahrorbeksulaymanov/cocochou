import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Gallery from '@/app/components/Home/Gallery'
import Menu from '@/app/components/Home/Menu'
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'
export const metadata: Metadata = {
  title: 'Cafe Cocochou - Korean Brunch Cafe in Tashkent',
  description: 'Experience the best Korean brunch in Tashkent at Cafe Cocochou. Artisan coffee, fresh bingsu, hearty poke bowls, and cozy Korean vibes.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Expert />
      <Menu />
      <Gallery />
      {/* <Newsletter /> */}
      <ContactForm />
    </main>
  )
}
