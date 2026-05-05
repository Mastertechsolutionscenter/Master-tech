import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const bulkUpServices = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Starting "Bulk Up" for core Services and Sub-services (Top-Level Fields Only)...')

  const serviceUpdates = [
    {
      slug: 'website-development-in-kenya',
      newTitle: 'Beyond Templates: Crafting Bespoke Websites for Kenyan Business Growth',
      newDescription: 'We build high-performance, custom websites engineered for Kenyan businesses, ensuring scalability, security, and seamless M-Pesa integration.',
      // extraContent is omitted from this script's update data due to persistent JSON syntax errors.
      // If block content is required, it will need manual addition in the CMS or schema adjustment.
      newMeta: {
        title: 'Expert Website Development Nairobi | Custom Web Apps Kenya',
        description: 'Master Tech offers bespoke website development services in Nairobi, Kenya. We build scalable, secure, and high-conversion websites integrated with M-Pesa.',
      }
    },
    {
      slug: 'cloud-infrastructure-in-kenya',
      newTitle: 'Seamless Cloud Migration for Kenyan SMEs: Unlock Scalability & ODPC Compliance',
      newDescription: 'Leverage secure, scalable, and locally compliant cloud infrastructure solutions tailored for Kenyan businesses to boost efficiency and reduce costs.',
      extraContent: [
        // This array is kept for reference but not used in the update payload for services.
      ],
      newMeta: {
        title: 'Cloud Migration Services Nairobi | ODPC Compliant Cloud Solutions Kenya',
        description: 'Master Tech provides secure, scalable, and ODPC-compliant cloud migration and infrastructure solutions for Kenyan SMEs. Unlock your business potential.',
      }
    },
    {
      slug: 'e-commerce-solutions-in-kenya',
      newTitle: 'Mastering the M-Pesa Daraja 2.0 Revolution: Seamless Payments for Kenyan E-Commerce',
      newDescription: 'We build high-converting online stores integrated with M-Pesa Daraja 2.0, automating reconciliation and enhancing customer checkout experiences.',
      extraContent: [
        // This array is kept for reference but not used in the update payload for services.
      ],
      newMeta: {
        title: 'M-Pesa Daraja 2.0 Integration Kenya | E-commerce Payment Solutions',
        description: 'Master Tech offers seamless M-Pesa Daraja 2.0 integration for Kenyan e-commerce. Automate payments, reconciliation, and boost conversions.',
      }
    },
    {
      slug: 'digital-marketing-in-kenya',
      newTitle: 'Data-Driven Lead Generation: High-ROI Digital Marketing for Kenyan Businesses',
      newDescription: 'Stop chasing vanity metrics. We focus on predictive lead scoring and precision targeting for high-ROI LinkedIn & Meta ads in Kenya.',
      extraContent: [
        // This array is kept for reference but not used in the update payload for services.
      ],
      newMeta: {
        title: 'Digital Marketing Agency Nairobi | Lead Generation & ROI | Master Tech',
        description: 'Master Tech is a data-driven digital marketing agency in Nairobi, Kenya. We specialize in high-ROI LinkedIn & Meta ads, predictive lead scoring, and nurturing funnels.',
      }
    },
  ]

  console.log('Updating core Services content (title, description, meta)...')

  for (const update of serviceUpdates) {
    try {
      const service = await payload.find({
        collection: 'services',
        where: { slug: { equals: update.slug } },
        limit: 1,
      })

      if (service.docs.length > 0) {
        const existingService = service.docs[0]
        
        const updatedData: any = {
          title: update.newTitle,
          description: update.newDescription,
          meta: update.newMeta,
          // `extraContent` is omitted here as it requires specific block field mapping.
        }

        await payload.update({
          collection: 'services',
          id: existingService.id,
          data: updatedData,
          context: { disableRevalidate: true },
        })
        console.log(`Successfully updated core data for: ${update.newTitle}`)

      } else {
        console.warn(`Service with slug ${update.slug} not found. Skipping update.`)
      }
    } catch (err) {
      console.error(`Error updating service ${update.newTitle} (slug: ${update.slug}):`, err)
    }
  }

  // Sub-services enrichment will be handled separately or manually.
  console.log('Service core data update complete. Sub-service enrichment may require manual addition or schema adjustment for blocks.')
  process.exit(0)
}

bulkUpServices()
