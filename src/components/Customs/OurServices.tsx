'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { TitleText } from '@/components/Basic/CustomText'
import { BackgroundGradient } from '../ui/background-gradient'
import { MainService } from '@/services/business/ServiceRegistry'
import Link from 'next/link'

export default function OurServices({ services }: { services: MainService[] }) {
  return (
    <div id="services" className="w-11/12 lg:w-4/5 mx-auto my-20">
      <TitleText title={<>Transform Your Business</>} textStyles="text-center" />
      <div className="w-full flex items-center text-center justify-center">
        <h2 className="exterior text-lg md:text-4xl mb-4 text-center dark:text-white max-w-4xl">
          Discover Our Comprehensive Suite of Services and Tools to Elevate Your Business
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-4/5 mx-auto py-10">
        {(services || []).map((service, i) => (
          <BackgroundGradient
            key={i}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full flex flex-col"
          >
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
              {service.title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
              {service.description}
            </p>
            
            <Link
              href={`/services/${service.slug}`}
              className="inline-block rounded-xl px-6 py-3 text-white bg-black dark:bg-zinc-800 mt-auto text-xs font-bold text-center hover:opacity-90 transition"
            >
              Learn More
            </Link>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  )
}
