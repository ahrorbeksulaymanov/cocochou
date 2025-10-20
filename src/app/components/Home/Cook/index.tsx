'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

const Cook = () => {
  const { t } = useLanguage()
  
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-18%] xl:block hidden'>
          <Image
            src='/images/Cook/coffee.png'
            alt='cafe-food-decor'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Cook/cook.png'
              alt='cafe-interior'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              {t('about.badge')}
            </p>
            <h2 className='lg:text-start text-center'>
              {t('about.title')}
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              {t('about.text1')}
            </p>
            <p className='text-black/50 text-lg font-normal mb-10 text-start'>
              {t('about.text2')}
            </p>
            {/* <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              {t('about.button')}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
