'use client'
import Image from 'next/image'
import Link from 'next/link'
import Parallax from '@/app/components/Common/Parallax'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <section id='home-section' className='bg-gray-50' data-aos='fade-in'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6' data-aos='fade-right' data-aos-delay='60'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              {t('hero.title')}
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center' data-aos='fade-up' data-aos-delay='120'>
              {t('hero.subtitle')}
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  {t('hero.button.menu')}
                </button>
              </Link>
              <Link href='/#reserve'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  {t('hero.button.reserve')}
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative' data-aos='fade-left' data-aos-delay='90'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute z-10'>
              <Image
                src={'/images/hero/cake.png'}
                alt='cafe-food'
                width={68}
                height={68}
              />
              <p className='text-lg font-normal'>
                {t('hero.badge')}
              </p>
            </div>
            <Parallax speed={0.4}>
              <Image
                src='/images/hero/banner-image.png'
                alt='cafe-banner'
                width={1000}
                height={805}
              />
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
