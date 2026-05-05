import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const finalEnrichment = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Renaming and performing Final Enrichment on the 3 core blogs...')

  const targetUpdates = [
    {
      oldSlug: 'skyrocket-ecommerce-mpesa-daraja-integration',
      newTitle: 'The M-Pesa Daraja 2.0 Revolution: Mastering Seamless Payments for Kenyan E-Commerce',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Mastering the Daraja 2.0 Ecosystem: Beyond the Basics' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'The Daraja 2.0 ecosystem is more than just a payment gateway; it is a financial data powerhouse. For an e-commerce platform in Kenya, mastering this revolution means moving beyond simple STK Pushes into the realm of "Instant B2C Payouts" and "Dynamic QR Codes." Imagine a system where your delivery partners are paid their commission automatically the moment a customer pays via M-Pesa—this is the level of automation we bring to your business.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Dynamic Till Numbers & Secondary Marketplaces' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'If you are running a marketplace model where multiple vendors sell on your platform, managing payments can be a nightmare. We implement multi-tenant Daraja routing, allowing payments to be split at the point of sale. This ensures that the primary till receives the transaction fee while the vendor\'s sub-wallet is credited instantly, removing all manual bookkeeping friction.' }] },
        { type: 'block', fields: { blockType: 'banner', style: 'success', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Conversion Stat: Businesses using Master Tech\'s automated M-Pesa reconciliation report a 99.9% reduction in payment disputes.' }] }] } } } }
      ]
    },
    {
      oldSlug: 'zero-trust-cybersecurity-ai-kenya',
      newTitle: 'ODPC Compliance in 2026: Protecting Your Business from Data Protection Fines',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Cost of Non-Compliance: A Lesson in Data Ethics' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'In 2026, the ODPC is no longer just issuing warnings. Data protection fines in Kenya can now reach up to 5 Million Shillings or 1% of your annual turnover. Protecting your business isn\'t just about a firewall; it\'s about "Privacy by Design." We help you implement data retention policies that automatically purge unnecessary customer information, ensuring you only hold what is legally required and significantly reducing your liability.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'The Role of the Data Protection Officer (DPO)' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Every major SME and Enterprise in Kenya now requires a designated DPO or a partner who can act as one. We provide "Security-as-a-Service," performing monthly data audits and impact assessments (DPIA). This proactive stance doesn\'t just prevent fines—it builds a "Brand of Trust" that makes premium clients feel safe doing business with you.' }] },
        { type: 'block', fields: { blockType: 'banner', style: 'warning', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Legal Note: Under the 2019 Act, you are responsible for the security of your third-party vendors. We audit your entire tech stack for compliance.' }] }] } } } }
      ]
    },
    {
      oldSlug: 'digital-transformation-blueprint-kenya-2026',
      newTitle: 'Digital Migration for Kenyan SMEs: A Step-by-Step Guide to Cloud Transformation',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Cloud Migration: Moving Beyond Local Hardware' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Many Kenyan SMEs still rely on physical servers in their offices. This is a recipe for disaster in an era of power fluctuations and physical security risks. Cloud migration isn\'t just about moving files; it\'s about moving your "Business Intelligence" to a resilient, auto-scaling environment. We help you migrate to secure, locally-optimized cloud instances (like AWS Nairobi Region or Azure), ensuring 99.99% uptime for your core operations.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'The Hybrid Cloud Model for Cost Optimization' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'You don\'t have to move everything at once. We implement "Hybrid Cloud" strategies where your most sensitive data stays on-premise (or in a private cloud) while your high-traffic web services live on the public cloud. This "Best of Both Worlds" approach optimizes your data costs while providing the unlimited scalability needed for growth.' }] },
        { type: 'block', fields: { blockType: 'banner', style: 'info', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Transformation Milestone: Our migration process includes zero-downtime cutovers, meaning your business stays online while the upgrade happens.' }] }] } } } }
      ]
    }
  ]

  for (const update of targetUpdates) {
    try {
      const post = await payload.find({
        collection: 'posts',
        where: { slug: { equals: update.oldSlug } },
        limit: 1,
      })

      if (post.docs.length > 0) {
        const currentContent = post.docs[0].content
        const newContent = {
          root: {
            ...currentContent.root,
            children: [
              ...currentContent.root.children,
              ...update.extraContent
            ]
          }
        }

        await payload.update({
          collection: 'posts',
          id: post.docs[0].id,
          data: { 
            title: update.newTitle,
            content: newContent as any,
            meta: {
                ...post.docs[0].meta,
                title: update.newTitle
            }
          },
          context: { disableRevalidate: true },
        })
        console.log(`Successfully updated and enriched: ${update.newTitle}`)
      } else {
        console.warn(`Original post with slug ${update.oldSlug} not found.`)
      }
    } catch (err) {
      console.error(`Error updating post ${update.oldSlug}:`, err)
    }
  }

  console.log('Final Enrichment complete!')
  process.exit(0)
}

finalEnrichment()
