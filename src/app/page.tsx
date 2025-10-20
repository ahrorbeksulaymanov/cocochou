'use client'
import React, { useEffect, useState } from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import Cook from '@/app/components/Home/Cook'
import Expert from '@/app/components/Home/Expert'
import Gallery from '@/app/components/Home/Gallery'
import Menu from '@/app/components/Home/Menu'
import Newsletter from '@/app/components/Home/Newsletter'
import ContactForm from './components/Contact/Form'
import Interior from '@/app/components/Home/Interior'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

export default function Home() {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [expertChief, setExpertChief] = useState<ExpertChiefType[]>([])
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
        setExpertChief(data.ExpertChiefData)
        setGalleryImages(data.GalleryImagesData)
        setFullMenu(data.FullMenuData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main>
      <Hero />
      <Features features={features} loading={loading} />
      <Cook />
      <Expert expertChief={expertChief} loading={loading} />
      <Menu />
      <Gallery galleryImages={galleryImages} fullMenu={fullMenu} loading={loading} />
      {/* <Interior /> */}
      {/* <Newsletter /> */}
      <ContactForm />
    </main>
  )
}
