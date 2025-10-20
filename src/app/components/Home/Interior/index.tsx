'use client'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/contexts/LanguageContext'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface VideoItem {
  id: number
  instagramUrl: string
  embedUrl: string
  thumbnail: string
  title: string
  description: string
}

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className='absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-300'
  >
    <Icon icon='mdi:chevron-left' className='text-2xl' />
  </button>
)

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className='absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-300'
  >
    <Icon icon='mdi:chevron-right' className='text-2xl' />
  </button>
)

const Interior = () => {
  const { t } = useLanguage()

  // Instagram reels data - replace with your actual Instagram reel URLs
  const videoData: VideoItem[] = [
    {
      id: 1,
      instagramUrl: 'https://www.instagram.com/reel/DGWMhOPMGur/',
      embedUrl: 'https://www.instagram.com/p/DGWMhOPMGur/embed/',
      thumbnail: '/images/interior/thumb1.jpg',
      title: 'Cafe Interior Tour',
      description: 'Beautiful Korean-style cafe atmosphere'
    },
    {
      id: 2,
      instagramUrl: 'https://www.instagram.com/reel/DFK-5ZBIcub/',
      embedUrl: 'https://www.instagram.com/p/DFK-5ZBIcub/embed/',
      thumbnail: '/images/interior/thumb2.jpg',
      title: 'Coffee Making Process',
      description: 'Watch our barista create perfect coffee'
    },
    {
      id: 3,
      instagramUrl: 'https://www.instagram.com/reel/DDMjkpeIq2R/',
      embedUrl: 'https://www.instagram.com/p/DDMjkpeIq2R/embed/',
      thumbnail: '/images/interior/thumb3.jpg',
      title: 'Dessert Preparation',
      description: 'Handcrafted desserts being made'
    },
    {
      id: 4,
      instagramUrl: 'https://www.instagram.com/reel/DBlGVDbOUEe/',
      embedUrl: 'https://www.instagram.com/p/DBlGVDbOUEe/embed/',
      thumbnail: '/images/interior/thumb4.jpg',
      title: 'Customer Experience',
      description: 'Happy customers enjoying our cafe'
    },
    {
      id: 5,
      instagramUrl: 'https://www.instagram.com/reel/C-mdfSlIcPK/',
      embedUrl: 'https://www.instagram.com/p/C-mdfSlIcPK/embed/',
      thumbnail: '/images/interior/thumb5.jpg',
      title: 'Evening Atmosphere',
      description: 'Cozy evening vibes at our cafe'
    }
  ]

  // Slider settings for Instagram reels
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    cssEase: 'ease-in-out',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section id='interior-section' className='py-20 bg-white'>
      <div className='container'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4'>
            {t('interior.badge')}
          </span>
          <h2 className='text-4xl font-bold text-gray-900 mb-6'>
            {t('interior.title')}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('interior.subtitle')}
          </p>
        </div>

        {/* Instagram Reels Slider */}
        <div className='mt-16 relative'>
          <Slider {...settings}>
            {videoData.map((video) => (
              <div key={video.id} className='px-3'>
                <div className='relative bg-black overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  {/* Instagram Embed */}
                  <div className='relative w-full h-[550px]'>
                    <iframe
                      src={video.embedUrl}
                      className='w-full h-full'
                      frameBorder='0'
                      scrolling='no'
                      allowTransparency={true}
                      allow='encrypted-media'
                      title={video.title}
                    />
                  </div>


                  {/* Video Info */}
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                    <h3 className='text-lg font-bold text-white mb-2'>{video.title}</h3>
                    <p className='text-gray-200 text-sm mb-3'>{video.description}</p>
                    <a
                      href={video.instagramUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 bg-primary text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300'
                    >
                      <Icon icon='mdi:instagram' className='text-base' />
                      View on Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Instagram Link */}
        <div className='text-center mt-12'>
          <a
            href='https://instagram.com/cafecocochou'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-full font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Icon icon='mdi:instagram' className='text-2xl' />
            {t('interior.followInstagram')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Interior