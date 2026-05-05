import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export interface SubService {
  id: string
  slug: string
  title: string
  description: string
  kenyanContext?: string
}

export interface MainService {
  id: string
  slug: string
  title: string
  description: string
  kenyanContext?: string
  subServices: SubService[]
}

export const ServiceRegistry = {
  getAll: async (): Promise<any[]> => {
    try {
      const payload = await getPayload({ config: configPromise })
      const { docs } = await payload.find({
        collection: 'services',
        sort: 'createdAt',
        depth: 2,
      })
      return docs
    } catch (error) {
      console.error('Failed to fetch services from Payload:', error)
      return []
    }
  },

  getBySlug: async (slug: string): Promise<any | undefined> => {
    try {
      const payload = await getPayload({ config: configPromise })
      const { docs } = await payload.find({
        collection: 'services',
        depth: 2,
        where: {
          slug: {
            equals: slug.toLowerCase(),
          },
        },
      })

      if (docs && docs.length > 0) {
        return docs[0]
      }
    } catch (error) {
      console.error('Failed to fetch service by slug from Payload:', error)
    }

    return undefined
  },

  getSubServiceBySlug: async (slug: string): Promise<any | undefined> => {
    try {
      const payload = await getPayload({ config: configPromise })
      const { docs } = await payload.find({
        collection: 'sub-services',
        depth: 2,
        where: {
          slug: {
            equals: slug.toLowerCase(),
          },
        },
      })

      if (docs && docs.length > 0) {
        return docs[0]
      }
    } catch (error) {
      console.error('Failed to fetch sub-service by slug from Payload:', error)
    }

    return undefined
  },
}
