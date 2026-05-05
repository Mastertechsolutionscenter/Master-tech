import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import Script from 'next/script'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import  Footer  from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { WhatsAppButton } from '@/components/WhatsApp'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Master Tech Solutions Center',
  url: 'https://mastertechsolutionscenter.com',
  logo: 'https://mastertechsolutionscenter.com/favicon.svg',
  description: 'Kenya’s premium provider of enterprise SaaS, SEO-optimized e-commerce, UX-first websites, and secure platforms.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lunga Lunga Square, Lunga Lunga Road, Industrial Area',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    postalCode: '00100',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.307451,
    longitude: 36.872424,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://x.com/MasterTech333P',
    'https://www.instagram.com/master_tech_solution_center_',
    'https://www.linkedin.com/company/109129013/admin/dashboard',
    'https://www.tiktok.com/@master.tech.solut2',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+254723230203',
      contactType: 'customer service',
      areaServed: 'KE',
      availableLanguage: ['English', 'Swahili'],
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software Development and Digital Solutions',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Master Tech Solutions Center',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development & ERP Systems',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Solutions with M-Pesa Integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing, SEO & Social Media Growth',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding & UI/UX Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cybersecurity, Cloud Hosting & IT Infrastructure',
        },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://mastertechsolutionscenter.com',
    },
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://mastertechsolutionscenter.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mastertechsolutionscenter.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('dark', GeistSans.variable, GeistMono.variable)}
    >
      <head>
           <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZERPE270KC');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZERPE270KC"
          strategy="afterInteractive"
        />
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgSchema)}
        </Script>

        <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(serviceSchema)}
        </Script>

        <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(breadcrumbSchema)}
        </Script>

        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  alternates: {
    canonical: '/',
  },
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@MasterTech333P',
  },
}
