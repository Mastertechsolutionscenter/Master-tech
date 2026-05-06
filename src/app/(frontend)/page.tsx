import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export const metadata: Metadata = {
  title: 'Master Tech Solutions Center | Custom Software & E-commerce Experts Kenya',
  description: 'Nairobi’s leading software company specializing in enterprise SaaS, SEO-optimized e-commerce with M-Pesa integration, and secure UX-first digital solutions.',
  keywords: [
    'software development company Kenya',
    'best web designers Nairobi',
    'ecommerce website developers Kenya',
    'M-Pesa payment integration service',
    'enterprise SaaS solutions Kenya',
    'custom ERP systems Nairobi',
    'inventory management software Kenya',
    'mobile app development Nairobi',
    'SEO services for tech companies Kenya',
    'cybersecurity consulting Nairobi',
    'digital transformation agency Kenya',
    'affordable software development Nairobi',
    'SME digital solutions Kenya',
    'POS systems Kenya',
    'cloud computing services Nairobi'
  ],
  openGraph: {
    title: 'Master Tech Solutions Center – Transforming Kenyan Businesses Digitally',
    description: 'We build secure, scalable e-commerce and enterprise software that drives revenue. Get custom digital tools tailored for the African market.',
    url: 'https://mastertechsolutionscenter.com',
    siteName: 'Master Tech Solutions Center',
    images: [
      {
        url: '/Hero/HeroPics/6.webp',
        width: 1200,
        height: 630,
        alt: 'Master Tech Solutions Center: Custom Software and E-commerce Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function Page() {
  let layout: any[] = []

  try {
    const payload = await getPayload({ config })
    const homePages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
    })

    const homePage = homePages.docs[0]
    layout = homePage?.layout || []
  } catch (error) {
    console.error('Error fetching home page data:', error)
  }

  return (
    <div className="pb-24">
      {layout.length > 0 ? (
        <RenderBlocks blocks={layout} />
      ) : (
        <div className="container pt-32 text-center">
          <h1>Welcome to Master Tech Solutions Center</h1>
          <p>Please log in to the admin panel to seed your content.</p>
        </div>
      )}
    </div>
  )
}
