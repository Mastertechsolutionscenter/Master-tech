import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { TitleText } from '@/components/Basic/CustomText'
import { BackgroundGradient } from '@/components/Customs/../ui/background-gradient'
import { ServicesClient } from './ServicesClient'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { getServicesAction } from '@/services/business/actions'

export const revalidate = 10

export const metadata: Metadata = {
  title: 'Digital Solutions & Tech Services Nairobi | Master Tech Solutions',
  description: 'Explore our full suite of professional tech services in Kenya including custom software, cybersecurity, digital marketing, and branding.',
  keywords: [
    'digital solutions Nairobi',
    'it services Kenya',
    'software development services Nairobi',
    'branding agency Kenya',
    'cybersecurity experts Nairobi',
    'cloud infrastructure Kenya'
  ],
}

export default async function ServicesPage() {
  const services = await getServicesAction()

  return (
    <ServicesClient>
      <div className="py-24 bg-white dark:bg-black min-h-screen">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <Breadcrumbs />
          <TitleText title={<>Our Expertise</>} textStyles="text-center" />
          <div className="w-full flex items-center text-center justify-center mb-16">
            <h1 className="exterior text-2xl md:text-5xl font-bold text-center dark:text-white max-w-4xl">
              Comprehensive Digital Solutions for Modern Businesses
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services || []).map((service) => (
              <BackgroundGradient
                key={service.id}
                className="rounded-[22px] p-8 bg-neutral-50 dark:bg-zinc-900 h-full flex flex-col"
              >
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                  {service.description}
                </p>
                
                {service.subServices && service.subServices.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A67C00] mb-3">
                      Key Specialities:
                    </h3>
                    <ul className="space-y-2">
                      {service.subServices.slice(0, 4).map((sub: any, idx) => (
                        <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300 flex items-center group/sub">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A67C00] mr-2" />
                          <Link 
                            href={`/services/${service.slug}/${sub.slug}`}
                            className="hover:text-[#A67C00] transition-colors"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block w-full text-center py-3 px-6 rounded-xl bg-[#A67C00] text-white font-bold hover:bg-[#8B6800] transition mt-auto"
                >
                  Explore Category
                </Link>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </div>
    </ServicesClient>
  )
}
