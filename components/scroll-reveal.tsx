'use client'

import { useEffect } from 'react'

// Watches every [data-animate] element and reveals it once when it scrolls into view.
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('reveal-ready')

    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]')
    )

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
