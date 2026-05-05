'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { TitleText } from '@/components/Basic/CustomText'
import { BackgroundGradient } from '../ui/background-gradient'

export default function DigitalServices() {
  return (
    <section id='digital' className="w-11/12 lg:w-4/5 mx-auto my-20">
      <TitleText title={<>Branding And Market Identity</>} textStyles="text-center" />
      <div className="w-full flex items-center text-center justify-center">
        <h2 className="exterior text-lg md:text-4xl mb-4 text-center dark:text-white max-w-4xl">
          Elevate Your Business, Stand Out from the Crowd. Get The Best Brand that represents who
          you are.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-4/5 mx-auto py-10">
        {items.map((item, i) => (
          <BackgroundGradient
            key={i}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
            <button className="rounded-xl pl-4 pr-1 py-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Learn More</span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)
const items = [
  {
    title: 'Brand Identity & Visual Design',
    description:
      'We craft stunning brand identities that resonate and build trust. From logos, typography, and color palettes to packaging and print-ready assets, we ensure your brand communicates professionalism and captivates customers across all channels.',
    header: <Skeleton />,
  },

  {
    title: 'Creative & Campaign Design',
    description:
      'Engage your audience with powerful visuals and marketing collateral. Posters, banners, product pages, landing pages, and ad creatives are all designed to convert, reinforcing your brand story and driving business growth.',
    header: <Skeleton />,
  },

  {
    title: 'Content Strategy & Production',
    description:
      'From blogs to social media posts and video content, we create compelling stories that attract, engage, and retain your audience. Every piece is optimized for SEO and tailored to your brand voice to boost visibility and credibility.',
    header: <Skeleton />,
  },

  {
    title: 'Social Media Management & Growth',
    description:
      'Manage, grow, and monetize your social presence with data-driven campaigns across Instagram, X (Twitter), TikTok, Facebook, and LinkedIn. We handle content scheduling, community engagement, influencer partnerships, and paid promotions to turn followers into loyal customers.',
    header: <Skeleton />,
  },

  {
    title: 'Digital Advertising & Lead Generation',
    description:
      'Maximize ROI with precision-targeted ads on search engines and social media platforms. Paid campaigns, retargeting, and conversion optimization ensure your brand reaches the right audience and generates qualified leads consistently.',
    header: <Skeleton />,
  },

  {
    title: 'SEO & Performance Marketing',
    description:
      'Boost organic traffic, improve search rankings, and convert visitors into customers. We combine technical SEO, on-page optimization, analytics, and local SEO strategies to deliver measurable results and long-term growth.',
    header: <Skeleton />,
  },
]
