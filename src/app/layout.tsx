import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import { LanguageProvider } from '@/contexts/LanguageContext'
import AOSProvider from '@/app/providers/AOSProvider'
import type { Metadata } from 'next'
import "flag-icons/css/flag-icons.min.css";

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Cafe Cocochou - Premium Coffee & Dessert Cafe in Tashkent | Korean Cafe Uzbekistan',
    template: '%s | Cafe Cocochou'
  },
  description: 'Cafe Cocochou brings authentic Korean cafe culture to Tashkent. Experience premium artisan coffee, handcrafted cakes, Korean desserts, bingsu, and cozy cafe atmosphere. Best coffee shop in Tashkent with Korean-inspired menu. Open daily 9 AM - 10 PM.',
  keywords: [
    'cafe tashkent',
    'korean cafe tashkent',
    'coffee shop tashkent',
    'artisan coffee tashkent',
    'handcrafted cakes tashkent',
    'premium desserts tashkent',
    'korean desserts uzbekistan',
    'bingsu tashkent',
    'korean food tashkent',
    'cafe cocochou',
    'best cafe tashkent',
    'coffee tashkent',
    'dessert cafe tashkent',
    'korean cafe uzbekistan',
    'specialty coffee tashkent',
    'instagram cafe tashkent',
    'cozy cafe tashkent',
    'korean brunch tashkent',
    'matcha tashkent',
    'korean bakery tashkent'
  ],
  authors: [{ name: 'Cafe Cocochou' }],
  creator: 'Cafe Cocochou',
  publisher: 'Cafe Cocochou',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cafecocochou.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'uz-UZ': '/uz',
      'ru-RU': '/ru',
      'ko-KR': '/ko',
    },
  },
  icons: {
    icon: [
      { url: '/images/Logo/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Logo/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/Logo/logo.png',
    apple: [
      { url: '/images/Logo/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/Logo/logo.png',
        color: '#FED000',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cafecocochou.uz',
    siteName: 'Cafe Cocochou',
    title: 'Cafe Cocochou - Premium Coffee & Dessert Cafe in Tashkent',
    description: 'Experience authentic Korean cafe culture in Tashkent. Premium artisan coffee, handcrafted cakes, Korean desserts, and cozy atmosphere. Best coffee shop in Tashkent.',
    images: [
      {
        url: '/images/Logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Cafe Cocochou - Korean Cafe in Tashkent',
        type: 'image/png',
      },
      {
        url: '/images/hero/banner-image.png',
        width: 1200,
        height: 800,
        alt: 'Cafe Cocochou Interior - Korean Cafe Atmosphere',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cafe Cocochou - Premium Coffee & Dessert Cafe in Tashkent',
    description: 'Experience authentic Korean cafe culture in Tashkent. Premium artisan coffee, handcrafted cakes, Korean desserts, and cozy atmosphere.',
    images: ['/images/Logo/logo.png'],
    creator: '@cafecocochou',
    site: '@cafecocochou',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Food & Beverage',
  classification: 'Restaurant & Cafe',
  other: {
    'geo.region': 'UZ-TK',
    'geo.placename': 'Tashkent',
    'geo.position': '41.2995;69.2401',
    'ICBM': '41.2995, 69.2401',
    'DC.title': 'Cafe Cocochou - Korean Cafe in Tashkent',
    'DC.description': 'Premium coffee and dessert cafe with Korean culture in Tashkent',
    'DC.subject': 'Coffee, Desserts, Korean Cafe, Tashkent',
    'DC.language': 'en',
    'DC.coverage': 'Tashkent, Uzbekistan',
    'DC.creator': 'Cafe Cocochou',
    'DC.publisher': 'Cafe Cocochou',
    'DC.date.created': '2025-01-01',
    'DC.date.modified': new Date().toISOString().split('T')[0],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Cafe Cocochou",
    "description": "Premium coffee and dessert cafe with Korean culture in Tashkent",
    "url": "https://cafecocochou.uz",
    "logo": "https://cafecocochou.uz/images/Logo/logo.png",
    "image": [
      "https://cafecocochou.uz/images/Logo/logo.png",
      "https://cafecocochou.uz/images/hero/banner-image.png"
    ],
    "telephone": "+998 90 123 45 67",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mirabad 39",
      "addressLocality": "Tashkent",
      "addressCountry": "UZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.2995",
      "longitude": "69.2401"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": ["Korean", "International"],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "UZS",
    "hasMenu": "https://cafecocochou.uz/#menu",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Air Conditioning",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Outdoor Seating",
        "value": false
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://instagram.com/cafecocochou",
      "https://facebook.com/cafecocochou"
    ]
  }

  return (
    <html lang='ru' suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${font.className}`}>
        <LanguageProvider>
          <AOSProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </AOSProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
