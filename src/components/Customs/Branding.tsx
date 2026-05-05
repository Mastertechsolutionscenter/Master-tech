'use client'

import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { TitleText } from '@/components/Basic/CustomText'
import { FaArrowTrendUp } from 'react-icons/fa6'
import Image from 'next/image'

export default function Branding() {
  return (
    <section id="branding" className="w-11/12 lg:w-4/5 mx-auto my-20">
      <TitleText title="Marketing & Growth" textStyles="text-center" />

      <div className="w-full flex items-center justify-center text-center">
        <h2 className="exterior text-lg md:text-4xl mb-4 dark:text-white max-w-4xl">
          Get the best marketing strategies, digital campaigns, and brand development to build
          lasting momentum, increase your reach, and accelerate business growth.
        </h2>
      </div>

      <div className="my-5 w-full">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 1 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const Header = ({ image }: { image?: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
    {image && (
      <Image
        src={image}
        alt="Master Tech marketing solution"
        fill
        className="object-cover z-0 rounded-xl"
      />
    )}
  </div>
)

const items = [
  {
    title: 'Graphic Design & Visual Identity',
    description:
      'Logo and brand guideline development, stationery, signage, packaging, and printable collateral, branded presentation templates and proposals.',
    header: <div className="h-full w-full bg-neutral-100 dark:bg-zinc-900 flex items-center justify-center font-bold text-[#A67C00]">Branding Asset</div>,
    icon: <FaArrowTrendUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Marketing Materials & Campaign Assets',
    description:
      'Brochures, flyers, banners, digital ad creatives, email templates and landing page design.',
    header: <div className="h-full w-full bg-neutral-100 dark:bg-zinc-900 flex items-center justify-center font-bold text-[#A67C00]">Branding Asset</div>,
    icon: <FaArrowTrendUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Social Media & Content Support',
    description:
      'Social media graphics, post templates, basic content planning, and campaign copy support.',
    header: <div className="h-full w-full bg-neutral-100 dark:bg-zinc-900 flex items-center justify-center font-bold text-[#A67C00]">Branding Asset</div>,
    icon: <FaArrowTrendUp className="h-4 w-4 text-neutral-500" />,
  },
]