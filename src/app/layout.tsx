import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import { LanguageProvider } from '@/contexts/LanguageContext'
import type { Metadata } from 'next'
import "flag-icons/css/flag-icons.min.css";

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Cafe Cocochou - Premium Coffee & Dessert Cafe in Tashkent',
  description: 'Cafe Cocochou brings Korean cafe culture to Tashkent. Enjoy artisan coffee, handcrafted cakes, premium desserts, and cozy cafe atmosphere. Open daily 9 AM - 10 PM.',
  keywords: 'cafe tashkent, korean cafe, coffee shop tashkent, artisan coffee, handcrafted cakes, premium desserts, korean desserts uzbekistan, cafe cocochou',
  icons: {
    icon: '/images/Logo/logo.png',
    shortcut: '/images/Logo/logo.png',
    apple: '/images/Logo/logo.png',
  },
  openGraph: {
    title: 'Cafe Cocochou - Your Perfect Coffee & Dessert Paradise',
    description: 'Where Seoul meets Tashkent. Artisan coffee, handcrafted cakes, and heavenly desserts in a cozy cafe atmosphere.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cafe Cocochou',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  )
}
