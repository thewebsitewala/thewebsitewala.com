'use client'

import { useEffect, useState } from 'react'

// Similar-length verbs so the line width stays steady as they swap.
const words = ['Ignore', 'Forget', 'Resist', 'Replace']

export function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="inline-block align-bottom">
      <span
        key={index}
        className="inline-block italic"
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          animation: 'word-swap 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {words[index]}
      </span>
    </span>
  )
}
