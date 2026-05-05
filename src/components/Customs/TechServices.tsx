'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { TitleText } from '@/components/Basic/CustomText'

export default function TechService() {
  return (
    <section className="'sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
        <TitleText title={<>Digital Transformation & Technology</>} textStyles="text-center" />
        <div className="w-full flex items-center text-center justify-center">
          <h2 className="exterior text-lg md:text-4xl mb-4 text-center dark:text-white max-w-4xl">
            Digitize operations, automate workflows, and leverage data to boost efficiency and
            revenue
          </h2>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
)
const items = [
  {
    title: 'Web Development',
    description:
      'Build fast, responsive, and visually stunning websites that convert visitors into loyal customers. From landing pages to complex platforms, we ensure your online presence stands out.',
    header: <Skeleton />,
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Launch powerful online stores with seamless shopping experiences. Our e-commerce platforms are secure, scalable, and designed to maximize sales and customer satisfaction.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'Custom Software Installation',
    description:
      'Get reliable, tailored software solutions installed and configured for your business needs. From CRMs to internal tools, we ensure seamless integration and efficiency.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'Point of Sale (POS) Systems',
    description:
      'Streamline your sales and operations with smart POS systems. Track inventory, manage sales, and gain valuable insights for smarter business decisions.',
    header: <Skeleton />,
  },
  {
    title: 'Mobile App Development',
    description:
      'Reach customers wherever they are with intuitive iOS and Android apps. We design apps that are fast, secure, and optimized for exceptional user experience.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'Cloud & IT Infrastructure',
    description:
      'Modernize your business with cloud computing, server management, and scalable IT infrastructure. Maximize uptime, security, and efficiency with our expert solutions.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: 'CRM & Sales Management Tools',
    description:
      'Boost your customer relationships and sales efficiency with our tailored CRM solutions. Track leads, automate workflows, and gain actionable insights to grow your business smarter and faster.',
    header: <Skeleton />,
  },
]
