import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const bulkUpV3 = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Starting the "Bulk Up V3" process for the last 4 posts...')

  const postsUpdates = [
    {
      slug: 'zero-trust-cybersecurity-ai-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Data Sovereignty & The Kenya Data Protection Act (2019)' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'For Kenyan enterprises, cybersecurity isn\'t just about preventing theft; it\'s about legal compliance. The Office of the Data Protection Commissioner (ODPC) has strict guidelines on where and how Kenyan citizen data is stored. Our Zero Trust framework ensures that data never leaves your secure "Sovereign Cloud" environment without explicit, audited authorization, shielding your business from massive non-compliance fines.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Combating "MFA Fatigue" Attacks' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'One of the most common attacks in 2026 is "Multi-Factor Authentication (MFA) Fatigue," where hackers bombard an employee with login prompts until they accidentally click "Approve." We implement "Context-Aware MFA" that only triggers a prompt if the user is on a recognized device and a secure network, effectively neutralizing these psychological attacks.' }] },
        { type: 'block', fields: { blockType: 'banner', style: 'info', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Executive Checklist: 1. Audit all legacy access points. 2. Implement biometric-first entry. 3. Encrypt all PII (Personally Identifiable Information) at rest.' }] }] } } } }
      ]
    },
    {
      slug: 'digital-transformation-blueprint-kenya-2026',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Culture Factor: Upskilling Your Kenyan Workforce' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'The greatest hurdle to digital transformation isn\'t technology—it\'s resistance to change. For a blueprint to work, your team must feel empowered by the new tools, not threatened by them. We provide "Digital Literacy Bootcamps" tailored for Kenyan teams, turning your employees from manual operators into data-driven decision-makers who actively seek out ways to optimize their own workflows.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Governance & Data Integrity' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'A digital enterprise is only as good as its data. We implement "Data Governance" protocols that ensure every department—from sales in Nairobi to logistics in Mombasa—is looking at the same "Single Source of Truth." This eliminates the "spreadsheet silos" that cause so many Kenyan businesses to lose revenue due to inaccurate reporting.' }] },
        { type: 'block', fields: { blockType: 'banner', style: 'success', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Master Tech ROI: Our clients typically see a 25% reduction in operational overhead within the first 6 months of full blueprint implementation.' }] }] } } } }
      ]
    },
    {
      slug: 'liquid-brand-identity-kenya-market',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Brand Storytelling: Connecting with the Aspirational Kenyan' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Kenyans value brands that show progress and purpose. Your "Liquid Identity" must tell a story of growth and reliability. We help you craft a brand narrative that resonates with the ambitious professional and the established enterprise alike. It\'s not just about a logo; it\'s about becoming a symbol of success in the East African market.' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Accessibility as a Brand Pillar' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'True "Liquid Design" is accessible to everyone. We ensure your brand visuals and digital interfaces are optimized for all users, including those with visual impairments. In 2026, inclusivity isn\'t just a moral choice; it\'s a brand differentiator that signals high-level professionalism and global standards.' }] },
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Measuring Brand Sentiment with AI' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'How do people *really* feel about your brand? We implement AI-driven sentiment analysis that monitors social media, news, and forums in real-time. This allows you to pivot your messaging instantly if a campaign isn\'t hitting the mark, ensuring your brand equity only ever moves in one direction: Up.' }] }
      ]
    },
    {
      slug: 'predictive-lead-scoring-ads-kenya',
      extraContent: [
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Lead Nurturing Funnel: Moving from "Hello" to "Contract"' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'Capturing a lead is only the beginning. Most high-value B2B deals in Kenya require 7-12 "touchpoints" before a contract is signed. We build automated lead-nurturing funnels that "drip" helpful, high-authority content to your prospects over time, keeping your brand top-of-mind without ever feeling like a "hard sell."' }] },
        { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'CRM Integration: The Sales/Marketing Bridge' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'The biggest waste of money in marketing is a lead that "goes cold" because the sales team didn\'t call them back. We integrate your ad platforms directly with your CRM (Salesforce, HubSpot, or a custom build), ensuring that as soon as a high-scoring lead is identified, your sales manager gets an instant notification on their phone.' }] },
        { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Social Selling & Authority Building' }] },
        { type: 'paragraph', children: [{ type: 'text', text: 'We help your key executives build their personal brands on LinkedIn. By positioning your leadership as "Thought Leaders," your company\'s ads become much more effective—people don\'t buy from companies; they buy from people they trust. This is the ultimate multiplier for your performance marketing ROI.' }] }
      ]
    }
  ]

  console.log('Appending v3 sections to the target posts...')

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
        console.log(`Successfully added V3 depth to: ${update.slug}`)
      }
    } catch (err) {
      console.error(`Error adding V3 depth to ${update.slug}:`, err)
    }
  }

  console.log('V3 Enrichment complete!')
  process.exit(0)
}

bulkUpV3()
