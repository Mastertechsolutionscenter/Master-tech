import React from 'react'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
// import type { LogoMarqueeBlock as LogoMarqueeProps } from '@/payload-types'

export const LogoMarqueeBlock: React.FC<any> = ({ title, logos }) => {
  const images = logos?.map((l: any) => l.image?.url).filter(Boolean) || []

  if (images.length === 0) return null

  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-black">
      <div className="w-11/12 lg:w-4/5 mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white">
          {title}
        </h2>
      </div>
      <ThreeDMarquee images={images} />
    </section>
  )
}
