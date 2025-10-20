'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'
import { useLanguage } from '@/contexts/LanguageContext'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const fetchData = async () => {
      try {
      const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFeatures(data.FeaturesData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            {t('features.badge')}
          </p>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3'>
            {t('features.title')}
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
              <FeaturesSkeleton key={i} />
            ))
            : features.map((items, i) => (
                <div
                  key={i}
                  className='p-8 rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'
                >
                  <div className='relative top-3'>
                    <div 
                      className='rounded-full flex justify-center flex-shrink-0 items-center w-[120px] h-[120px] bg-white p-4 absolute bottom-[10%] left-[50%] translate-x-[-50%]'
                      style={{
                        boxShadow: '0px 25px 100px -14px rgba(34, 60, 80, 0.2)',
                        WebkitBoxShadow: '0px 25px 100px -14px rgba(34, 60, 80, 0.2)',
                        MozBoxShadow: '0px 25px 100px -14px rgba(34, 60, 80, 0.2)',
                      }}
                    >
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        width={100}
                        height={100}
                        className={`w-full ${i === 3 ? 'h-[70px] object-bottom' : 'object-cover'}`}
                      />
                    </div>
                  </div>
                  <p className='text-2xl text-black font-semibold text-center mt-16'>
                    {t(`features.${i + 1}.title`)}
                  </p>
                  <p className='text-base font-normal text-black/50 text-center mt-2 leading-6'>
                    {t(`features.${i + 1}.subtitle`)}
                  </p>
                </div>
              ))}
      </div>
    </div>
    </section >
  )
}

export default Features
