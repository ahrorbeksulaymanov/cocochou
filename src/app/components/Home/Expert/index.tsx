'use client'
import Slider from 'react-slick'
import React from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'
import { useLanguage } from '@/contexts/LanguageContext'

interface ExpertProps {
  expertChief: ExpertChiefType[]
  loading: boolean
}

const Expert = ({ expertChief, loading }: ExpertProps) => {
  const { t } = useLanguage()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-primary/10'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            {t('team.badge')}
          </p>
          <h2>{t('team.title')}</h2>
        </div>
        <Slider {...settings}>
          {loading || !expertChief
            ? Array.from({ length: 3 }).map((_, i) => (
                <ChiefDetailSkeleton key={i} />
              ))
            : expertChief.map((items, i) => (
                <div key={i}>
                  <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                    <div className='relative'>
                      <Image
                        src={items.imgSrc}
                        alt={items.name}
                        width={362}
                        height={262}
                        className='inline-block m-auto w-auto'
                      />
                      <div className='absolute top-[75%] -right-[10%]'>
                        <Image
                          src={'/images/Expert/Linkedin.svg'}
                          alt='social'
                          width={220}
                          height={120}
                        />
                      </div>
                    </div>
                    <div className='mt-16'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {items.name}
                      </h3>
                      <h4 className='text-lg font-normal text-black/50 opacity-50'>
                        {items.profession}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Expert
