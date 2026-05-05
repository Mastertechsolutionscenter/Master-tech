'use client'

import React from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import type { HeroBlock as HeroBlockProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeroBlock: React.FC<HeroBlockProps> = ({ title, description, image, links }) => {
  const words = title.split(' ')

  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center pt-20">
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
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-[40px] font-bold text-black md:text-[64px] dark:text-[#A67C00]">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.3,
                delay: index * 0.08,
                ease: 'easeInOut',
              }}
              className="mr-2 inline-block"
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-xl py-6 text-center text-lg md:text-xl text-neutral-600 dark:text-neutral-400"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          {(links || []).map(({ link }, i) => (
            <CMSLink 
              key={i} 
              {...link} 
              className={cn(
                "w-60 rounded-xl px-6 py-4 font-bold transition-all hover:-translate-y-1 active:scale-[0.98] text-center",
                i === 0 
                  ? "bg-[#A67C00] text-white hover:bg-[#8B6900] shadow-xl shadow-[#A67C00]/20" 
                  : "bg-black text-white hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100 shadow-xl"
              )}
            />
          ))}
        </motion.div>

        {image && typeof image !== 'string' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="relative z-10 mt-24 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="w-full overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-700">
              <Image
                src={image.url || ''}
                alt={image.alt || title}
                className="aspect-[16/9] h-auto w-full object-cover"
                height={720}
                width={1280}
                priority
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Helper to use cn without importing from lib
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ')
