'use client'
import Image from 'next/image'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'
import { useLanguage } from '@/contexts/LanguageContext'

interface FeaturesProps {
  features: FeaturesType[]
  loading: boolean
}

const Features = ({ features, loading }: FeaturesProps) => {
  const { t } = useLanguage()

  return (
    <section id='features' data-aos='fade-up' data-aos-offset='80'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase' data-aos='fade-down' data-aos-delay='0'>
            {t('features.badge')}
          </p>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3' data-aos='zoom-in' data-aos-delay='80'>
            {t('features.title')}
          </h2>
        </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24'>
              {loading || !features
                ? Array.from({ length: 4 }).map((_, i) => (
                  <FeaturesSkeleton key={i} />
                ))
                : features.map((items, i) => (
                <div
                  key={i}
                  className='p-8 rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'
                  data-aos='fade-up'
                  data-aos-delay={`${(i % 4) * 100}`}
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
