import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://mastertechsolutionscenter.com'

    const dateFallback = new Date().toISOString()

    // 1. Fetch Pages
    const pagesResults = await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: { equals: 'published' },
      },
      select: { slug: true, updatedAt: true },
    })

    const defaultSitemap = [
      { loc: `${SITE_URL}/`, lastmod: dateFallback },
      { loc: `${SITE_URL}/about`, lastmod: dateFallback },
      { loc: `${SITE_URL}/contact`, lastmod: dateFallback },
      { loc: `${SITE_URL}/services`, lastmod: dateFallback },
      { loc: `${SITE_URL}/search`, lastmod: dateFallback },
      { loc: `${SITE_URL}/posts`, lastmod: dateFallback },
    ]

    const pagesSitemap = pagesResults.docs
      .filter((page) => page?.slug && page.slug !== 'home')
      .map((page) => ({
        loc: `${SITE_URL}/${page.slug}`,
        lastmod: page.updatedAt || dateFallback,
      }))

    return [...defaultSitemap, ...pagesSitemap]
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getPagesSitemap()

  return getServerSideSitemap(sitemap)
}
