# Instagram Reels Setup Guide

## Instagram Reels Linklarini Olish

### 1. Instagram Reels Embed Linkini Olish:
1. Instagram'da reelsingizni oching
2. Reels'ning o'ng burchagidagi "..." tugmasini bosing
3. "Embed" ni tanlang
4. "Copy embed code" tugmasini bosing
5. HTML kodidan `src` atributini oling

**Misol:**
```html
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/C1234567890/" data-instgrm-version="14">
  <a href="https://www.instagram.com/reel/C1234567890/" target="_blank">View this post on Instagram</a>
</blockquote>
```

Bu holatda embed URL: `https://www.instagram.com/reel/C1234567890/embed/`

### 2. Componentda Ishlatish:

```typescript
const videoData: VideoItem[] = [
  {
    id: 1,
    instagramUrl: 'https://www.instagram.com/reel/C1234567890/', // Asl Instagram linki
    embedUrl: 'https://www.instagram.com/reel/C1234567890/embed/', // Embed linki
    thumbnail: '/images/interior/thumb1.jpg', // Thumbnail rasm
    title: 'Cafe Interior Tour',
    description: 'Beautiful Korean-style cafe atmosphere'
  },
  // ... boshqa reelslar
]
```

### 3. Thumbnail Rasmlarini Tayyorlash:
- Har bir reels uchun thumbnail rasm yarating
- Rasmlarni `/public/images/interior/` papkasiga joylang
- Nomlash: `thumb1.jpg`, `thumb2.jpg`, va hokazo

### 4. Instagram Reels ID ni Topish:
Instagram reels URL dan ID ni olish:
- `https://www.instagram.com/reel/C1234567890/` → ID: `C1234567890`
- Embed URL: `https://www.instagram.com/reel/C1234567890/embed/`

## Xususiyatlar:

✅ **Instagram Embed**: To'g'ridan-to'g'ri Instagram reels ko'rsatiladi
✅ **Responsive Design**: Barcha qurilmalarda ishlaydi
✅ **Navigation**: Oldingi/keyingi tugmalar
✅ **Thumbnail Navigation**: Pastdagi thumbnail'lar
✅ **Instagram Link**: "View on Instagram" tugmasi
✅ **Multi-language**: 4 tilda tarjima

## Eslatma:
- Instagram reels'lar faqat embed orqali ko'rsatiladi
- Blob linklar ishlamaydi, faqat Instagram'ning rasmiy embed linklari ishlaydi
- Har bir reels uchun alohida embed URL kerak
