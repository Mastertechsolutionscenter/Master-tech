import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { ServiceRegistry } from '@/services/business/ServiceRegistry'
import SubServicePageClient from './SubServicePageClient'

interface PageProps {
  params: Promise<{
    categorySlug: string
    subServiceSlug: string
  }>
}

export default async function SubServicePage({ params }: PageProps) {
  const { categorySlug, subServiceSlug } = await params
  const payload = await getPayload({ config: configPromise })

  // 1. Try to fetch from Payload CMS
  const { docs: subServices } = await payload.find({
    collection: 'sub-services',
    where: {
      slug: { equals: subServiceSlug },
    },
  })

  let subService: any = subServices?.[0]

  if (!subService) notFound()

  return <SubServicePageClient subService={subService} categorySlug={categorySlug} />
}
