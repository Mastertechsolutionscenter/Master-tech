import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getServicesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://mastertechsolutionscenter.com'

    const dateFallback = new Date().toISOString()

    // 1. Fetch Service Categories
    const servicesResults = await payload.find({
      collection: 'services',
      overrideAccess: false,
      depth: 0,
      limit: 100,
      pagination: false,
      select: { slug: true, updatedAt: true },
    })

    // 2. Fetch Sub-Services
    const subServicesResults = await payload.find({
      collection: 'sub-services',
      overrideAccess: false,
      depth: 1, 
      limit: 500,
      pagination: false,
      select: { slug: true, updatedAt: true, service: true },
    })

    const servicesSitemap = servicesResults.docs.map((service) => ({
      loc: `${SITE_URL}/services/${service.slug}`,
      lastmod: service.updatedAt || dateFallback,
    }))

    const subServicesSitemap = subServicesResults.docs
      .filter((sub) => sub?.slug)
      .map((sub: any) => {
        const categorySlug = sub.service?.slug || 'general'
        return {
          loc: `${SITE_URL}/services/${categorySlug}/${sub.slug}`,
          lastmod: sub.updatedAt || dateFallback,
        }
      })

    return [...servicesSitemap, ...subServicesSitemap]
  },
  ['services-sitemap'],
  {
    tags: ['services-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getServicesSitemap()

  return getServerSideSitemap(sitemap)
}
