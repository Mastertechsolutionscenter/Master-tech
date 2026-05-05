'use client'

import React from 'react'
import type { ServicesGridBlock as ServicesGridProps, SubService } from '@/payload-types'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Link from 'next/link'

export const ServicesGridBlock: React.FC<ServicesGridProps> = ({ title, subtitle, service }) => {
  // Extract sub-services and category slug from the related service object
  const subServices = typeof service === 'object' && service !== null 
    ? (service as any).subServices as SubService[] 
    : []
  
  const categorySlug = typeof service === 'object' && service !== null
    ? (service as any).slug
    : ''

  return (
    <section id='services-grid' className="w-11/12 lg:w-4/5 mx-auto my-20">
      <div className="w-full flex flex-col items-center text-center justify-center mb-10">
        <h2 className="text-[#A67C00] text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {subServices && subServices.length > 0 ? (
          subServices.map((sub, i) => (
            <div key={i} className="relative h-full">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={60}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <BackgroundGradient
                className="rounded-[22px] h-full p-4 sm:p-10 bg-[#A67C00] border border-[#8B6800] flex flex-col relative z-10 shadow-lg"
              >
                <p className="text-xl font-bold text-white mt-4 mb-2">
                  {sub.title}
                </p>

                <p className="text-sm text-white/90 flex-grow">
                  {sub.description}
                </p>
                
                <Link 
                  href={`/services/${categorySlug}/${sub.slug}`}
                  className="inline-block rounded-xl px-4 py-2 text-[#A67C00] bg-white mt-6 text-xs font-bold w-fit hover:bg-neutral-100 transition-colors text-center shadow-md"
                >
                  Learn More
                </Link>
              </BackgroundGradient>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No sub-services found.</p>
        )}
      </div>
    </section>
  )
}
