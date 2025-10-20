'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setGalleryImages(data.GalleryImagesData)
      } catch (error) {
        console.error('Error fetching gallery:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='min-h-screen bg-gray-50 xl:pt-24 pt-24'>
      {/* Header */}
      <div>
        <div className='container py-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>{t('gallery.title')}</h1>
              <p className='text-gray-600 mt-2'>{t('gallery.subtitle')}</p>
            </div>
            <Link
              href='/'
              className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300'>
              <Icon icon='mdi:arrow-left' className='text-xl' />
              {t('gallery.button.back')}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className='container py-12'>
        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className='bg-gray-200 animate-pulse rounded-2xl h-64'></div>
            ))}
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 4, 1200: 3, 800: 2, 500: 1 }}
            className='flex gap-6'
            columnClassName='masonry-column'>
            {galleryImages.map((item, index) => {
              // Random height for Instagram-style layout
              const heights = [200, 250, 300, 350, 400, 280, 320, 240, 260, 380, 220, 360]
              const randomHeight = heights[index % heights.length]
              
              return (
                <div
                  key={index}
                  className='overflow-hidden rounded-2xl mb-6 relative group cursor-pointer'
                  style={{ height: randomHeight }}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <div className='text-white text-center'>
                      <Icon icon='mdi:magnify-plus' className='text-4xl mx-auto mb-3' />
                      <p className='text-lg font-medium'>{item.name}</p>
                      <p className='text-sm opacity-80'>{item.price} so'm</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Masonry>
        )}
      </div>
    </div>
  )
}

export default GalleryPage
