# Tarjima Tizimi (Internationalization - i18n)

Bu loyihada **next-intl** kutubxonasi yordamida 3 til qo'llab-quvvatlanadi:
- 🇷🇺 Ruscha (Default)
- 🇺🇿 O'zbekcha
- 🇰🇷 Koreyscha

## Tuzilish

```
├── messages/           # Tarjima fayllari
│   ├── ru.json        # Ruscha tarjimalar
│   ├── uz.json        # O'zbekcha tarjimalar
│   └── ko.json        # Koreys tarjimalar
├── src/
│   ├── i18n.ts        # i18n konfiguratsiyasi
│   ├── middleware.ts  # Til middleware
│   ├── app/
│   │   ├── [locale]/  # Locale-bilan sahifalar
│   │   └── components/
│   │       └── Language/  # Til almashtiruvchi komponent
```

## Komponentlarda Ishlatish

### Client Component

```tsx
'use client'

import { useTranslations } from 'next-intl'

export default function MyComponent() {
  const t = useTranslations('header')
  
  return (
    <div>
      <h1>{t('signIn')}</h1>
      <button>{t('signUp')}</button>
    </div>
  )
}
```

### Server Component

```tsx
import { useTranslations } from 'next-intl'

export default async function MyServerComponent() {
  const t = await useTranslations('navigation')
  
  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/menu">{t('menu')}</a>
    </nav>
  )
}
```

## Tarjimalar Qo'shish

Tarjima qo'shish uchun `messages/` papkasidagi tegishli JSON faylga qo'shing:

**messages/ru.json**
```json
{
  "mySection": {
    "title": "Заголовок",
    "description": "Описание"
  }
}
```

**messages/uz.json**
```json
{
  "mySection": {
    "title": "Sarlavha",
    "description": "Tavsif"
  }
}
```

**messages/ko.json**
```json
{
  "mySection": {
    "title": "제목",
    "description": "설명"
  }
}
```

## URL Strukturasi

- **Ruscha (default):** `https://example.com/` yoki `https://example.com/ru/`
- **O'zbekcha:** `https://example.com/uz/`
- **Koreyscha:** `https://example.com/ko/`

## Til Almashtirish

Foydalanuvchi header'dagi til tugmasini bosib tilni almashtirishi mumkin. Til tanlovi avtomatik saqlanadi va URLda aks ettiriladi.

## Link'lar Yaratish

Locale bilan link yaratish uchun:

```tsx
import { Link } from '@/navigation'

<Link href="/about">About</Link>
```

yoki

```tsx
import { useLocale } from 'next-intl'
import Link from 'next/link'

function MyComponent() {
  const locale = useLocale()
  
  return (
    <Link href={`/${locale}/about`}>About</Link>
  )
}
```

## Mavjud Tarjimalar

### header
- phone, signIn, signUp

### navigation
- home, menu, about, services, contact, documentation

### hero
- title, subtitle, button

### footer
- rights, aboutUs, quickLinks, contact

### auth
- email, password, confirmPassword, forgotPassword, rememberMe, dontHaveAccount, alreadyHaveAccount, createAccount, signInWith, or

### features
- title, subtitle

### gallery
- title, subtitle

### newsletter
- title, subtitle, placeholder, subscribe

### contact
- title, name, email, message, send

### common
- loading, error, success, cancel, save, delete, edit, close

## Yangi Til Qo'shish

1. `messages/` papkasida yangi JSON fayl yarating (masalan, `en.json`)
2. `src/i18n.ts` faylida `locales` arrayga yangi tilni qo'shing:
```typescript
export const locales = ['ru', 'uz', 'ko', 'en'] as const
```
3. `src/middleware.ts` da middleware konfiguratsiyasini yangilang
4. `src/app/components/Language/index.tsx` da `languages` arrayga yangi tilni qo'shing

## Muhim Eslatmalar

- Barcha tarjima kalitlari uchta JSON faylda bir xil bo'lishi kerak
- Tarjima topilmasa, kalitning o'zi ko'rsatiladi
- Default til ruscha bo'lib, URL'da ko'rsatilmaydi (optional)

