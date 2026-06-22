'use client'

import { useEffect, useState } from 'react'

const services = [
  'Web Development',
  'Digital Marketing',
  'SEO',
  'Graphic Designing',
  'App Development',
]

export function TypingServices() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    // Respect reduced-motion: show a single service, no animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(services[0])
      return
    }

    const current = services[wordIndex]

    // Full word typed — hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1400)
      return () => clearTimeout(t)
    }

    // Fully deleted — move to the next service.
    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % services.length)
      return
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        )
      },
      deleting ? 45 : 85
    )
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex])

  return (
    <span
      aria-hidden="true"
      className="flex items-center text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground leading-none h-[12px]"
    >
      {text}
      <span
        className="ml-[2px] inline-block w-[1px] h-[10px] bg-muted-foreground"
        style={{ animation: 'caret-blink 1s steps(1) infinite' }}
      />
    </span>
  )
}
