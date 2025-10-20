'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage, Language } from '@/contexts/LanguageContext'
import { Icon } from '@iconify/react/dist/iconify.js'

const languages = [
  { code: 'ru' as Language, name: 'Русский', display: 'Ру', icon: <span className="fi fi-ru inline-block w-6 shrink-0"></span> },
  { code: 'ko' as Language, name: '한국어', display: 'Kr', icon: <span className="fi fi-kr inline-block w-6 shrink-0"></span> },
  { code: 'en' as Language, name: 'English', display: 'En', icon: <span className="fi fi-us inline-block w-6 shrink-0"></span> },
  { code: 'uz' as Language, name: "O'zbekcha", display: 'Uz', icon: <span className="fi fi-uz inline-block w-6 shrink-0"></span> },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find((lang) => lang.code === language)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    console.log('LanguageSwitcher: Changing to', newLanguage)
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
        aria-label='Change language'>
          {
            currentLanguage?.icon
          }
          
        <span className='text-sm font-semibold text-black/50'>{currentLanguage?.display}</span>
        <Icon
          icon={isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
          className='text-xl'
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`cursor-pointer w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200 ${
                language === lang.code ? 'bg-primary/10 text-primary' : ''
              }`}>
              {lang.icon}
              {/* <span className='text-sm font-semibold'>{lang.display}</span> */}
              <span className='text-xs text-gray-500'>{lang.name}</span>
              {language === lang.code && (
                <Icon
                  icon='mdi:check'
                  className='ml-auto text-primary text-xl'
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}