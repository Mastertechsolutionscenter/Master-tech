import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../../.env'),
})

const addNewPosts = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Fetching dependencies (author, media, categories)...')
  
  const users = await payload.find({ collection: 'users', limit: 1 })
  const author = users.docs[0]
  
  if (!author) {
    console.error('No author found. Please seed the database first or create a user.')
    process.exit(1)
  }

  const media = await payload.find({ collection: 'media', limit: 5 })
  const heroImage = media.docs[0] || { id: null }

  const categories = await payload.find({ collection: 'categories' })
  const techCat = categories.docs.find(c => c.title === 'Technology')
  const financeCat = categories.docs.find(c => c.title === 'Finance')
  const softwareCat = categories.docs.find(c => c.title === 'Software')

  const postsData: any[] = [
    {
      title: 'How to Skyrocket Your E-commerce Sales in Kenya with Seamless M-Pesa Daraja 2.0 Integration',
      slug: 'skyrocket-ecommerce-mpesa-daraja-integration',
      _status: 'published',
      authors: [author.id],
      categories: [financeCat?.id, techCat?.id].filter(Boolean),
      heroImage: heroImage.id,
      meta: {
        title: 'M-Pesa Daraja 2.0 Integration Guide for Kenyan E-commerce',
        description: 'Learn how seamless STK Push and M-Pesa integration can reduce cart abandonment and boost your online sales in Kenya.',
        image: heroImage.id,
      },
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Solving the Payment Friction in Kenyan E-commerce' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'In Kenya, M-Pesa is not just a payment option; it is the heartbeat of commerce. Yet, many e-commerce platforms still struggle with manual confirmation codes and clunky checkout processes that drive customers away at the final hurdle. The secret to high conversion? Automation through the M-Pesa Daraja 2.0 API.' }],
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ type: 'text', text: 'Why STK Push is a Game Changer' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'With STK Push (Lipa Na M-Pesa Online), the payment request is sent directly to the customer’s phone. They simply enter their PIN, and the transaction is complete. No more switching apps, no more copying till numbers, and zero manual errors. This seamless experience can reduce checkout abandonment by up to 40%.' }],
            },
            {
              type: 'block',
              fields: {
                blockType: 'banner',
                style: 'success',
                content: {
                  root: {
                    type: 'root',
                    children: [{
                      type: 'paragraph',
                      children: [{ type: 'text', text: 'Master Tech specializes in deep Daraja integration, ensuring your business logic reconciles payments in real-time. Ready to automate? Contact us today.' }]
                    }]
                  }
                }
              }
            }
          ]
        }
      }
    },
    {
      title: 'Dominating Nairobi’s Digital Landscape: The Ultimate Local SEO Guide for Kenyan Businesses',
      slug: 'local-seo-guide-nairobi-kenya',
      _status: 'published',
      authors: [author.id],
      categories: [techCat?.id].filter(Boolean),
      heroImage: heroImage.id,
      meta: {
        title: 'Local SEO Nairobi: How to Rank Your Business in Kenya',
        description: 'Discover the technical and content strategies needed to dominate local search results in Nairobi, Westlands, and beyond.',
      },
      content: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              tag: 'h2',
              children: [{ type: 'text', text: 'Why Local SEO Matters in 2026' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: 'When someone searches for "best software company in Nairobi" or "IT support in Westlands," is your business the first they see? Local SEO is the difference between being invisible and being the market leader. It’s about more than just keywords; it’s about signaling relevance to both Google and your local customers.' }],
            },
            {
              type: 'heading',
              tag: 'h3',
              children: [{ type: 'text', text: 'The Three Pillars of Nairobi Search Authority' }],
            },
            {
              type: 'paragraph',
              children: [{ type: 'text', text: '1. Google Business Profile Optimization: Ensure your Industrial Area or Upper Hill location is verified and active.\n2. Location-Specific Landing Pages: Create content that speaks to the unique needs of clients in different Nairobi hubs.\n3. Technical Speed: In a mobile-heavy market, your site must load instantly even on standard 4G connections.' }],
            }
          ]
        }
      }
    },
    {
        title: 'Why "Off-the-Shelf" Fails in East Africa: The Case for Custom Web Apps Built for Kenyan Scale',
        slug: 'custom-web-apps-vs-off-the-shelf-kenya',
        _status: 'published',
        authors: [author.id],
        categories: [softwareCat?.id, techCat?.id].filter(Boolean),
        heroImage: heroImage.id,
        meta: {
          title: 'Custom Software vs Templates in Kenya | Master Tech',
          description: 'Why generic website templates fail Kenyan businesses and why custom-engineered solutions provide better ROI and scalability.',
        },
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The Hidden Cost of "Cheap" Templates' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Generic WordPress templates might look good on the surface, but they often crumble under the weight of Kenyan business realities. From lack of M-Pesa support to bloated code that lags on local networks, off-the-shelf solutions frequently become a bottleneck for growth.' }],
              },
              {
                type: 'heading',
                tag: 'h3',
                children: [{ type: 'text', text: 'Engineering for Reality' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Custom applications allow you to build workflows that mirror your actual operations. Whether it is a custom ERP for a factory in Industrial Area or a high-traffic portal for a Sacco, custom engineering ensures security, speed, and seamless integration.' }],
              }
            ]
          }
        }
      },
      {
        title: 'Zero Trust & AI: Why Kenyan Corporates Must Move Beyond Firewalls in 2026',
        slug: 'zero-trust-cybersecurity-ai-kenya',
        _status: 'published',
        authors: [author.id],
        categories: [techCat?.id].filter(Boolean),
        heroImage: heroImage.id,
        meta: {
          title: 'Cybersecurity Trends 2026: Zero Trust for Kenyan Businesses',
          description: 'Protect your sensitive data with Zero Trust architecture and AI-driven threat detection tailored for the East African enterprise.',
        },
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The New Frontier of Cyber Threats' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'As Kenyan businesses digitize, the target on their back grows. Traditional firewalls are no longer enough to stop sophisticated phishing and ransomware attacks. In 2026, the gold standard is Zero Trust: "Never Trust, Always Verify."' }],
              },
              {
                type: 'heading',
                tag: 'h3',
                children: [{ type: 'text', text: 'How AI Bolsters Your Defense' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'By deploying AI models that learn your network’s "normal" behavior, we can detect anomalies—like an unauthorized login from an unusual location—and block them in milliseconds, long before a human analyst would even notice the breach.' }],
              }
            ]
          }
        }
      },
      {
        title: 'The 12-Month Digital Transformation Blueprint for Kenyan Enterprises: A Step-by-Step Guide',
        slug: 'digital-transformation-blueprint-kenya-2026',
        _status: 'published',
        authors: [author.id],
        categories: [softwareCat?.id, financeCat?.id].filter(Boolean),
        heroImage: heroImage.id,
        meta: {
          title: 'Digital Transformation Strategy Kenya | Master Tech',
          description: 'A comprehensive roadmap for Kenyan enterprises to modernize their tech stack and drive measurable business ROI.',
        },
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'Transformation is a Marathon, Not a Sprint' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Many companies fail because they try to change everything at once. Our 12-month blueprint focuses on high-impact "Quick Wins" first—like automating manual reporting—before moving to core architectural shifts.' }],
              },
              {
                type: 'heading',
                tag: 'h3',
                children: [{ type: 'text', text: 'Phase 1: The Foundation (Months 1-3)' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Audit your existing data, secure your infrastructure, and align your leadership on the digital vision. This phase ensures your growth is built on solid ground.' }],
              }
            ]
          }
        }
      },
      {
        title: 'Beyond the Logo: Building a "Liquid" Brand Identity That Wins in the Modern East African Market',
        slug: 'liquid-brand-identity-kenya-market',
        _status: 'published',
        authors: [author.id],
        categories: [techCat?.id].filter(Boolean),
        heroImage: heroImage.id,
        meta: {
          title: 'Brand Strategy Kenya: Building a Modern Visual Identity',
          description: 'Why your brand needs to be adaptive and "liquid" to succeed across mobile apps, social media, and traditional media in Kenya.',
        },
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'Your Brand is More Than Your Logo' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'In a digital-first world, your brand must live everywhere—from a tiny favicon on a smartphone to a massive billboard on Mombasa Road. A static logo is no longer enough. You need a "liquid" identity system.' }],
              },
              {
                type: 'heading',
                tag: 'h3',
                children: [{ type: 'text', text: 'The Visual Language of Trust' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'A modern brand identity communicates your values through color, typography, and motion. It’s about creating a consistent, premium feel that resonates with the aspirational Kenyan consumer and the professional B2B client alike.' }],
              }
            ]
          }
        }
      },
      {
        title: 'Stop Chasing Likes: Using Predictive Lead Scoring for High-ROI LinkedIn & Meta Ads in Kenya',
        slug: 'predictive-lead-scoring-ads-kenya',
        _status: 'published',
        authors: [author.id],
        categories: [techCat?.id, financeCat?.id].filter(Boolean),
        heroImage: heroImage.id,
        meta: {
          title: 'Performance Marketing Kenya: High-ROI Ad Strategies',
          description: 'How to use data and predictive lead scoring to find high-value decision makers on LinkedIn and Meta in the Kenyan market.',
        },
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'The Fallacy of Vanity Metrics' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Likes, comments, and shares don’t pay the bills. For Kenyan B2B and high-value B2C companies, the focus must shift from engagement to conversion. This is where predictive lead scoring comes in.' }],
              },
              {
                type: 'heading',
                tag: 'h3',
                children: [{ type: 'text', text: 'Targeting the Decision Makers' }],
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'By analyzing data from past successful conversions, we can build custom audiences that target the specific behaviors of decision-makers in Kenya’s corporate and entrepreneurial circles, ensuring every shilling of your ad spend is working toward ROI.' }],
              }
            ]
          }
        }
      }
  ]

  console.log('Adding new posts...')
  for (const postData of postsData) {
    try {
      const createdPost = await payload.create({
        collection: 'posts',
        data: postData,
        context: { disableRevalidate: true },
      })
      console.log(`Successfully created post: ${createdPost.title}`)
    } catch (err) {
      console.error(`Failed to create post: ${postData.title}`, err)
    }
  }

  console.log('All posts processed!')
  process.exit(0)
}

addNewPosts()
