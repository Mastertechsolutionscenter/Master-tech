'use server'

import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { ServiceRegistry, MainService } from './ServiceRegistry'

export async function getServicesAction(): Promise<MainService[]> {
  return await ServiceRegistry.getAll()
}

export async function getFAQsAction(serviceId?: string) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'faqs',
      where: serviceId 
        ? { 
            services: { 
              contains: serviceId 
            } 
          } 
        : { 
            isGeneral: { 
              equals: true 
            } 
          },
      sort: 'createdAt',
    })

    if (docs && docs.length > 0) {
      return docs.map((doc: any) => ({
        question: doc.question,
        answer: doc.answer,
      }))
    }
  } catch (error) {
    console.error('Failed to fetch FAQs from CMS:', error)
  }

  return null
}

export async function getCaseStudiesAction(limit: number = 4) {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs: caseStudies } = await payload.find({
      collection: 'case-studies',
      sort: '-createdAt',
      limit,
    })

    return caseStudies
  } catch (error) {
    console.error('Failed to fetch Case Studies from CMS:', error)
  }

  return null
}
