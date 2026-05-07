import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { ServiceRegistry } from '@/services/business/ServiceRegistry'
import SubServicePageClient from './SubServicePageClient'

export const revalidate = 10

interface PageProps {
  params: Promise<{
    categorySlug: string
    subServiceSlug: string
  }>
}

export default async function SubServicePage({ params }: PageProps) {
  const { categorySlug, subServiceSlug } = await params
  
  let subService: any = null
  
  try {
    const payload = await getPayload({ config: configPromise })

    // 1. Try to fetch from Payload CMS
    const { docs: subServices } = await payload.find({
      collection: 'sub-services',
      where: {
        slug: { equals: subServiceSlug },
      },
    })

    subService = subServices?.[0]
  } catch (error) {
    console.error(`Error fetching sub-service for slug "${subServiceSlug}":`, error)
  }

  if (!subService) notFound()

  return <SubServicePageClient subService={subService} categorySlug={categorySlug} />
}
