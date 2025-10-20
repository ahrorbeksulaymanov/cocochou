# 🌍 Tarjima Tizimi (i18n) - Qo'llanma

## ✅ O'rnatilgan Tillar

- 🇷🇺 **Ruscha** (Default til)
- 🇺🇿 **O'zbekcha**
- 🇰🇷 **Koreyscha**

## 📦 Kutubxona

**next-intl** - Next.js 15 App Router uchun eng yaxshi i18n yechim

## 🚀 Ishga Tushirish

Ilovani ishga tushiring:
```bash
npm run dev
```

Brauzerda oching:
- Ruscha: http://localhost:3000 yoki http://localhost:3000/ru
- O'zbekcha: http://localhost:3000/uz
- Koreyscha: http://localhost:3000/ko

## 🎯 Asosiy Xususiyatlar

### 1. Til Almashtirish Komponenti

Header'da til almashtirish tugmasi mavjud:
- Desktop: Bayroq va til nomi bilan
- Mobil: Faqat bayroq bilan
- Dropdown menyu barcha tillarni ko'rsatadi

### 2. Avtomatik URL Boshqaruvi

- Default til (ruscha) URL'da ko'rsatilmaydi
- Boshqa tillar URL'da ko'rsatiladi: `/uz/`, `/ko/`
- Middleware avtomatik ravishda tilni aniqlaydi

### 3. Tarjimalar JSON Format

Barcha tarjimalar `messages/` papkasida:
```
messages/
├── ru.json    # Ruscha
├── uz.json    # O'zbekcha  
└── ko.json    # Koreyscha
```

## 💻 Kodda Foydalanish

### Client Komponentda

```tsx
'use client'

import { useTranslations } from 'next-intl'

export default function MyComponent() {
  const t = useTranslations('header')
  
  return (
    <div>
      <button>{t('signIn')}</button>
      <button>{t('signUp')}</button>
    </div>
  )
}
```

### Server Komponentda

```tsx
import { useTranslations } from 'next-intl'

export default async function MyServerComponent() {
  const t = await useTranslations('navigation')
  
  return (
    <nav>
      <a>{t('home')}</a>
      <a>{t('menu')}</a>
    </nav>
  )
}
```

### Hozirgi Tilni Olish

```tsx
'use client'

import { useLocale } from 'next-intl'

export default function LanguageInfo() {
  const locale = useLocale() // 'ru', 'uz', yoki 'ko'
  
  return <p>Current language: {locale}</p>
}
```

## 📝 Tarjima Qo'shish

### 1. JSON Faylga Qo'shish

**messages/ru.json**
```json
{
  "products": {
    "title": "Продукты",
    "add": "Добавить",
    "delete": "Удалить"
  }
}
```

**messages/uz.json**
```json
{
  "products": {
    "title": "Mahsulotlar",
    "add": "Qo'shish",
    "delete": "O'chirish"
  }
}
```

**messages/ko.json**
```json
{
  "products": {
    "title": "제품",
    "add": "추가",
    "delete": "삭제"
  }
}
```

### 2. Komponentda Ishlatish

```tsx
'use client'

import { useTranslations } from 'next-intl'

export default function Products() {
  const t = useTranslations('products')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <button>{t('add')}</button>
      <button>{t('delete')}</button>
    </div>
  )
}
```

## 🔗 Link'lar

### next/link bilan

```tsx
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Navigation() {
  const locale = useLocale()
  
  return (
    <nav>
      <Link href={`/${locale}/about`}>About</Link>
      <Link href={`/${locale}/contact`}>Contact</Link>
    </nav>
  )
}
```

## 📂 Fayl Strukturasi

```
cocochou/
├── messages/                 # ✅ Tarjima fayllari
│   ├── ru.json
│   ├── uz.json
│   └── ko.json
├── src/
│   ├── i18n.ts              # ✅ i18n konfiguratsiyasi
│   ├── middleware.ts        # ✅ Til middleware
│   ├── app/
│   │   ├── [locale]/        # ✅ Locale wrapper
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── (site)/
│   │   ├── components/
│   │   │   └── Language/    # ✅ Til almashtiruvchi
│   │   │       └── index.tsx
│   │   ├── api/             # API tildan mustaqil
│   │   └── ...
├── next.config.mjs          # ✅ next-intl plugin
└── package.json
```

## 🎨 Mavjud Tarjimalar

### header
```json
{
  "phone": "+1(909) 235-9814",
  "signIn": "Войти / Kirish / 로그인",
  "signUp": "Регистрация / Ro'yxatdan o'tish / 회원가입"
}
```

### navigation
```json
{
  "home": "Главная / Bosh sahifa / 홈",
  "menu": "Меню / Menyu / 메뉴",
  "about": "О нас / Biz haqimizda / 소개",
  "services": "Услуги / Xizmatlar / 서비스",
  "contact": "Контакты / Bog'lanish / 연락처",
  "documentation": "Документация / Hujjatlar / 문서"
}
```

### auth, hero, footer, features, gallery, newsletter, contact, common
To'liq ro'yxat uchun `messages/*.json` fayllarini ko'ring.

## 🔧 Sozlamalar

### Til Qo'shish

1. `messages/` da yangi fayl yarating (masalan, `en.json`)
2. `src/i18n.ts` ni yangilang:
```typescript
export const locales = ['ru', 'uz', 'ko', 'en'] as const
```
3. `src/middleware.ts` ni yangilang
4. `src/app/components/Language/index.tsx` da `languages` arrayni yangilang:
```typescript
const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]
```

### Default Tilni O'zgartirish

`src/i18n.ts` faylida:
```typescript
export const defaultLocale = 'uz' as const // O'zbekcha default qilish
```

## ⚠️ Muhim Eslatmalar

1. **Kalitlar bir xil bo'lishi kerak**: Barcha JSON fayllarda bir xil kalitlar bo'lishi shart
2. **Client vs Server**: `'use client'` direktivi bo'lsa `useTranslations()` dan foydalaning
3. **URL Strukturasi**: Middleware avtomatik URL'ni boshqaradi
4. **API Routes**: API routes tildan mustaqil, `app/api/` papkasida qoladi
5. **Static Files**: `public/` papkasi tildan mustaqil

## 🐛 Muammolarni Hal Qilish

### Tarjima ko'rinmayapti?
1. JSON fayllardagi kalitlarni tekshiring
2. Komponentda to'g'ri namespace ishlatilganini tekshiring
3. Development serverni qayta ishga tushiring

### Til o'zgarmayapti?
1. Browser cache'ni tozalang
2. URL to'g'ri formatda ekanini tekshiring
3. Middleware to'g'ri ishlayotganini tekshiring

### Build xatoliklari?
1. Barcha JSON fayllar to'g'ri formatda ekanini tekshiring
2. `npm install` qayta ishga tushiring
3. `.next` papkasini o'chirib qayta build qiling

## 📚 Qo'shimcha Resurslar

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

## 🎉 Tayyor!

Endi sizning ilovangiz 3 tilni qo'llab-quvvatlaydi. Header'dagi til tugmasi orqali osongina almashtirishingiz mumkin!

**Test qilish:**
1. Ilovani ishga tushiring: `npm run dev`
2. Header'dagi til tugmasini bosing
3. Turli tillarni sinab ko'ring
4. URL o'zgarishini kuzating

**Yangi komponent yaratganda:**
1. Tarjimalarni `messages/*.json` ga qo'shing
2. Komponentda `useTranslations()` dan foydalaning
3. Test qiling va enjoy! 🚀

