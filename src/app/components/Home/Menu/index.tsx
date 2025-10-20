'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/contexts/LanguageContext'

interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
}

interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  image?: string
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee')
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  const menuCategories: MenuCategory[] = [
    {
      id: 'coffee',
      name: t('menu.category.coffee'),
      items: [
        {
          id: 'double_espresso',
          name: 'Double Espresso',
          price: 30000,
          description: t('menu.coffee.double_espresso'),
        },
        {
          id: 'americano',
          name: 'Americano',
          price: 30000,
          description: t('menu.coffee.americano'),
        },
        {
          id: 'cafe_latte',
          name: 'Cafe Latte',
          price: 35000,
          description: t('menu.coffee.cafe_latte'),
        },
        {
          id: 'cappuccino',
          name: 'Cappuccino',
          price: 35000,
          description: t('menu.coffee.cappuccino'),
        },
        {
          id: 'vanilla_latte',
          name: 'Vanilla Latte',
          price: 40000,
          description: t('menu.coffee.vanilla_latte'),
        },
        {
          id: 'caramel_macchiato',
          name: 'Caramel Macchiato',
          price: 42000,
          description: t('menu.coffee.caramel_macchiato'),
        },
        {
          id: 'cocochou_cream_latte',
          name: 'Cocochou Cream Latte',
          price: 40000,
          description: t('menu.coffee.cocochou_cream_latte'),
        },
        {
          id: 'cafe_mocha',
          name: 'Cafe Mocha',
          price: 40000,
          description: t('menu.coffee.cafe_mocha'),
        },
        {
          id: 'orange_coffee',
          name: 'Orange Coffee',
          price: 40000,
          description: t('menu.coffee.orange_coffee'),
        }
      ]
    },
    {
      id: 'bakery',
      name: t('menu.category.bakery'),
      items: [
        {
          id: 'butter_croissant',
          name: 'Butter Croissant',
          price: 18000,
          description: t('menu.bakery.butter_croissant'),
        },
        {
          id: 'cinnamon_roll',
          name: 'Cinnamon Roll',
          price: 22000,
          description: t('menu.bakery.cinnamon_roll'),
        },
        {
          id: 'chocolate_croissant',
          name: 'Chocolate Croissant',
          price: 25000,
          description: t('menu.bakery.chocolate_croissant'),
        }
      ]
    },
    {
      id: 'dessert',
      name: t('menu.category.dessert'),
      items: [
        {
          id: 'strawberry_cheesecake',
          name: 'Strawberry Cheesecake',
          price: 35000,
          description: t('menu.dessert.strawberry_cheesecake'),
        },
        {
          id: 'tiramisu',
          name: 'Tiramisu',
          price: 38000,
          description: t('menu.dessert.tiramisu'),
        },
        {
          id: 'matcha_cake',
          name: 'Matcha Cake',
          price: 32000,
          description: t('menu.dessert.matcha_cake'),
        },
        {
          id: 'chocolate_mousse',
          name: 'Chocolate Mousse',
          price: 30000,
          description: t('menu.dessert.chocolate_mousse'),
        }
      ]
    },
    {
      id: 'poke',
      name: t('menu.category.poke'),
      items: [
        {
          id: 'grilled_bulgogi_poke',
          name: 'Grilled Bulgogi',
          price: 140000,
          description: t('menu.poke.grilled_bulgogi'),
        },
        {
          id: 'soy_chicken_thigh_poke',
          name: 'Soy Chicken Thigh',
          price: 130000,
          description: t('menu.poke.soy_chicken_thigh'),
        },
        {
          id: 'garlic_shrimp_poke',
          name: 'Garlic Shrimp',
          price: 160000,
          description: t('menu.poke.garlic_shrimp'),
        },
        {
          id: 'teriyaki_mushroom_poke',
          name: 'Teriyaki Mushroom',
          price: 100000,
          description: t('menu.poke.teriyaki_mushroom'),
        },
        {
          id: 'chicken_tender_poke',
          name: 'Chicken Tender',
          price: 120000,
          description: t('menu.poke.chicken_tender'),
        },
        {
          id: 'garden_salad_poke',
          name: 'Garden Salad',
          price: 70000,
          description: t('menu.poke.garden_salad'),
        }
      ]
    },
    {
      id: 'sandwich',
      name: t('menu.category.sandwich'),
      items: [
        {
          id: 'grilled_cheese_sandwich',
          name: 'Grilled Cheese',
          price: 90000,
          description: t('menu.sandwich.grilled_cheese'),
        },
        {
          id: 'grilled_mushroom_sandwich',
          name: 'Grilled Mushroom',
          price: 100000,
          description: t('menu.sandwich.grilled_mushroom'),
        },
        {
          id: 'grilled_bulgogi_sandwich',
          name: 'Grilled Bulgogi',
          price: 120000,
          description: t('menu.sandwich.grilled_bulgogi'),
        },
        {
          id: 'chicken_wrap_sandwich',
          name: 'Chicken Wrap',
          price: 90000,
          description: t('menu.sandwich.chicken_wrap'),
        },
        {
          id: 'bulgogi_wrap_sandwich',
          name: 'Bulgogi Wrap',
          price: 100000,
          description: t('menu.sandwich.bulgogi_wrap'),
        },
        {
          id: 'ham_cheese_carrot_sandwich',
          name: 'Ham & Cheese & Carrot',
          price: 65000,
          description: t('menu.sandwich.ham_cheese_carrot'),
        },
        {
          id: 'chicken_tender_sandwich',
          name: 'Chicken Tender',
          price: 70000,
          description: t('menu.sandwich.chicken_tender'),
        },
        {
          id: 'bulgogi_sandwich',
          name: 'Bulgogi',
          price: 70000,
          description: t('menu.sandwich.bulgogi'),
        },
        {
          id: 'egg_mashed_potato_sandwich',
          name: 'Egg & Mashed Potato',
          price: 60000,
          description: t('menu.sandwich.egg_mashed_potato'),
        }
      ]
    },
    {
      id: 'pasta',
      name: t('menu.category.pasta'),
      items: [
        {
          id: 'arabiata_pasta',
          name: 'Arabiata Pasta',
          price: 85000,
          description: t('menu.pasta.arabiata'),
        },
        {
          id: 'bacon_cream_pasta',
          name: 'Bacon Cream Pasta',
          price: 100000,
          description: t('menu.pasta.bacon_cream'),
        },
        {
          id: 'shrimp_aglio_e_olio_pasta',
          name: 'Shrimp Aglio E Olio',
          price: 125000,
          description: t('menu.pasta.shrimp_aglio_e_olio'),
        },
        {
          id: 'bulgogi_cream_pasta',
          name: 'Bulgogi Cream Pasta',
          price: 130000,
          description: t('menu.pasta.bulgogi_cream'),
        },
        {
          id: 'shrimp_rose_pasta',
          name: 'Shrimp Rose Pasta',
          price: 150000,
          description: t('menu.pasta.shrimp_rose'),
        }
      ]
    },
    {
      id: 'bingsu',
      name: t('menu.category.bingsu'),
      items: [
        {
          id: 'matcha_bingsu',
          name: 'Matcha Bingsu',
          price: 40000,
          description: t('menu.bingsu.matcha'),
        },
        {
          id: 'strawberry_bingsu',
          name: 'Strawberry Bingsu',
          price: 45000,
          description: t('menu.bingsu.strawberry'),
        },
        {
          id: 'mango_bingsu',
          name: 'Mango Bingsu',
          price: 45000,
          description: t('menu.bingsu.mango'),
        },
        {
          id: 'chocolate_bingsu',
          name: 'Chocolate Bingsu',
          price: 42000,
          description: t('menu.bingsu.chocolate'),
        }
      ]
    },
    {
      id: 'beer',
      name: t('menu.category.beer'),
      items: [
        {
          id: 'sarbast_beer',
          name: 'Sarbast 0.5L',
          price: 30000,
          description: t('menu.beer.sarbast'),
        },
        {
          id: 'zatecky_gus_beer',
          name: 'Zatecky Gus 0.5L',
          price: 35000,
          description: t('menu.beer.zatecky_gus'),
        },
        {
          id: 'kombu_cocktail',
          name: 'Kombu Cocktail',
          price: 60000,
          description: t('menu.beer.kombu_cocktail'),
        }
      ]
    }
  ]

  useEffect(() => {
    setLoading(false)
  }, [])

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory)

  return (
    <section id='menu' className='scroll-mt-20 py-16'>
      <div className='container'>
        <div className='text-center mb-12'>
          <p className='text-amber-600 text-lg font-normal mb-3 tracking-widest uppercase'>
            {t('menu.badge')}
          </p>
          <h2 className='text-4xl font-bold mb-4 text-amber-900'>{t('menu.title')}</h2>
          <p className='text-amber-700 max-w-2xl mx-auto'>
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-2 mb-12'>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
              }`}>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items List - Two Column Layout */}
        {loading ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-4'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className='flex justify-between items-center py-2'>
                    <div className='bg-gray-200 animate-pulse h-6 w-48 rounded'></div>
                    <div className='bg-gray-200 animate-pulse h-6 w-12 rounded'></div>
                  </div>
                ))}
              </div>
            </div>
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-4'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className='flex justify-between items-center py-2'>
                    <div className='bg-gray-200 animate-pulse h-6 w-48 rounded'></div>
                    <div className='bg-gray-200 animate-pulse h-6 w-12 rounded'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {/* Left Column */}
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-3'>
                {activeMenu?.items.slice(0, Math.ceil(activeMenu.items.length / 2)).map((item) => (
                  <div key={item.id} className='flex justify-between items-center py-2 border-b border-amber-200 last:border-b-0'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3'>
                        <h3 className='text-lg font-bold text-amber-900'>{item.name}</h3>
                      </div>
                      <p className='text-sm text-amber-700 mt-1'>
                        {item.description}
                      </p>
                    </div>
                    <div className='text-right'>
                      <span className='text-xl font-bold text-amber-900'>
                        {item.price.toLocaleString()}.0
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className='bg-amber-50 rounded-2xl p-8'>
              <div className='space-y-3'>
                {activeMenu?.items.slice(Math.ceil(activeMenu.items.length / 2)).map((item) => (
                  <div key={item.id} className='flex justify-between items-center py-2 border-b border-amber-200 last:border-b-0'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3'>
                        <h3 className='text-lg font-bold text-amber-900'>{item.name}</h3>
                      </div>
                      <p className='text-sm text-amber-700 mt-1'>
                        {item.description}
                      </p>
                    </div>
                    <div className='text-right'>
                      <span className='text-xl font-bold text-amber-900'>
                        {item.price.toLocaleString()}.0
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
