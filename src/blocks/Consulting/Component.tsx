'use client'

import React from 'react'
import Image from 'next/image'
import type { ConsultingBlock as ConsultingProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const ConsultingBlock: React.FC<ConsultingProps> = ({ title, subtitle, description, image, links }) => {
  return (
    <section
      id="consulting"
      className="bg-black text-white py-16 px-8 md:px-16 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Left Image */}
      <div className="flex-1">
        {image && typeof image !== 'string' && (
          <Image
            src={image.url || ''}
            alt={image.alt || title}
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-cover"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <h2 className="text-[#A67C00] text-3xl md:text-5xl font-bold leading-snug">
          {title}
        </h2>
        <p className="text-lg text-gray-300 font-medium">{subtitle}</p>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
          {description}
        </p>

        {(links || []).map(({ link }, i) => {
          return (
            <div key={i} className="mt-6 w-fit">
               <CMSLink 
                {...link} 
                className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
               />
            </div>
          )
        })}
      </div>
    </section>
  )
}
