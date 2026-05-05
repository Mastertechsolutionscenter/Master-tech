import React from 'react'
// import type { LocalExpertiseBlock as LocalExpertiseProps } from '@/payload-types'
import { Media } from '@/components/Media'

export const LocalExpertiseBlock: React.FC<any> = ({ 
  title, 
  content, 
  secondaryContent, 
  locationLabel, 
  quote, 
  image 
}) => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
          {image && (
            <Media 
              resource={image} 
              className="object-cover w-full h-full"
            />
          )}
          {quote && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl italic">"{quote}"</p>
            </div>
          )}
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">{title}</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {content}
          </p>
          {secondaryContent && (
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {secondaryContent}
            </p>
          )}
          <div className="pt-4">
            <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
              <span className="w-10 h-10 rounded-full bg-[#A67C00]/10 flex items-center justify-center text-[#A67C00]">
                📍
              </span>
              <span>{locationLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
