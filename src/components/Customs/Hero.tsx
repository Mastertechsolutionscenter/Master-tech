// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

// src/app/page.tsx
'use client'

import React, { useRef } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

export default function CustomHero() {
  const router = useRouter()
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    router.push('/contact')
  }

  const quoteMail = () => {
    router.push('/contact')
  }

  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">

      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-[#A67C00] to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-[#e9af01] to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#A67C00] to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-[hsl(45,100%,33%)]">
          {['Grow', 'Your', 'Business', 'Faster', 'with', 'Smart', 'Digital', 'Solutions'].map(
            (word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: 'easeInOut',
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg text-neutral-600 dark:text-neutral-400"
        >
          Custom software, secure systems and conversion-focused digital tools that improve
          business revenue and operational efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={quoteMail}
            className="w-60 rounded-lg bg-[#A67C00] px-6 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#8B6900]"
          >
            Get A Quote
          </button>

          <button
            onClick={scrollToContact}
            className="w-60 rounded-lg bg-black px-6 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <Image
              src="/Hero/hero.png"
              alt="Master Tech Solutions Center Enterprise Dashboard Preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={720}
              width={1280}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}