'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'uz' | 'ru' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Tarjimalar - Cafe Cocochou
const translations = {
  en: {
    // Header & Navigation
    'header.phone': '+998 90 123 45 67',
    'header.signIn': 'Sign In',
    'header.signUp': 'Sign Up',
    'navigation.home': 'Home',
    'navigation.menu': 'Menu',
    'navigation.about': 'About Us',
    'navigation.reserve': 'Reserve Table',
    'navigation.gallery': 'Gallery',
    'navigation.documentation': 'Docs',
    
    // Hero Section
    'hero.title': 'Your Perfect Coffee & Dessert Paradise',
    'hero.subtitle': 'Where Seoul meets Tashkent. Artisan coffee, handcrafted cakes, and heavenly desserts in a cozy cafe atmosphere.',
    'hero.button.menu': 'Explore Our Menu',
    'hero.button.reserve': 'Reserve a Table',
    'hero.badge': '50+ Artisan Cakes & Premium Coffee',
    
    // About Us
    'about.badge': 'About Us',
    'about.title': 'Where Coffee Dreams Come True',
    'about.text1': 'Born from a passion for exceptional coffee and exquisite desserts, Cafe Cocochou brings the art of Korean cafe culture to Tashkent. We believe coffee is not just a drink—it\'s an experience. A perfect morning ritual. A sweet indulgence with handcrafted cakes. A moment of pure bliss with our signature desserts.',
    'about.text2': 'Our specialty lies in premium coffee blends and artisanal desserts. From rich espresso to delicate matcha cakes, from traditional Korean bingsu to European-style pastries—every creation is crafted with precision and served with passion. Step into Cocochou, and you\'ll discover more than just great coffee. You\'ll find a sanctuary designed for coffee lovers and dessert enthusiasts.',
    'about.button': 'Learn More',
    
    // Features
    'features.badge': 'Why Choose Us',
    'features.title': 'Experience Coffee & Dessert Excellence',
    'features.1.title': 'Premium Coffee Selection',
    'features.1.subtitle': 'Expertly roasted beans from around the world. From single-origin to signature blends, every cup is perfection.',
    'features.2.title': 'Artisan Dessert Craftsmanship',
    'features.2.subtitle': 'Handcrafted cakes, pastries, and Korean-style desserts—made fresh daily with premium ingredients.',
    'features.3.title': 'Cozy Cafe Atmosphere',
    'features.3.subtitle': 'Modern Korean-inspired interiors. Perfect lighting, comfortable seating, and ambient music for the ideal coffee experience.',
    'features.4.title': 'Perfect for Every Moment',
    'features.4.subtitle': 'Morning coffee rituals, afternoon tea time, or evening dessert dates—our cafe welcomes you anytime.',
    
    // Menu/Gallery
    'menu.badge': 'Our Menu',
    'menu.title': 'Explore Our Coffee & Dessert Collection',
    'menu.subtitle': 'From premium coffee blends to artisanal cakes and Korean-style desserts, every creation is crafted with passion and the finest ingredients.',
    'menu.button.more': 'View Full Menu',
    'menu.button.learn': 'Learn More',
    'menu.button.order': 'Order Now',
    'menu.popup.title': 'Full Menu',
    'menu.table.dish': 'Dish',
    'menu.table.description': 'Description',
    'menu.table.price': 'Price',
    
    // Menu Categories
    'menu.category.coffee': 'Coffee',
    'menu.category.bakery': 'Bakery',
    'menu.category.dessert': 'Dessert',
    'menu.category.poke': 'Poke Bowl',
    'menu.category.sandwich': 'Sandwich',
    'menu.category.pasta': 'Pasta',
    'menu.category.bingsu': 'Bingsu',
    'menu.category.beer': 'Beer',
    
    // Coffee
    'menu.coffee.double_espresso': 'Double shot of pure espresso',
    'menu.coffee.americano': 'Classic espresso with hot water',
    'menu.coffee.cafe_latte': 'Smooth espresso with steamed milk',
    'menu.coffee.cappuccino': 'Espresso with equal parts steamed milk and foam',
    'menu.coffee.vanilla_latte': 'Espresso with vanilla and steamed milk',
    'menu.coffee.caramel_macchiato': 'Espresso with caramel and vanilla syrup',
    'menu.coffee.cocochou_cream_latte': 'Our signature cream latte blend',
    'menu.coffee.cafe_mocha': 'Espresso with chocolate and steamed milk',
    'menu.coffee.orange_coffee': 'Espresso with orange and honey',
    
    // Bakery
    'menu.bakery.butter_croissant': 'Flaky layers, golden crust, pure indulgence',
    'menu.bakery.cinnamon_roll': 'Soft, sweet, with cream cheese frosting',
    'menu.bakery.chocolate_croissant': 'Buttery croissant filled with chocolate',
    
    // Sandwich
    'menu.sandwich.grilled_cheese': 'Mozzarella, Colby Jack cheese, béchamel sauce',
    'menu.sandwich.grilled_mushroom': 'Mushrooms in balsamic, caramelized onions',
    'menu.sandwich.grilled_bulgogi': 'Korean-style beef, two types of cheese',
    'menu.sandwich.chicken_wrap': 'Chicken with ham, cheese and fresh carrots',
    'menu.sandwich.bulgogi_wrap': 'Korean-style beef wrap with vegetables',
    'menu.sandwich.ham_cheese_carrot': 'Classic ham and cheese with fresh carrots',
    'menu.sandwich.chicken_tender': 'Crispy chicken tender with fresh greens',
    'menu.sandwich.bulgogi': 'Korean-style beef with fresh vegetables',
    'menu.sandwich.egg_mashed_potato': 'Whole egg and mashed potatoes with vegetables',
    
    // Pasta
    'menu.pasta.arabiata': 'Classic pasta in spicy tomato sauce',
    'menu.pasta.bacon_cream': 'Creamy pasta with crispy bacon',
    'menu.pasta.shrimp_aglio_e_olio': 'Pasta with garlic, chili pepper and shrimp',
    'menu.pasta.bulgogi_cream': 'Creamy pasta with Korean-style beef',
    'menu.pasta.shrimp_rose': 'Exquisite pasta with juicy shrimp in creamy tomato sauce',
    
    // Poke Bowl
    'menu.poke.grilled_bulgogi': 'Korean-style grilled beef with rice and fresh vegetables',
    'menu.poke.soy_chicken_thigh': 'Soy-marinated chicken thigh with rice bowl',
    'menu.poke.garlic_shrimp': 'Juicy shrimp fried with garlic in olive oil',
    'menu.poke.teriyaki_mushroom': 'Fried mushrooms in teriyaki sauce',
    'menu.poke.chicken_tender': 'Juicy chicken fillets in crispy breading',
    'menu.poke.garden_salad': 'Vegetable salad with balsamic sauce',
    
    // Bingsu
    'menu.bingsu.matcha': 'Korean shaved ice with matcha, red bean, and mochi',
    'menu.bingsu.strawberry': 'Korean shaved ice topped with fresh strawberries',
    'menu.bingsu.mango': 'Korean shaved ice topped with fresh mango',
    'menu.bingsu.chocolate': 'Korean shaved ice topped with chocolate sauce',
    
    // Dessert
    'menu.dessert.strawberry_cheesecake': 'Creamy, dreamy, topped with fresh berries',
    'menu.dessert.tiramisu': 'Classic Italian layers, espresso-soaked perfection',
    'menu.dessert.matcha_cake': 'Delicate matcha cake with cream',
    'menu.dessert.chocolate_mousse': 'Rich chocolate mousse dessert',
    
    // Beer
    'menu.beer.sarbast': 'Filtered draft beer, crisp and refreshing',
    'menu.beer.zatecky_gus': 'Unfiltered Czech beer, rich and flavorful',
    'menu.beer.kombu_cocktail': 'Light, sparkling cocktail from kombucha and beer',
    
    // Gallery
    'gallery.badge': 'Gallery',
    'gallery.title': 'A Glimpse into Our Coffee & Dessert Artistry',
    'gallery.subtitle': 'Behind-the-scenes moments showcasing our coffee brewing and dessert crafting process',
    'gallery.button.view': 'View All Photos',
    'gallery.button.learn': 'Learn More',
    'gallery.button.back': 'Back to Home',
    'gallery.popup.title': 'Full Gallery',
    'gallery.table.dish': 'Dish',
    'gallery.table.description': 'Description',
    'gallery.table.price': 'Price',
    
    // Chefs/Team
    'team.badge': 'Our Team',
    'team.title': 'Meet the People Behind Cocochou',
    'team.chef.senior': 'Head Chef',
    'team.chef.junior': 'Pastry Chef',
    'team.barista': 'Head Barista',
    
    // Newsletter
    'newsletter.badge': 'Newsletter',
    'newsletter.title': 'Subscribe to our newsletter',
    'newsletter.subtitle': 'Get the latest updates on special dishes and events',
    'newsletter.placeholder': 'your.email@example.com',
    'newsletter.button': 'Subscribe',
    
    // Reservation Form
    'reservation.badge': 'Reservation',
    'reservation.title': 'Reserve Your Table',
    'reservation.fullname': 'Full Name',
    'reservation.email': 'Email Address',
    'reservation.phone': 'Phone Number',
    'reservation.outlet': 'Location',
    'reservation.outlet.placeholder': 'Choose Location',
    'reservation.outlet.tashkent': 'Tashkent - Main Branch',
    'reservation.time': 'Time',
    'reservation.people': 'Number of Guests',
    'reservation.message': 'Special Requests',
    'reservation.message.placeholder': 'Any dietary restrictions or special occasions?',
    'reservation.submit': 'Reserve Table',
    'reservation.success': 'Thanks! Your table is reserved. See you soon!',
    
    // Footer
    'footer.slogan': 'Where every cup of coffee and every bite of dessert feels like heaven.',
    'footer.description': 'Cafe Cocochou brings Korean cafe culture to Tashkent with premium coffee, artisanal desserts, and cozy atmosphere made with passion.',
    'footer.section.company': 'Company',
    'footer.section.support': 'Support',
    'footer.link.home': 'Home',
    'footer.link.about': 'About Us',
    'footer.link.menu': 'Menu',
    'footer.link.reserve': 'Reserve Table',
    'footer.link.faq': 'Help/FAQ',
    'footer.link.press': 'Press',
    'footer.link.careers': 'Careers',
    'footer.link.contact': 'Contact',
    'footer.link.gallery': 'Gallery',
    'footer.address': 'Mirabad 39, Tashkent, Uzbekistan',
    'footer.rights': '© 2025 Cafe Cocochou. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.hours': 'Open Daily: 9:00 AM - 10:00 PM',
  },
  
  uz: {
    // Header & Navigation
    'header.phone': '+998 90 123 45 67',
    'header.signIn': 'Kirish',
    'header.signUp': "Ro'yxatdan o'tish",
    'navigation.home': 'Bosh sahifa',
    'navigation.menu': 'Menyu',
    'navigation.about': 'Biz haqimizda',
    'navigation.reserve': 'Stol band qilish',
    'navigation.gallery': 'Galereya',
    'navigation.documentation': 'Hujjatlar',
    
    // Hero Section
    'hero.title': 'Sizning Mukammal Qahva va Desert Olamingiz',
    'hero.subtitle': 'Seul va Toshkent uchrashuvi. Artisan qahva, qo\'lda tayyorlangan keklar va ajoyib desertlar shinam kafe muhitida.',
    'hero.button.menu': "Menyuni ko'ring",
    'hero.button.reserve': 'Stol band qilish',
    'hero.badge': "50+ Artisan Kek va Premium Qahva",
    
    // About Us
    'about.badge': 'Biz haqimizda',
    'about.title': 'Qahva Orzulari Amalga Oshadigan Joy',
    'about.text1': "Ajoyib qahva va nozik desertlarga ishtiyoqdan tug'ilgan Cafe Cocochou Toshkentga Koreys kafe madaniyati san'atini olib keladi. Biz qahva shunchaki ichimlik emas - bu tajriba deb hisoblaymiz. Mukammal tong marosimi. Qo'lda tayyorlangan keklar bilan shirin zavq. Bizning imzoli desertlarimiz bilan sof baxt lahzasi.",
    'about.text2': "Bizning ixtisosimiz premium qahva aralashmalari va artisan desertlarda. Boy espressodan nozik matcha keklargacha, an'anaviy Koreys bingusidan Evropa uslubidagi pechenelargacha—har bir yaratuv aniq va ehtiros bilan tayyorlanadi. Cocochou'ga kiring va ajoyib qahvadan ko'proq narsani topasiz. Qahva sevuvchilar va desert ishqibozlari uchun mo'ljallangan boshpanani topasiz.",
    'about.button': "Ko'proq bilish",
    
    // Features
    'features.badge': 'Nima uchun bizni tanlash kerak',
    'features.title': 'Qahva va Desert Mukammalligini Tajriba Qiling',
    'features.1.title': 'Premium Qahva Tanlovi',
    'features.1.subtitle': 'Butun dunyo bo\'ylab ekspert darajasida qovurilgan donlar. Yagona kelib chiqishidan imzoli aralashmalargacha, har bir finjon mukammallikdir.',
    'features.2.title': 'Artisan Desert Hunarmandchiligi',
    'features.2.subtitle': "Qo'lda tayyorlangan keklar, pechenelar va Koreys uslubidagi desertlar—har kuni premium ingredientlar bilan yangi tayyorlanadi.",
    'features.3.title': 'Shinam Kafe Muhiti',
    'features.3.subtitle': 'Zamonaviy Koreys ilhomlangan intererlar. Mukammal yoritish, qulay o\'rindiqlar va ideal qahva tajribasi uchun muhit musiqasi.',
    'features.4.title': 'Har Bir Lahza uchun Mukammal',
    'features.4.subtitle': "Tong qahva marosimlari, tushlik choy vaqti yoki kechki desert uchrashuvlari—bizning kafemiz sizni istalgan vaqtda kutib oladi.",
    
    // Menu/Gallery
    'menu.badge': 'Bizning Menyu',
    'menu.title': "Bizning Qahva va Desert Kolleksiyamizni O'rganing",
    'menu.subtitle': 'Premium qahva aralashmalaridan artisan keklar va Koreys uslubidagi desertlargacha, har bir yaratuv ehtiros va eng yaxshi ingredientlar bilan tayyorlanadi.',
    'menu.button.more': "To'liq Menyuni Ko'rish",
    'menu.button.learn': "Ko'proq Bilish",
    'menu.button.order': 'Buyurtma Berish',
    'menu.popup.title': "To'liq Menyu",
    'menu.table.dish': 'Taom',
    'menu.table.description': 'Tavsif',
    'menu.table.price': 'Narx',
    
    // Menu Categories
    'menu.category.coffee': 'Qahva',
    'menu.category.bakery': 'Non-Bulochka',
    'menu.category.dessert': 'Desert',
    'menu.category.poke': 'Poke Bowl',
    'menu.category.sandwich': 'Sendvich',
    'menu.category.pasta': 'Pasta',
    'menu.category.bingsu': 'Bingsu',
    'menu.category.beer': 'Pivo',
    
    // Coffee
    'menu.coffee.double_espresso': 'Ikki shot toza espresso',
    'menu.coffee.americano': 'Issiq suv bilan klassik espresso',
    'menu.coffee.cafe_latte': 'Bug\'dangan sut bilan silliq espresso',
    'menu.coffee.cappuccino': 'Teng nisbatda bug\'dangan sut va ko\'pik bilan espresso',
    'menu.coffee.vanilla_latte': 'Vanil va bug\'dangan sut bilan espresso',
    'menu.coffee.caramel_macchiato': 'Karamel va vanil siropi bilan espresso',
    'menu.coffee.cocochou_cream_latte': 'Bizning imzoli krem latte aralashmasi',
    'menu.coffee.cafe_mocha': 'Shokolad va bug\'dangan sut bilan espresso',
    'menu.coffee.orange_coffee': 'Apelsin va asal bilan espresso',
    
    // Bakery
    'menu.bakery.butter_croissant': 'Qatlamli, oltin qobiq, sof lazzat',
    'menu.bakery.cinnamon_roll': 'Yumshoq, shirin, krem pishloq bilan',
    'menu.bakery.chocolate_croissant': 'Shokolad bilan to\'ldirilgan sariyog\'li kruassan',
    
    // Sandwich
    'menu.sandwich.grilled_cheese': 'Motsarella, Kolbi Jek pishloq, beshamel sousi',
    'menu.sandwich.grilled_mushroom': 'Balsamikdagi qo\'ziqorinlar, karamellashgan piyoz',
    'menu.sandwich.grilled_bulgogi': 'Koreyscha mol go\'shti, ikki xil pishloq',
    'menu.sandwich.chicken_wrap': 'Go\'sht, pishloq va yangi sabzi bilan tovuq',
    'menu.sandwich.bulgogi_wrap': 'Sabzavotlar bilan Koreyscha mol go\'shti wrap',
    'menu.sandwich.ham_cheese_carrot': 'Yangi sabzi bilan klassik go\'sht va pishloq',
    'menu.sandwich.chicken_tender': 'Yangi ko\'k narsalar bilan qovurilgan tovuq',
    'menu.sandwich.bulgogi': 'Yangi sabzavotlar bilan Koreyscha mol go\'shti',
    'menu.sandwich.egg_mashed_potato': 'Butun tuxum va sabzavotlar bilan kartoshka pyuresi',
    
    // Pasta
    'menu.pasta.arabiata': 'Achchiq pomidor sousidagi klassik pasta',
    'menu.pasta.bacon_cream': 'Qovurilgan bekon bilan krem pasta',
    'menu.pasta.shrimp_aglio_e_olio': 'Sarimsoq, qalampir va qisqichbaqa bilan pasta',
    'menu.pasta.bulgogi_cream': 'Koreyscha go\'sht bilan krem pasta',
    'menu.pasta.shrimp_rose': 'Krem pomidor sousida shirali qisqichbaqa bilan pasta',
    
    // Poke Bowl
    'menu.poke.grilled_bulgogi': 'Guruch va yangi sabzavotlar bilan Koreyscha qovurilgan go\'sht',
    'menu.poke.soy_chicken_thigh': 'Soya sousida marinadlangan tovuq soni bilan guruch kosasi',
    'menu.poke.garlic_shrimp': 'Zaytun yog\'ida sarimsoq bilan qovurilgan shirali qisqichbaqa',
    'menu.poke.teriyaki_mushroom': 'Teriyaki sousidagi qovurilgan qo\'ziqorinlar',
    'menu.poke.chicken_tender': 'Qovurilgan panirovkadagi shirali tovuq file',
    'menu.poke.garden_salad': 'Balsamik sousi bilan sabzavot salati',
    
    // Bingsu
    'menu.bingsu.matcha': 'Matcha, qizil loviya va mochi bilan Koreyscha muz',
    'menu.bingsu.strawberry': 'Yangi qulupnay bilan Koreyscha muz',
    'menu.bingsu.mango': 'Yangi mango bilan Koreyscha muz',
    'menu.bingsu.chocolate': 'Shokolad sousi bilan Koreyscha muz',
    
    // Dessert
    'menu.dessert.strawberry_cheesecake': 'Yangi rezavorlar bilan krem, orzular',
    'menu.dessert.tiramisu': 'Klassik italyan qatlamlari, espresso bilan nam',
    'menu.dessert.matcha_cake': 'Nozik matcha torti krem bilan',
    'menu.dessert.chocolate_mousse': 'Boy shokolad mousse desert',
    
    // Beer
    'menu.beer.sarbast': 'Filtrlanmagan draft pivo, tiniq va yangilaydigan',
    'menu.beer.zatecky_gus': 'Filtrlanmagan chex pivosi, boy va lazzatli',
    'menu.beer.kombu_cocktail': 'Kombucha va pivodan yasalgan engil, shishiruvli kokteyl',
    
    // Gallery
    'gallery.badge': 'Galereya',
    'gallery.title': 'Bizning Qahva va Desert San\'atkorligimizdan Bir Ko\'rinish',
    'gallery.subtitle': 'Bizning qahva qaynatish va desert tayyorlash jarayonimizni ko\'rsatuvchi sahna ortidagi lahzalarda',
    'gallery.button.view': 'Barcha Rasmlarni Ko\'rish',
    'gallery.button.learn': 'Ko\'proq Bilish',
    'gallery.button.back': 'Bosh Sahifaga Qaytish',
    'gallery.popup.title': 'To\'liq Galereya',
    'gallery.table.dish': 'Taom',
    'gallery.table.description': 'Tavsif',
    'gallery.table.price': 'Narx',
    
    // Chefs/Team
    'team.badge': 'Bizning Jamoa',
    'team.title': 'Cocochou Ortidagi Odamlar bilan Tanishing',
    'team.chef.senior': 'Bosh Oshpaz',
    'team.chef.junior': 'Qandolatchi',
    'team.barista': 'Bosh Barista',
    
    // Newsletter
    'newsletter.badge': 'Yangiliklar',
    'newsletter.title': "Yangiliklar ro'yxatiga obuna bo'ling",
    'newsletter.subtitle': "Maxsus taomlar va tadbirlar haqida so'nggi yangiliklarni oling",
    'newsletter.placeholder': 'sizning.email@example.com',
    'newsletter.button': "Obuna bo'lish",
    
    // Reservation Form
    'reservation.badge': 'Bron qilish',
    'reservation.title': 'Stolingizni Band Qiling',
    'reservation.fullname': 'To\'liq Ism',
    'reservation.email': 'Email Manzil',
    'reservation.phone': 'Telefon Raqam',
    'reservation.outlet': 'Joylashuv',
    'reservation.outlet.placeholder': 'Joylashuvni Tanlang',
    'reservation.outlet.tashkent': 'Toshkent - Asosiy Filial',
    'reservation.time': 'Vaqt',
    'reservation.people': 'Mehmonlar Soni',
    'reservation.message': 'Maxsus Talablar',
    'reservation.message.placeholder': "Parhez cheklovlari yoki maxsus voqealar bormi?",
    'reservation.submit': 'Stol Band Qilish',
    'reservation.success': "Rahmat! Stolingiz band qilindi. Ko'rishguncha!",
    
    // Footer
    'footer.slogan': "Har bir finjon qahva va har bir luqma desert go'zal kabi his qilinadi.",
    'footer.description': "Cafe Cocochou premium qahva, artisan desertlar va shinam muhit bilan Toshkentga Koreys kafe madaniyatini ehtiros bilan olib keladi.",
    'footer.section.company': 'Kompaniya',
    'footer.section.support': 'Yordam',
    'footer.link.home': 'Bosh sahifa',
    'footer.link.about': 'Biz haqimizda',
    'footer.link.menu': 'Menyu',
    'footer.link.reserve': 'Stol band qilish',
    'footer.link.faq': 'Yordam/FAQ',
    'footer.link.press': 'Matbuot',
    'footer.link.careers': 'Karyera',
    'footer.link.contact': "Bog'lanish",
    'footer.link.gallery': 'Galereya',
    'footer.address': 'Mirabad 39, Toshkent, O\'zbekiston',
    'footer.rights': '© 2025 Cafe Cocochou. Barcha huquqlar himoyalangan.',
    'footer.privacy': 'Maxfiylik Siyosati',
    'footer.terms': 'Shartlar va Qoidalar',
    'footer.hours': 'Har kuni ochiq: 9:00 - 22:00',
  },
  
  ru: {
    // Header & Navigation
    'header.phone': '+998 90 123 45 67',
    'header.signIn': 'Войти',
    'header.signUp': 'Регистрация',
    'navigation.home': 'Главная',
    'navigation.menu': 'Меню',
    'navigation.about': 'О нас',
    'navigation.reserve': 'Забронировать стол',
    'navigation.gallery': 'Галерея',
    'navigation.documentation': 'Документация',
    
    // Hero Section
    'hero.title': 'Ваш идеальный рай кофе и десертов',
    'hero.subtitle': 'Где Сеул встречает Ташкент. Ремесленный кофе, торты ручной работы и небесные десерты в уютной атмосфере кафе.',
    'hero.button.menu': 'Посмотреть меню',
    'hero.button.reserve': 'Забронировать стол',
    'hero.badge': '50+ Ремесленных тортов и премиум кофе',
    
    // About Us
    'about.badge': 'О нас',
    'about.title': 'Где сбываются кофейные мечты',
    'about.text1': 'Рожденное из страсти к исключительному кофе и изысканным десертам, Cafe Cocochou приносит искусство корейской кафе-культуры в Ташкент. Мы верим, что кофе - это не просто напиток, это опыт. Идеальный утренний ритуал. Сладкое наслаждение с тортами ручной работы. Момент чистого блаженства с нашими фирменными десертами.',
    'about.text2': 'Наша специализация - премиальные кофейные смеси и ремесленные десерты. От насыщенного эспрессо до нежных матча-тортов, от традиционного корейского бинсу до европейской выпечки - каждое творение создается с точностью и подается со страстью. Зайдите в Cocochou, и вы откроете больше, чем просто отличный кофе. Вы найдете убежище, созданное для любителей кофе и энтузиастов десертов.',
    'about.button': 'Узнать больше',
    
    // Features
    'features.badge': 'Почему выбирают нас',
    'features.title': 'Испытайте совершенство кофе и десертов',
    'features.1.title': 'Премиальная кофейная коллекция',
    'features.1.subtitle': 'Экспертно обжаренные зерна со всего мира. От моносортов до фирменных смесей, каждая чашка - это совершенство.',
    'features.2.title': 'Ремесленное мастерство десертов',
    'features.2.subtitle': 'Торты ручной работы, выпечка и десерты в корейском стиле—готовятся свежими каждый день из премиальных ингредиентов.',
    'features.3.title': 'Уютная атмосфера кафе',
    'features.3.subtitle': 'Современные интерьеры в корейском стиле. Идеальное освещение, удобные места и атмосферная музыка для идеального кофейного опыта.',
    'features.4.title': 'Идеально для каждого момента',
    'features.4.subtitle': 'Утренние кофейные ритуалы, послеобеденное чаепитие или вечерние десертные свидания—наше кафе приветствует вас в любое время.',
    
    // Menu/Gallery
    'menu.badge': 'Наше меню',
    'menu.title': 'Исследуйте нашу коллекцию кофе и десертов',
    'menu.subtitle': 'От премиальных кофейных смесей до ремесленных тортов и десертов в корейском стиле, каждое творение создано со страстью и лучшими ингредиентами.',
    'menu.button.more': 'Посмотреть полное меню',
    'menu.button.learn': 'Узнать больше',
    'menu.button.order': 'Заказать',
    'menu.popup.title': 'Полное меню',
    'menu.table.dish': 'Блюдо',
    'menu.table.description': 'Описание',
    'menu.table.price': 'Цена',
    
    // Menu Categories
    'menu.category.coffee': 'Кофе',
    'menu.category.bakery': 'Выпечка',
    'menu.category.dessert': 'Десерт',
    'menu.category.poke': 'Поке Боул',
    'menu.category.sandwich': 'Сэндвич',
    'menu.category.pasta': 'Паста',
    'menu.category.bingsu': 'Бинсу',
    'menu.category.beer': 'Пиво',
    
    // Coffee
    'menu.coffee.americano': 'Классический эспрессо с горячей водой',
    'menu.coffee.latte': 'Плавный эспрессо с молочной пенкой',
    'menu.coffee.cappuccino': 'Эспрессо с равными частями молока и пены',
    'menu.coffee.dalgona': 'Магия взбитого кофе, подается горячим или холодным',
    
    // Bakery
    'menu.bakery.croissant': 'Слоистые, золотистая корочка, чистое удовольствие',
    'menu.bakery.cinnamon': 'Мягкий, сладкий, с крем-сырной глазурью',
    
    // Sandwich
    'menu.sandwich.bulgogi': 'Корейская говядина со свежими овощами',
    'menu.sandwich.chicken': 'Хрустящие куриные тендеры со свежей зеленью',
    'menu.sandwich.ham': 'Классический ветчина и сыр со свежей морковью',
    
    // Pasta
    'menu.pasta.bulgogi': 'Кремовая паста с корейской говядиной',
    'menu.pasta.shrimp': 'Изысканная паста с сочными креветками в сливочно-томатном соусе',
    
    // Poke Bowl
    'menu.poke.bulgogi': 'Корейская жареная говядина с рисом и свежими овощами',
    'menu.poke.chicken': 'Маринованное в соевом соусе куриное бедро с рисовой миской',
    
    // Bingsu
    'menu.bingsu.matcha': 'Корейский колотый лед с матча, красной фасолью и моти',
    'menu.bingsu.strawberry': 'Корейский колотый лед, украшенный свежей клубникой',
    
    // Dessert
    'menu.dessert.cheesecake': 'Кремовый, мечтательный, украшенный свежими ягодами',
    'menu.dessert.tiramisu': 'Классические итальянские слои, пропитанные эспрессо',
    
    // Beer
    'menu.beer.draft': 'Холодное, хрустящее, идеально подходит к любому блюду',
    
    // Gallery
    'gallery.badge': 'Галерея',
    'gallery.title': 'Взгляд в наше кофейное и десертное искусство',
    'gallery.subtitle': 'Закулисные моменты, демонстрирующие наш процесс заваривания кофе и создания десертов',
    'gallery.button.view': 'Посмотреть все фото',
    'gallery.button.learn': 'Узнать больше',
    'gallery.button.back': 'Вернуться на главную',
    'gallery.popup.title': 'Полная галерея',
    'gallery.table.dish': 'Блюдо',
    'gallery.table.description': 'Описание',
    'gallery.table.price': 'Цена',
    
    // Chefs/Team
    'team.badge': 'Наша команда',
    'team.title': 'Познакомьтесь с людьми за Cocochou',
    'team.chef.senior': 'Шеф-повар',
    'team.chef.junior': 'Кондитер',
    'team.barista': 'Главный бариста',
    
    // Newsletter
    'newsletter.badge': 'Новости',
    'newsletter.title': 'Подпишитесь на нашу рассылку',
    'newsletter.subtitle': 'Получайте последние обновления о специальных блюдах и мероприятиях',
    'newsletter.placeholder': 'ваш.email@example.com',
    'newsletter.button': 'Подписаться',
    
    // Reservation Form
    'reservation.badge': 'Бронирование',
    'reservation.title': 'Забронируйте ваш стол',
    'reservation.fullname': 'Полное имя',
    'reservation.email': 'Email адрес',
    'reservation.phone': 'Номер телефона',
    'reservation.outlet': 'Локация',
    'reservation.outlet.placeholder': 'Выберите локацию',
    'reservation.outlet.tashkent': 'Ташкент - Главный филиал',
    'reservation.time': 'Время',
    'reservation.people': 'Количество гостей',
    'reservation.message': 'Особые пожелания',
    'reservation.message.placeholder': 'Есть ли диетические ограничения или особые случаи?',
    'reservation.submit': 'Забронировать стол',
    'reservation.success': 'Спасибо! Ваш стол забронирован. До встречи!',
    
    // Footer
    'footer.slogan': 'Где каждая чашка кофе и каждый кусочек десерта ощущается как рай.',
    'footer.description': 'Cafe Cocochou приносит корейскую кафе-культуру в Ташкент с премиальным кофе, ремесленными десертами и уютной атмосферой, созданной со страстью.',
    'footer.section.company': 'Компания',
    'footer.section.support': 'Поддержка',
    'footer.link.home': 'Главная',
    'footer.link.about': 'О нас',
    'footer.link.menu': 'Меню',
    'footer.link.reserve': 'Забронировать',
    'footer.link.faq': 'Помощь/FAQ',
    'footer.link.press': 'Пресса',
    'footer.link.careers': 'Карьера',
    'footer.link.contact': 'Контакты',
    'footer.link.gallery': 'Галерея',
    'footer.address': 'Мирабад 39, Ташкент, Узбекистан',
    'footer.rights': '© 2025 Cafe Cocochou. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия и положения',
    'footer.hours': 'Открыты ежедневно: 9:00 - 22:00',
  },
  
  ko: {
    // Header & Navigation
    'header.phone': '+998 90 123 45 67',
    'header.signIn': '로그인',
    'header.signUp': '회원가입',
    'navigation.home': '홈',
    'navigation.menu': '메뉴',
    'navigation.about': '소개',
    'navigation.reserve': '예약하기',
    'navigation.gallery': '갤러리',
    'navigation.documentation': '문서',
    
    // Hero Section
    'hero.title': '완벽한 커피와 디저트 파라다이스',
    'hero.subtitle': '서울과 타슈켄트가 만나는 곳. 아티산 커피, 수제 케이크, 그리고 천국 같은 디저트가 아늑한 카페 분위기에서.',
    'hero.button.menu': '메뉴 보기',
    'hero.button.reserve': '예약하기',
    'hero.badge': '50+ 아티산 케이크와 프리미엄 커피',
    
    // About Us
    'about.badge': '소개',
    'about.title': '커피 꿈이 현실이 되는 곳',
    'about.text1': '탁월한 커피와 정교한 디저트에 대한 열정에서 탄생한 Cafe Cocochou는 타슈켄트에 한국 카페 문화의 예술을 가져옵니다. 우리는 커피가 단순한 음료가 아니라 경험이라고 믿습니다. 완벽한 아침 의식. 수제 케이크와 함께하는 달콤한 즐거움. 우리 시그니처 디저트와 함께하는 순수한 행복의 순간.',
    'about.text2': '우리의 전문 분야는 프리미엄 커피 블렌드와 아티산 디저트입니다. 진한 에스프레소부터 섬세한 말차 케이크까지, 전통적인 한국 빙수부터 유럽 스타일 페이스트리까지—모든 창작물은 정밀하게 제작되고 열정을 담아 제공됩니다. Cocochou에 들어오시면 훌륭한 커피 이상의 것을 발견하실 겁니다. 커피 애호가와 디저트 애호가를 위해 설계된 성역을 발견하실 것입니다.',
    'about.button': '더 알아보기',
    
    // Features
    'features.badge': '우리를 선택하는 이유',
    'features.title': '커피와 디저트의 완벽함을 경험하세요',
    'features.1.title': '프리미엄 커피 선택',
    'features.1.subtitle': '전 세계에서 전문적으로 로스팅된 원두. 싱글 오리진부터 시그니처 블렌드까지, 모든 한 잔이 완벽함입니다.',
    'features.2.title': '아티산 디저트 장인정신',
    'features.2.subtitle': '수제 케이크, 페이스트리, 한국 스타일 디저트—매일 프리미엄 재료로 신선하게 만듭니다.',
    'features.3.title': '아늑한 카페 분위기',
    'features.3.subtitle': '현대적인 한국 스타일 인테리어. 완벽한 조명, 편안한 좌석, 그리고 이상적인 커피 경험을 위한 분위기 음악.',
    'features.4.title': '모든 순간에 완벽',
    'features.4.subtitle': '아침 커피 의식, 오후 티타임, 또는 저녁 디저트 데이트—우리 카페는 언제든 환영합니다.',
    
    // Menu/Gallery
    'menu.badge': '메뉴',
    'menu.title': '우리의 커피와 디저트 컬렉션 탐색',
    'menu.subtitle': '프리미엄 커피 블렌드부터 아티산 케이크와 한국 스타일 디저트까지, 모든 창작물은 열정과 최고의 재료로 만들어집니다.',
    'menu.button.more': '전체 메뉴 보기',
    'menu.button.learn': '더 알아보기',
    'menu.button.order': '주문하기',
    'menu.popup.title': '전체 메뉴',
    'menu.table.dish': '요리',
    'menu.table.description': '설명',
    'menu.table.price': '가격',
    
    // Menu Categories
    'menu.category.coffee': '커피',
    'menu.category.bakery': '베이커리',
    'menu.category.dessert': '디저트',
    'menu.category.poke': '포케 볼',
    'menu.category.sandwich': '샌드위치',
    'menu.category.pasta': '파스타',
    'menu.category.bingsu': '빙수',
    'menu.category.beer': '맥주',
    
    // Coffee
    'menu.coffee.americano': '뜨거운 물과 클래식 에스프레소',
    'menu.coffee.latte': '스팀밀크와 부드러운 에스프레소',
    'menu.coffee.cappuccino': '동일한 비율의 스팀밀크와 폼이 있는 에스프레소',
    'menu.coffee.dalgona': '뜨겁거나 차갑게 서빙되는 휘핑 커피 마법',
    
    // Bakery
    'menu.bakery.croissant': '층층이 쌓인, 황금빛 껍질, 순수한 맛',
    'menu.bakery.cinnamon': '크림치즈 프로스팅이 있는 부드럽고 달콤한',
    
    // Sandwich
    'menu.sandwich.bulgogi': '신선한 채소와 함께하는 한국식 소고기',
    'menu.sandwich.chicken': '신선한 그린과 함께하는 바삭한 치킨 텐더',
    'menu.sandwich.ham': '신선한 당근과 함께하는 클래식 햄 앤 치즈',
    
    // Pasta
    'menu.pasta.bulgogi': '한국식 소고기가 들어간 크림 파스타',
    'menu.pasta.shrimp': '크림 토마토 소스에 촉촉한 새우가 들어간 정교한 파스타',
    
    // Poke Bowl
    'menu.poke.bulgogi': '쌀과 신선한 채소와 함께하는 한국식 구운 소고기',
    'menu.poke.chicken': '간장에 절인 닭 허벅지와 쌀 그릇',
    
    // Bingsu
    'menu.bingsu.matcha': '말차, 팥, 모치가 들어간 한국식 빙수',
    'menu.bingsu.strawberry': '신선한 딸기로 장식된 한국식 빙수',
    
    // Dessert
    'menu.dessert.cheesecake': '신선한 베리로 장식된 크림, 꿈같은',
    'menu.dessert.tiramisu': '에스프레소에 절인 클래식 이탈리안 레이어',
    
    // Beer
    'menu.beer.draft': '차갑고 바삭한, 어떤 식사와도 완벽한',
    
    // Gallery
    'gallery.badge': '갤러리',
    'gallery.title': '우리의 커피와 디저트 예술 엿보기',
    'gallery.subtitle': '우리의 커피 추출과 디저트 제작 과정을 보여주는 무대 뒤 순간들',
    'gallery.button.view': '모든 사진 보기',
    'gallery.button.learn': '더 알아보기',
    'gallery.button.back': '홈으로 돌아가기',
    'gallery.popup.title': '전체 갤러리',
    'gallery.table.dish': '요리',
    'gallery.table.description': '설명',
    'gallery.table.price': '가격',
    
    // Chefs/Team
    'team.badge': '팀',
    'team.title': 'Cocochou를 만드는 사람들',
    'team.chef.senior': '수석 셰프',
    'team.chef.junior': '파티시에',
    'team.barista': '수석 바리스타',
    
    // Newsletter
    'newsletter.badge': '뉴스레터',
    'newsletter.title': '뉴스레터 구독',
    'newsletter.subtitle': '특별 요리와 이벤트에 대한 최신 소식 받기',
    'newsletter.placeholder': 'your.email@example.com',
    'newsletter.button': '구독하기',
    
    // Reservation Form
    'reservation.badge': '예약',
    'reservation.title': '테이블 예약',
    'reservation.fullname': '성명',
    'reservation.email': '이메일 주소',
    'reservation.phone': '전화번호',
    'reservation.outlet': '위치',
    'reservation.outlet.placeholder': '위치 선택',
    'reservation.outlet.tashkent': '타슈켄트 - 본점',
    'reservation.time': '시간',
    'reservation.people': '인원수',
    'reservation.message': '특별 요청사항',
    'reservation.message.placeholder': '식이 제한이나 특별한 경우가 있나요?',
    'reservation.submit': '예약하기',
    'reservation.success': '감사합니다! 테이블이 예약되었습니다. 곧 뵙겠습니다!',
    
    // Footer
    'footer.slogan': '모든 한 잔의 커피와 모든 한 입의 디저트가 천국처럼 느껴지는 곳.',
    'footer.description': 'Cafe Cocochou는 프리미엄 커피, 아티산 디저트, 그리고 열정으로 만든 아늑한 분위기와 함께 타슈켄트에 한국 카페 문화를 가져옵니다.',
    'footer.section.company': '회사',
    'footer.section.support': '지원',
    'footer.link.home': '홈',
    'footer.link.about': '소개',
    'footer.link.menu': '메뉴',
    'footer.link.reserve': '예약',
    'footer.link.faq': '도움말/FAQ',
    'footer.link.press': '언론',
    'footer.link.careers': '채용',
    'footer.link.contact': '연락처',
    'footer.link.gallery': '갤러리',
    'footer.address': '미라바드 39, 타슈켄트, 우즈베키스탄',
    'footer.rights': '© 2025 Cafe Cocochou. All Rights Reserved.',
    'footer.privacy': '개인정보 보호정책',
    'footer.terms': '이용약관',
    'footer.hours': '매일 운영: 9:00 - 22:00',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isClient, setIsClient] = useState(false)

  // Client-side'da ekanligini tekshirish
  useEffect(() => {
    setIsClient(true)
    
    // LocalStorage'dan til o'qish
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'uz', 'ru', 'ko'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Til o'zgarganida LocalStorage'ga saqlash
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (isClient) {
      localStorage.setItem('language', lang)
    }
  }

  // Tarjima funksiyasi
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
