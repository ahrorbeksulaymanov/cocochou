'use client'

import React, { useEffect, useRef } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number // positive moves slower than scroll
  className?: string
}

export default function Parallax({ children, speed = 0.3, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      // Only apply when element is in viewport range
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const offset = (viewportHeight - rect.top) * speed * 0.1
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}


