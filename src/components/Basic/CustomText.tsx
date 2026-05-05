'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger, inView } from 'motion'

interface TypingTextProps {
  title: string
  textStyles?: string
}

interface TitleTextProps {
  title: React.ReactNode
  textStyles?: string
}

// Typing effect
export const TypingText = ({ title, textStyles }: TypingTextProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const letters = el.querySelectorAll('span')

    animate(
      letters,
      { opacity: [0, 1], y: [10, 0] },
      {
        delay: stagger(0.03),
        duration: 0.4,
        ease: 'easeOut',
      },
    )
  }, [title])

  return (
    <p
      ref={ref}
      className={`text-[#A67C00] font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <span key={index} className="inline-block opacity-0">
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </p>
  )
}

// Title text with fade-in animation
export const TitleText = ({ title, textStyles }: TitleTextProps) => {
  const ref = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    return inView(el, () => {
      animate(el, { opacity: [0, 1], y: [30, 0] }, {
        duration: 0.6,
        ease: 'easeOut',
      })
    })
  }, [])

  return (
    <h2
      ref={ref}
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#A67C00] ${textStyles}`}
    >
      {title}
    </h2>
  )
}