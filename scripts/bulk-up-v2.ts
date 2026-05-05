import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const bulkUpV2 = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Starting the "Bulk Up V2" process (Master Class Level)...')

  const postsUpdates = [
    {
      slug: 'skyrocket-ecommerce-mpesa-daraja-integration',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Advanced Reconciliation & Automated Accounting' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'The biggest headache for Kenyan businesses isn\'t just receiving the payment—it\'s reconciling it. Manual reconciliation leads to double-entries, missed orders, and frustrated customers. Our integration includes automated ledger syncing. Whether you use QuickBooks, Xero, or a custom ERP, the moment an M-Pesa transaction is successful, your inventory is updated, and your accounting books are balanced in real-time.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Handling "Double-Charged" & Partial Payments' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'A professional system must handle edge cases. What if the Safaricom network lags and the user pays twice? Or what if they pay the wrong amount? We implement "intelligent hooks" that detect these discrepancies immediately, triggering an automated refund or a customer service alert, preserving your brand\'s integrity.' }] }
      ]
    },
    {
      slug: 'local-seo-guide-nairobi-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Voice Search & The Multilingual Advantage' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Nairobi\'s search landscape is evolving. With the rise of voice assistants, users are now searching in more conversational, often "Sheng-influenced" or localized English. We optimize your content for these natural language queries. Instead of just "Hardware store Nairobi," we help you rank for "Where is the nearest place to buy tools in Westlands?"—capturing the exact intent of the modern Kenyan consumer.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'The Power of Video in Local Search' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Google now prioritizes video snippets in local results. A 30-second "Behind the Scenes" video of your Nairobi office or a product demo can increase your click-through rate (CTR) by up to 150%. We integrate schema markup that tells Google exactly what your video is about, ensuring you dominate both the Map Pack and the Video carousel.' }] }
      ]
    },
    {
      slug: 'custom-web-apps-vs-off-the-shelf-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The "Edge" Advantage: Speed for Low-Bandwidth Areas' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'While Nairobi has great 5G, many of your customers might be accessing your site from areas with spotty 3G or expensive data. Custom apps allow us to implement "Edge Computing" and "Service Workers." This means your app can work offline or on extremely slow networks by caching the core experience locally on the user\'s device. Generic templates simply cannot offer this level of technical optimization.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Future-Proofing for Web3 & AI Agents' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'The internet is changing. Soon, AI agents will be browsing the web for your customers. Custom software ensures your data is "Machine Readable"—structured in a way that AI can find your products and services instantly. Templates are too rigid for this future; custom engineering makes you a first-mover in the AI era.' }] }
      ]
    },
    {
      slug: 'zero-trust-cybersecurity-ai-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Human Firewall: Training vs. Technology' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Technology is only 50% of the battle. The other 50% is your team. We provide "Simulated Phishing" attacks to test your employees\' awareness. When someone clicks a "fake" malicious link, they are instantly redirected to a 2-minute training video. This creates a culture of security that no software alone can provide.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Incident Response: The "Golden Hour"' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'In the event of a breach, the first 60 minutes are critical. Our Zero Trust architecture includes automated "Kill Switches." If a threat is detected, the compromised account is isolated from the rest of the company data automatically, preventing a small mistake from becoming an enterprise-wide disaster.' }] }
      ]
    },
    {
      slug: 'digital-transformation-blueprint-kenya-2026',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Avoiding "Digital Lipstick": Strategy Over Software' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Putting a fancy website on top of a broken manual process is just "digital lipstick"—it looks good but doesn\'t change the results. Our consulting starts with "Process Re-engineering." We look at your actual business logic and simplify it *before* we digitize it. This ensures you aren\'t just working faster, but working smarter.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'The Multi-Year Roadmap: Scalable Investment' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Transformation doesn\'t have to cost millions upfront. We design your journey in "Value Blocks." Each block pays for itself through increased efficiency or revenue, which then funds the next phase of your digital evolution. This is how we de-risk your technology investment.' }] }
      ]
    },
    {
      slug: 'liquid-brand-identity-kenya-market',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Color Psychology & Cultural Relevance' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'In the East African market, colors carry weight. Trust is often communicated through specific palettes—deep blues for stability, vibrant oranges for innovation. We don\'t just pick colors that look "nice"; we pick colors that trigger the right emotional response from your specific target demographic in Kenya.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Sonic Branding: The Future of Digital Identity' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'As voice and video dominate, how does your brand *sound*? From the notification sound of your app to the music in your ads, we help you define a "Sonic Identity" that makes your brand recognizable even when the customer isn\'t looking at a screen.' }] }
      ]
    },
    {
      slug: 'predictive-lead-scoring-ads-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The WhatsApp Conversion Loop' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'In Kenya, WhatsApp is the "Hidden Closer." We implement ads that lead directly to a WhatsApp Business conversation. By combining the precision of Meta targeting with the personal touch of a WhatsApp chat, we help you build trust instantly and close deals while the lead is still "hot."' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Retargeting: Staying Top-of-Mind Without Being Annoying' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'A lead might visit your site once and get distracted. We use "Intelligent Retargeting"—showing them helpful content rather than just a "Buy Now" button. This positions you as a helpful advisor, ensuring that when they *are* ready to buy, Master Tech (or your brand) is the only one they call.' }] }
      ]
    }
  ]

  console.log('Fetching current posts and appending new sections...')

  for (const update of postsUpdates) {
    try {
      const post = await payload.find({
        collection: 'posts',
        where: { slug: { equals: update.slug } },
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
          data: { content: newContent as any },
          context: { disableRevalidate: true },
        })
        console.log(`Successfully added extra depth to: ${update.slug}`)
      }
    } catch (err) {
      console.error(`Error adding depth to ${update.slug}:`, err)
    }
  }

  console.log('All posts have been enriched with Master Class content!')
  process.exit(0)
}

bulkUpV2()
