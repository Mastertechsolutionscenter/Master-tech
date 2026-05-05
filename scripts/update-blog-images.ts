import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import fs from 'fs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const imageMap = [
  {
    slug: 'skyrocket-ecommerce-mpesa-daraja-integration',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mobile payments and e-commerce in Kenya'
  },
  {
    slug: 'local-seo-guide-nairobi-kenya',
    url: 'https://plus.unsplash.com/premium_photo-1691960159290-7a0861db63da?q=80&w=1200&auto=format&fit=crop',
    alt: 'Nairobi City Skyline'
  },
  {
    slug: 'custom-web-apps-vs-off-the-shelf-kenya',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    alt: 'Custom software development workspace'
  },
  {
    slug: 'zero-trust-cybersecurity-ai-kenya',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    alt: 'Cybersecurity and AI protection'
  },
  {
    slug: 'digital-transformation-blueprint-kenya-2026',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Digital transformation strategy and data'
  },
  {
    slug: 'liquid-brand-identity-kenya-market',
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
    alt: 'Modern brand identity and design'
  },
  {
    slug: 'predictive-lead-scoring-ads-kenya',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    alt: 'Data analytics and lead generation dashboard'
  }
]

async function downloadImage(url: string, filename: string): Promise<Buffer> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to fetch ${url}`)
  const arrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

const updateBlogImages = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Starting image download and blog update process...')

  for (const item of imageMap) {
    try {
      console.log(`Processing image for: ${item.slug}`)
      
      const imageBuffer = await downloadImage(item.url, `${item.slug}.jpg`)
      
      const mediaDoc = await payload.create({
        collection: 'media',
        data: {
          alt: item.alt,
        },
        file: {
          data: imageBuffer,
          name: `${item.slug}.jpg`,
          mimetype: 'image/jpeg',
          size: imageBuffer.length,
        },
      })

      const updateResult = await payload.update({
        collection: 'posts',
        where: {
          slug: {
            equals: item.slug,
          },
        },
        data: {
          heroImage: mediaDoc.id,
        },
        context: { disableRevalidate: true }
      })

      if (updateResult.docs.length > 0) {
        console.log(`Successfully updated ${item.slug} with new hero image.`)
      } else {
        console.warn(`Post with slug ${item.slug} not found.`)
      }

    } catch (err) {
      console.error(`Error processing ${item.slug}:`, err)
    }
  }

  console.log('Image update process complete!')
  process.exit(0)
}

updateBlogImages()
