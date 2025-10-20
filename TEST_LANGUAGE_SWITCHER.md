# 🧪 Til Almashtirishni Test Qilish

## Test Qadamlari:

1. **Brauzerda oching:** `http://localhost:3000`

2. **Developer Tools oching:**
   - F12 yoki Ctrl+Shift+I
   - Console tab'ini oching

3. **Til almashtirishni sinab ko'ring:**
   - Header'dagi til tugmasini toping (bayroq bilan)
   - Bosing va dropdown ochilishini kuzating
   - Boshqa tilni tanlang (masalan, O'zbekcha yoki Koreyscha)

4. **Console'da quyidagi log'larni ko'rishingiz kerak:**
   ```
   LanguageSwitcher: Changing to uz
   Changing language to: uz
   Header current language: uz
   ```

5. **Header matnlarining o'zgarishini kuzating:**
   - "Войти" → "Kirish"
   - "Регистрация" → "Ro'yxatdan o'tish"

## Agar Til O'zgarmasa:

1. **Console'da xatolik bormi?** - Agar xatolik bo'lsa, uni ko'rsating
2. **Log'lar chiqayaptimi?** - Til almashtirishda log'lar chiqayaptimi?
3. **Brauzer cache'ni tozalang:** Ctrl+F5

## Muammolarni Hal Qilish:

### Agar log'lar chiqmayapti:
- LanguageSwitcher komponenti ishlamayapti
- useLanguage hook ishlamayapti

### Agar log'lar chiqayapti, lekin matn o'zgarmayapti:
- Tarjima kalitlari noto'g'ri
- Context provider ishlamayapti

### Agar hech narsa ishlamayapti:
- Browser cache'ni tozalang
- Server'ni qayta ishga tushiring

## Test Natijasi:

✅ **Muvaffaqiyatli:** Til almashtirganda header matnlari o'zgaradi
❌ **Muammo:** Til almashtirganda hech narsa o'zgarmaydi

Agar muammo bo'lsa, console'dagi xatoliklarni yuboring!
