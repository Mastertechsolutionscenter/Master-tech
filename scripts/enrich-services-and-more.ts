import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const enrichServicesAndMore = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Enriching Services and Sub-services...')

  // 1. Update E-commerce Sub-service with Master Class content
  await payload.update({
    collection: 'sub-services',
    where: { slug: { equals: 'e-commerce' } },
    data: {
      heroSection: {
        title: 'Dominating Kenyan E-commerce with Seamless M-Pesa Integration',
        valueStatement: 'We build high-converting online stores that bridge the gap between global technology and local payment habits.',
        ctaText: 'Start Your Store',
      },
      offerings: {
        title: 'Engineered for Conversion',
        features: [
          { title: 'Automated M-Pesa Daraja 2.0', description: 'Instant STK Push prompts that remove checkout friction and automate reconciliation.' },
          { title: 'Inventory Multi-Sync', description: 'Synchronize your physical shop inventory with your online store in real-time.' },
          { title: 'Mobile-First Design', description: 'Optimized for 3G/4G connections to ensure fast loading in all regions of Kenya.' }
        ]
      },
      kenyanContext: 'Our e-commerce solutions are built to handle the unique "Order-on-WhatsApp" and "Lipa Na M-Pesa" culture that defines Kenyan retail.',
    },
    context: { disableRevalidate: true }
  })

  // 2. Update Zero Trust Sub-service
  await payload.update({
    collection: 'sub-services',
    where: { slug: { equals: 'zero-trust-security' } },
    data: {
      heroSection: {
        title: 'Protecting Kenyan Enterprise Data with Zero Trust & AI',
        valueStatement: 'In 2026, a firewall is not enough. We implement "Never Trust, Always Verify" architecture to shield your business.',
        ctaText: 'Audit Your Security',
      },
      offerings: {
        title: 'Future-Proof Security',
        features: [
          { title: 'ODPC Compliance Suite', description: 'Full alignment with the Kenya Data Protection Act to avoid massive non-compliance fines.' },
          { title: 'AI-Driven Threat Detection', description: 'Predictive models that identify and block anomalies in milliseconds.' },
          { title: 'Identity-First Access', description: 'Secure biometric and context-aware MFA for your remote and office teams.' }
        ]
      },
      kenyanContext: 'We ensure your data sovereignty matches local legal requirements while providing global-standard protection.',
    },
    context: { disableRevalidate: true }
  })

  console.log('Creating deep-dive FAQs...')

  const faqData = [
    {
      question: 'How long does an M-Pesa Daraja 2.0 integration take?',
      answer: 'For standard setups, we can have you live in 3-5 business days. For complex marketplace logic involving split payments, it typically takes 7-10 days including rigorous testing on the Safaricom sandbox.',
      isGeneral: false,
    },
    {
      question: 'Is our data stored in Kenya for ODPC compliance?',
      answer: 'We offer flexible hosting solutions including local Nairobi-based cloud instances and secure hybrid models that ensure all sensitive PII (Personally Identifiable Information) remains within Kenyan borders as per the 2019 Act.',
      isGeneral: false,
    },
    {
      question: 'Can you migrate our legacy WordPress site to a custom Next.js app?',
      answer: 'Absolutely. We specialize in "Digital Migration," where we port your existing content into a high-performance custom architecture without losing your SEO rankings or historical data.',
      isGeneral: true,
    }
  ]

  for (const faq of faqData) {
    await payload.create({
      collection: 'faqs',
      data: faq,
      context: { disableRevalidate: true }
    })
  }

  console.log('Creating ROI-focused Case Studies...')

  const caseStudies = [
    {
      title: 'Scaling a Nairobi Logistics Hub by 300% with Custom ERP',
      client: 'Aura Logistics',
      resultMetric: '300% Efficiency Gain',
      challenge: 'The client was using manual spreadsheets to track 50+ riders across Nairobi, leading to 20% lost revenue due to miscommunication and delayed tracking.',
      slug: 'aura-logistics-erp-case-study',
      _status: 'published',
      // heroImage will be linked later or used from seed
    },
    {
      title: 'Automating M-Pesa Reconciliation for a Regional Retailer',
      client: 'Apex Retail',
      resultMetric: 'Zero Reconciliation Errors',
      challenge: 'Apex was manually confirming 500+ M-Pesa transaction codes daily, leading to a 48-hour delay in order fulfillment.',
      slug: 'apex-retail-mpesa-automation',
      _status: 'published',
    }
  ]

  const media = await payload.find({ collection: 'media', limit: 1 })
  const defaultImage = media.docs[0]?.id

  for (const cs of caseStudies) {
    await payload.create({
      collection: 'case-studies',
      data: {
        ...cs,
        heroImage: defaultImage,
        solution: {
            root: {
                type: 'root',
                children: [
                    { type: 'paragraph', children: [{ type: 'text', text: 'We implemented a custom Next.js dashboard integrated with Daraja 2.0 and a real-time tracking backend using Node.js.' }] }
                ]
            }
        }
      } as any,
      context: { disableRevalidate: true }
    })
  }

  console.log('Enrichment process complete!')
  process.exit(0)
}

enrichServicesAndMore()
