import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const bulkUpPosts = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Starting the "Bulk Up" process for all 7 posts...')

  const postsUpdates = [
    {
      slug: 'skyrocket-ecommerce-mpesa-daraja-integration',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Psychology of Payment Friction in the Kenyan Market' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'In the Kenyan digital economy, trust and speed are the two most critical currencies. When a customer reaches your checkout page, they are at their most vulnerable state of decision-making. Any friction—asking them to remember a Paybill number, switch apps to copy a transaction code, or wait for a manual confirmation—creates a "drop-off window." Statistics show that manual payment processes in East Africa lead to a 40-60% cart abandonment rate.' }] },
            
            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'STK Push vs. Manual C2B: Why It Matters' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Traditional Lipa Na M-Pesa requires the user to navigate through their SIM toolkit or M-Pesa App manually. Daraja 2.0 changes this with the STK Push (Lipa Na M-Pesa Online). By triggering a secure prompt directly on the user\'s screen, you remove 5-7 manual steps from the journey. This isn\'t just a convenience; it is a conversion engine.' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'info', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Master Tech Insight: We integrate M-Pesa directly into your backend logic, allowing for instant order fulfillment the millisecond the transaction is confirmed.' }] }] } } } },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Step-by-Step Daraja 2.0 Integration Flow' }] },
            { type: 'paragraph', children: [{ type: 'text', text: '1. App Creation: Registering your shortcode on the Safaricom Developer Portal.\n2. OAuth Authentication: Generating secure access tokens that refresh automatically.\n3. Triggering STK Push: Sending the POST request to the M-Pesa API with the amount and phone number.\n4. Callback Handling: Setting up a secure endpoint to receive the JSON result from Safaricom.\n5. Automated Reconciliation: Updating your database and notifying the customer via SMS/Email.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Common Integration Pitfalls' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Many developers fail to handle timeouts or user cancellations correctly. If a user cancels the prompt, your system should know immediately to offer an alternative or a retry, rather than leaving the order in a "pending" limbo. Security is also paramount—never log sensitive transaction details in plain text.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Frequently Asked Questions (FAQ)' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: Is Daraja 2.0 secure for large transactions?\nA: Yes, it uses industry-standard encryption and STK Push requires the user\'s secret PIN.\n\nQ: How long does integration take?\nA: With Master Tech, we can have a fully tested environment ready in under 7 days.\n\nQ: Can it handle multiple till numbers?\nA: Absolutely, our custom middleware can route payments to different accounts based on the product category.' }] }
          ]
        }
      }
    },
    {
      slug: 'local-seo-guide-nairobi-kenya',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The "Map Pack" Strategy: How to Appear Above the Fold' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'In Nairobi, "Near Me" searches have increased by 300% over the last two years. When someone in Westlands searches for a service, Google prioritizes the "Local Map Pack." If your business isn\'t in the top three results, you are effectively invisible to high-intent local traffic.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Keyword Research for Nairobi’s High-Value Hubs' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Generic keywords like "IT company" are too broad. To win in Nairobi, you need to target hub-specific queries: "Software developers in Upper Hill," "Cloud services Industrial Area," or "Marketing agency Kilimani." These long-tail keywords have lower competition and much higher conversion rates.' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'success', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Pro Tip: Ensure your Name, Address, and Phone Number (NAP) are identical across Google, LinkedIn, and your website.' }] }] } } } },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Technical SEO for the Kenyan Mobile Market' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Nairobi is a mobile-first city. Google now uses "Mobile-First Indexing," meaning if your site is slow on a 3G/4G connection in Nairobi, you will be penalized. We use Next.js and Edge Caching to ensure your site loads in under 1.5 seconds, even in areas with spotty connectivity.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Building Kenyan Search Authority' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Authority is built through local citations and quality content. Being listed in Kenyan business directories and having a blog that answers specific questions about the local market signals to Google that you are a trusted local expert.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Local SEO FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: How long does it take to rank #1 in Nairobi?\nA: SEO is a long game, but with our local strategy, we typically see movement in the first 60-90 days.\n\nQ: Does my physical address matter?\nA: Yes, proximity is a major ranking factor for local search. We help you optimize for your specific location.' }] }
          ]
        }
      }
    },
    {
      slug: 'custom-web-apps-vs-off-the-shelf-kenya',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Hidden "Technical Debt" of Generic Templates' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Off-the-shelf templates (like basic WordPress themes) are built to cater to everyone, which means they are optimized for no one. They come bloated with unnecessary code, redundant plugins, and rigid structures that eventually act as a "ceiling" for your business growth. This is what we call technical debt.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Scalability: When Your Business Outgrows Its Website' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'What happens when your traffic spikes during a Black Friday sale or a major marketing campaign? Generic templates often crash under heavy load. Custom-engineered apps, built with modern stacks like React and Node.js, are designed to scale horizontally—handling 1,000 or 1,000,000 users with the same level of performance.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'The Security Nightmare of "Plugin Culture"' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Most template-based sites rely on dozens of third-party plugins. Each plugin is a potential "backdoor" for hackers. In Kenya, where cyber-attacks on SMEs are rising, a custom-built solution offers a much smaller attack surface, protecting your sensitive business data from day one.' }] },

            { type: 'block', fields: { blockType: 'code', language: 'typescript', code: '// Example of a lightweight, custom API route in Next.js\nexport async function POST(req: Request) {\n  const data = await req.json();\n  // Process business logic without 50+ unnecessary plugins\n  return Response.json({ success: true });\n}' } },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Long-Term ROI: Custom is Cheaper' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'While the initial investment in custom software is higher, the long-term costs are significantly lower. You eliminate monthly plugin fees, expensive "emergency" fixes when templates break, and the massive cost of lost revenue due to downtime.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Custom Software FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: Do we own the code?\nA: Yes, when Master Tech builds your solution, you own the IP and the source code entirely.\n\nQ: Can we add features later?\nA: That is the beauty of custom software—it is modular. We can add a mobile app or a new integration whenever you are ready.' }] }
          ]
        }
      }
    },
    {
      slug: 'zero-trust-cybersecurity-ai-kenya',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Anatomy of a Modern Cyber Attack in East Africa' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'In 2026, cyber-criminals are no longer just "hacking systems"—they are hacking human behavior. From sophisticated AI-generated phishing emails that mimic your bank to ransomware that targets unpatched Kenyan servers, the threat landscape has changed. Relying on a simple firewall is like locking your front door but leaving all the windows open.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Principles of Zero Trust: Never Trust, Always Verify' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Zero Trust is a security model that assumes every request, whether it comes from inside or outside your office network, is a potential threat. It requires every user and device to be authenticated, authorized, and continuously validated before being granted access to applications and data.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'How AI Predicts Threats Before They Happen' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Modern cybersecurity uses Machine Learning (ML) to analyze patterns. If an employee who normally logs in from Nairobi suddenly tries to access the payroll system from an IP address in a different country at 3 AM, the AI detects this anomaly and triggers an instant lockdown before a single byte of data is stolen.' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'warning', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Compliance Note: Our security systems are designed to keep your business fully compliant with the Kenya Data Protection Act (ODPC).' }] }] } } } },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Protecting Your Remote Workforce' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'With more Kenyan teams working remotely, the "office perimeter" has disappeared. We implement secure, encrypted access (SD-WAN and SASE) that ensures your team can work from anywhere without exposing your core business logic to the public internet.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Cybersecurity FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: Is my business too small for Zero Trust?\nA: No. Small businesses are often the preferred targets because they have weaker defenses. Zero Trust is scalable for any size.\n\nQ: Does it slow down our work?\nA: Not at all. With Modern Identity Providers (IdP), the verification happens in the background, providing a seamless experience for your team.' }] }
          ]
        }
      }
    },
    {
      slug: 'digital-transformation-blueprint-kenya-2026',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Transformation is a Marathon, Not a Sprint' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Many Kenyan enterprises fail their digital journey because they try to "buy" transformation through a single piece of software. Real transformation is about aligning your people, processes, and technology toward a unified goal. Our blueprint is designed to deliver measurable ROI at every stage.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Phase 1: The Foundation & Audit (Months 1-3)' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Before building, we audit your legacy systems. Where are the bottlenecks? Where is data being lost in manual spreadsheets? We identify "Quick Wins"—small changes that deliver immediate value—to build momentum for the larger project.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Phase 2: Modernizing the Tech Stack (Months 4-8)' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'This is where the build happens. We replace outdated, slow systems with modern, cloud-native applications. We focus on "API-First" architecture, ensuring that your new website, your M-Pesa payments, and your internal CRM all talk to each other seamlessly.' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'info', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'The Master Tech Approach: We don\'t just hand over a product; we train your team to ensure the new tools are actually adopted and used effectively.' }] }] } } } },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Setting Realistic KPIs' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'How do you know it\'s working? We help you set and track key metrics: "Reduction in manual processing time," "Increase in online lead conversion," and "System uptime." If it isn\'t measurable, it isn\'t transformation.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Digital Strategy FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: What is the biggest risk?\nA: Lack of leadership alignment. We work with your stakeholders to ensure everyone is on the same page.\n\nQ: How much does it cost?\nA: Every roadmap is custom. We offer tiered implementation phases so you can scale your investment as you see results.' }] }
          ]
        }
      }
    },
    {
      slug: 'liquid-brand-identity-kenya-market',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Death of the Static Logo' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'In the past, a brand was a logo and a set of colors in a PDF. In 2026, your brand is a living, breathing ecosystem. It must work as well on a favicon as it does on a massive billboard on Mombasa Road. It must be "liquid"—adaptive, responsive, and interactive.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Designing for the "Mobile-First" Kenyan Consumer' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Your customers are interacting with your brand primarily through small screens. We design with a "Mobile-First" philosophy, focusing on high-contrast visuals, legible typography, and intuitive touch targets. Your visual identity shouldn\'t just look good; it should guide the user toward a conversion.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Consistency Across 10+ Digital Touchpoints' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Does your Instagram look like a different company than your website? Does your WhatsApp business profile feel disconnected from your brochures? A "Liquid Identity" ensures a seamless, premium feel across every channel, building the trust required for high-value B2B transactions.' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'success', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Strategic Branding: We don\'t just design for aesthetics; we design for authority. We position your brand as the #1 elite choice in your industry.' }] }] } } } },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Role of Design Systems' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'For growing enterprises, we build "Design Systems"—a reusable library of visual components. This allows your team to launch new landing pages or marketing materials in hours instead of weeks, while maintaining 100% brand consistency.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Branding FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: Do we need a total rebrand?\nA: Not always. Sometimes a "Brand Refresh" is all you need to modernize your look for the digital age.\n\nQ: What deliverables do we get?\nA: Everything from core logo systems and color palettes to social media templates and comprehensive brand guidelines.' }] }
          ]
        }
      }
    },
    {
      slug: 'predictive-lead-scoring-ads-kenya',
      content: {
        root: {
          type: 'root',
          children: [
            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'The Fallacy of Vanity Metrics: Why Likes Don’t Pay Bills' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Many Kenyan agencies chase "Engagement"—likes, comments, and shares. But for a B2B service or a high-end enterprise, 10,000 likes from non-buyers are worthless compared to 10 high-quality leads from decision-makers. Our focus is exclusively on ROI and conversion.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'What is Predictive Lead Scoring?' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Not all leads are created equal. By using data from your past successful sales, we build AI models that "score" new leads based on their behavior, industry, and interaction with your ads. This allows your sales team to focus 100% of their energy on the leads most likely to close.' }] },

            { type: 'heading', tag: 'h3', children: [{ type: 'text', text: 'Precision Targeting on LinkedIn & Meta' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'We don\'t just "blast" ads to everyone in Nairobi. We use hyper-precision targeting to find CEOs, IT Directors, and Business Owners in specific sectors. By reaching the right people with a high-intent offer, we drastically reduce your Cost Per Acquisition (CPA).' }] },

            { type: 'block', fields: { blockType: 'banner', style: 'info', content: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'The Master Tech Advantage: We bridge the gap between "Ads" and "Sales" by integrating your marketing stack with your CRM.' }] }] } } } },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'A/B Testing for the Kenyan Audience' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'What resonates in Nairobi might not work in Mombasa. We continuously A/B test ad creative, messaging, and call-to-actions to find the "Winning Formula" for your specific audience. Marketing is no longer a guessing game; it is a data science.' }] },

            { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Performance Marketing FAQ' }] },
            { type: 'paragraph', children: [{ type: 'text', text: 'Q: What is the minimum budget?\nA: We recommend a budget that allows for enough data collection to optimize the AI models. We can guide you on this based on your industry.\n\nQ: How do we track leads?\nA: We set up full-funnel tracking, from the first ad click to the final contract signature.' }] }
          ]
        }
      }
    }
  ]

  console.log('Updating each post with "Bulked Up" content...')
  for (const update of postsUpdates) {
    try {
      const result = await payload.update({
        collection: 'posts',
        where: {
          slug: {
            equals: update.slug,
          },
        },
        data: {
          content: update.content as any,
        },
        context: { disableRevalidate: true },
      })

      if (result.docs.length > 0) {
        console.log(`Successfully bulked up post: ${update.slug}`)
      } else {
        console.warn(`Post with slug ${update.slug} not found.`)
      }
    } catch (err) {
      console.error(`Error bulking up post ${update.slug}:`, err)
    }
  }

  console.log('All posts have been successfully "Bulked Up"!')
  process.exit(0)
}

bulkUpPosts()
