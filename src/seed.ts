import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

import { getPayload } from 'payload'

export const seed = async () => {
  const config = (await import('./payload.config')).default
  const payload = await getPayload({ config })

  console.log('Seed process started...')

  // 1. Clear existing data to ensure clean state
  console.log('Cleaning database...')
  await payload.delete({ collection: 'sub-services', where: { id: { exists: true } } })
  await payload.delete({ collection: 'services', where: { id: { exists: true } } })
  await payload.delete({ collection: 'pages', where: { id: { exists: true } } })

  // 2. Define Service Data
  const servicesToSeed = [
    {
      slug: 'software-application-development',
      title: 'Software & Application Development',
      description: 'We build the digital backbone of your business. From high-speed web apps to complex M-Pesa integrated e-commerce platforms, our software is engineered for Kenyan scale and global performance.',
      subServices: [
        {
          title: 'Custom Web Applications',
          slug: 'custom-web-apps',
          description: 'High-performance, scalable web platforms built with Next.js and Node.js to solve complex business challenges.',
          fullContent: 'Engineering for Kenyan Scale: In an era where digital presence is the primary driver of business growth, a standard website is no longer enough. We build custom web platforms that act as your 24/7 digital workforce—automating complex workflows, securing sensitive data, and providing a lightning-fast experience that keeps users engaged. Most off-the-shelf software fails when it hits the reality of the East African market—varied internet speeds, mobile-heavy traffic, and unique payment behaviors. Our applications are built using a \'Mobile-First, Edge-Ready\' philosophy.'
        },
        {
          title: 'E-commerce & M-Pesa Integration',
          slug: 'ecommerce-mpesa',
          description: 'Conversion-focused online stores with deep M-Pesa Daraja API integration for seamless local payments.',
          fullContent: 'The Power of STK Push & Automated Reconciliation: E-commerce in Africa is unique. It’s not just about a shopping cart; it’s about building trust and removing friction in the payment process. We build high-conversion online stores that treat M-Pesa as a first-class citizen, ensuring your customers can go from \'browsing\' to \'paid\' in under 30 seconds. Forget manual confirmation codes. We implement advanced M-Pesa Daraja 2.0 API integrations featuring STK Push (Lipa Na M-Pesa Online).'
        }
      ],
    },
    {
      slug: 'digital-marketing-growth',
      title: 'Digital Marketing & Growth',
      description: 'Dominating the Kenyan search landscape through data-driven SEO, high-precision paid ads, and conversational WhatsApp marketing that converts traffic into loyal customers.',
      subServices: [
        {
          title: 'SEO & Content Authority',
          slug: 'seo-content-authority',
          description: 'Dominating the search landscape in Kenya through technical SEO and high-intent content strategies.',
          fullContent: 'Moving from Invisible to #1 Choice: Search has evolved beyond simple keywords to intent and location-based queries. Our technical SEO services ensure your business is the first thing potential clients see when searching for solutions in Westlands, Upper Hill, or the wider East African region.'
        },
        {
          title: 'Social Media Strategy & Paid Ads',
          slug: 'social-media-ads',
          description: 'Precision targeting on LinkedIn, Instagram, and Meta to drive high-quality B2B and B2C leads.',
          fullContent: 'Hyper-Precision Targeting: We don\'t just chase likes; we chase ROI. Our paid ad strategies use advanced predictive lead scoring to identify high-value decision-makers in Kenya\'s leading corporates.'
        }
      ],
    },
    {
      slug: 'branding-visual-identity',
      title: 'Branding & Visual Identity',
      description: 'Crafting premium, dynamic identities that scale. From responsive logo systems to enterprise design systems, we ensure your brand looks elite on every screen.',
      subServices: [
        {
          title: 'Dynamic Brand Systems',
          slug: 'dynamic-brand-systems',
          description: 'Moving beyond logos to create adaptive, scalable identity systems designed for a digital-first world.',
          fullContent: 'Liquid Identities for Modern Platforms: We build visual identities that are "liquid"—working as well on a smartwatch or AR headset as they do on a billboard. Our systems ensure your brand is consistent, accessible, and high-impact.'
        }
      ],
    },
    {
      slug: 'infrastructure-cybersecurity',
      title: 'Infrastructure & Cybersecurity',
      description: 'Resilient, locally-hosted, and sovereign infrastructure paired with proactive AI-driven cybersecurity to protect your business logic and sensitive data.',
      subServices: [
        {
          title: 'Zero Trust Security & AI Defense',
          slug: 'zero-trust-security',
          description: 'Protecting your business with identity-centric security and predictive threat intelligence.',
          fullContent: 'Predictive, Identity-Centric Defense: In 2026, a firewall isn\'t enough. You need a system that assumes every request is a threat until proven otherwise. We implement Zero Trust architectures paired with AI models that detect and block attacks before they happen.'
        }
      ],
    },
    {
      slug: 'consulting-digital-strategy',
      title: 'Consulting & Digital Strategy',
      description: 'De-risking your digital journey. We provide multi-year transformation roadmaps that align technology with your core business objectives for maximum ROI.',
      subServices: [
        {
          title: 'Digital Transformation Roadmap',
          slug: 'digital-transformation',
          description: 'De-risking your technology investments by aligning your tech stack with measurable business ROI.',
          fullContent: 'Architecting AI-Native Ecosystems: Agencies are no longer just implementing tools; they are redesigning business models to thrive in an era of hyper-automation and data-driven decision-making. We provide a 12-to-24 month technical roadmap.'
        }
      ],
    },
  ]

  // 3. Create Services and Sub-services
  console.log('Populating services...')
  let digitalService: any
  for (const service of servicesToSeed) {
    const subServiceIds = []
    for (const sub of service.subServices) {
      const createdSub = await payload.create({
        collection: 'sub-services',
        context: { disableRevalidate: true },
        data: {
          title: sub.title,
          description: sub.description,
          slug: sub.slug,
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              direction: 'ltr',
              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,
                  direction: 'ltr',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: sub.description,
                      version: 1,
                    },
                  ],
                },
              ],
            },
          },
        },
      })
      subServiceIds.push(createdSub.id)
    }

    const createdService = await payload.create({
      collection: 'services',
      data: {
        title: service.title,
        description: service.description,
        slug: service.slug,
        subServices: subServiceIds,
      },
    })
    if (service.slug === 'consulting-digital-strategy') {
        digitalService = createdService
    }
  }

  // Create dummy media for consulting
  console.log('Creating media...')
  const consultingMedia = await payload.create({
    collection: 'media',
    data: {
      alt: 'Let\'s Talk About Your Digital Strategy',
    },
    filePath: 'public/Hero/Pics/consult.webp',
  })

// 4. Update Site Settings
// 4. Update Site Settings
console.log('Updating Site Settings...')
await payload.updateGlobal({
  slug: 'site-settings',
  data: {
    heroTitle: 'Your trusted digital solutions partner',
    heroDescription: 'Why juggle multiple providers when everything you need is right here? At Master Tech Solutions Center, we bring all your digital needs under one roof from Strategy, Development, and Installation to Marketing, Social Media Management, Automation, and IT support. Our services are built on Reliability, Consistency, and Proven expertise, so you never have to worry about fragmented results or managing different vendors. As your dedicated partner, we simplify your Digital Journey, save you valuable time, and fuel sustainable growth. One team, one vision, and every solution your business needs — all in one place.',
    name: 'Master Tech Solutions Center',
    description: 'Kenya’s premium provider of enterprise SaaS, SEO-optimized e-commerce, UX-first websites, and secure platforms.',
    url: 'https://mastertechsolutionscenter.com',
    telephone: '+254723230203',
    address: {
      street: 'Lunga Lunga Square, Lunga Lunga Road, Industrial Area',
      city: 'Nairobi',
      region: 'Nairobi County',
      postalCode: '00100',
      country: 'KE',
    },
    geo: {
      latitude: -1.307451,
      longitude: 36.872424,
    },
    twitter: 'https://x.com/MasterTech333P',
    instagram: 'https://www.instagram.com/master_tech_solution_center_',
    linkedin: 'https://www.linkedin.com/company/109129013/admin/dashboard',
    tiktok: 'https://www.tiktok.com/@master.tech.solut2',
  },
}) as any

console.log('Updating About Global...')
await payload.updateGlobal({
  slug: 'about',
  data: {
    title: 'Driving Digital Transformation with Purpose and Precision',
    mission: {
      title: 'Our Mission',
      content: 'At Master Tech Solutions Center, our mission is to empower businesses with cutting-edge technology that simplifies operations, enhances customer experiences, and drives sustainable growth. We believe in creating digital solutions that are not only functional but also transformative.',
      secondaryContent: 'We bridge the gap between complex technical challenges and intuitive business results, ensuring that every project we undertake delivers measurable value to our clients.',
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the leading catalyst for digital excellence in Africa, transforming how businesses connect, grow, and succeed through world-class technology crafted with local insight.',
      secondaryContent: 'We envision a future where Kenyan enterprises are globally competitive, powered by secure, scalable, and intelligent digital ecosystems that we help build and sustain.',
    },
    values: [
      {
        title: 'Innovation',
        description: 'We stay ahead of the curve, adopting the latest technologies to provide our clients with competitive advantages in an ever-evolving digital landscape.',
      },
      {
        title: 'Integrity',
        description: 'Transparency and honesty are at the core of everything we do. We build lasting relationships based on trust and consistent delivery of excellence.',
      },
      {
        title: 'Impact',
        description: 'We are driven by results. Our success is measured by the growth and efficiency we bring to the businesses we partner with.',
      },
    ],
    localExpertise: {
      title: 'Local Expertise, Global Standards',
      content: 'Based at Lunga Lunga Square in Nairobi\'s Industrial Area, we are uniquely positioned to serve the Kenyan business community. We understand the local challenges and opportunities, from M-Pesa ecosystem integrations to specialized logistics and manufacturing workflows.',
      secondaryContent: 'Our team combines this local insight with international best practices in software engineering and digital strategy, ensuring you get the best of both worlds.',
      locationLabel: 'Industrial Area, Nairobi, KE',
      quote: 'Empowering the heart of Nairobi\'s Industry.',
    },
    journey: [
      {
        title: '1. Consultation',
        description: 'We start with a focused conversation to learn your business, customers, and goals. This is not a surface-level call — we ask the hard questions, map priorities, and define measurable outcomes so every decision that follows is aligned to your growth.',
        label: 'Strategic Alignment',
      },
      {
        title: '2. Discovery & Strategy',
        description: 'Next we research your market, audit your current systems, and build a clear strategy and roadmap. We uncover quick wins and long-term opportunities, prioritize features, and set KPIs so progress is predictable and measurable.',
        label: 'Market Research & Roadmapping',
      },
      {
        title: '3. Branding & Visual Identity',
        description: 'Your brand must perform as well as it looks. We create logo concepts, office/brand visuals, graphic assets and a refined color palette so your business stands out and communicates trust instantly — positioning you to win customers the moment they see you.',
        label: 'Visual Excellence',
      },
      {
        title: '4. Tools & Architecture',
        description: 'We recommend the best, proven tools for your needs — from websites and e-commerce platforms to POS, CRM and sales-management systems. Our selections balance reliability, scalability and user experience so your team can work faster.',
        label: 'Technical Foundation',
      },
      {
        title: '5. Design & Development',
        description: 'We design customer-centric interfaces and develop the full stack: website, e-commerce, mobile apps, POS integrations and internal tools. Every product we build focuses on usability, speed and conversion.',
        label: 'The Build Phase',
      },
      {
        title: '6. Content & Marketing',
        description: 'With platforms in place, we craft marketing materials that help customers find and trust you — posters, banners, product pages, landing pages and campaign creative. Everything is optimized for clarity and conversion.',
        label: 'Impactful Assets',
      },
      {
        title: '7. Go-Live & Launch',
        description: 'Launch is more than a deploy — it’s a coordinated push. We run targeted social and paid campaigns, set up tracking, and fine-tune messaging so your first visitors become real customers.',
        label: 'Igniting Growth',
      },
      {
        title: '8. Social Media Management',
        description: 'Grow your audience with data-driven content and precision targeting. We manage channels, run lead-generation campaigns, and continuously test to turn followers into qualified leads.',
        label: 'Community Engagement',
      },
      {
        title: '9. Maintenance & Support',
        description: 'Sit back — relax. We don’t cut corners on quality. Our team resolves queries, patches security, and keeps systems healthy around the clock so your operations never miss a beat.',
        label: '24/7 Peace of Mind',
      },
      {
        title: '10. Measure & Optimize',
        description: 'This is a long-term partnership. We review KPIs, iterate features, and scale successful programs. You’re not buying a one-off project — you’re investing in a trusted partner that grows with you.',
        label: 'Sustainable Success',
      },
    ],
    techStack: {
      title: 'Our Tech Stack',
      subtitle: 'Modern Tools for African Enterprises',
      technologies: [
        {
          name: 'Next.js & React',
          description: 'High-performance web applications with server-side rendering and interactive UIs.',
          icon: 'nextjs',
        },
        {
          name: 'Node.js & TypeScript',
          description: 'Scalable, type-safe backend services built for enterprise-grade reliability.',
          icon: 'typescript',
        },
        {
          name: 'Python & FastAPI',
          description: 'Modern, high-performance APIs and data-driven solutions.',
          icon: 'python',
        },
        {
          name: 'Mobile Multiplatform',
          description: 'Native-feel iOS and Android apps built with cross-platform efficiency.',
          icon: 'mobile',
        },
        {
          name: 'MongoDB & SQL',
          description: 'Flexible and robust data architectures tailored for speed and security.',
          icon: 'mongodb',
        },
        {
          name: 'Payment Integration',
          description: 'Seamless M-Pesa, Stripe, and global payment gateway connections.',
          icon: 'payment',
        },
        {
          name: 'Cloud Infrastructure',
          description: 'Secure, auto-scaling deployment on Vercel, AWS, and Azure.',
          icon: 'vercel',
        },
        {
          name: 'Cybersecurity',
          description: 'Proactive protection, encryption, and vulnerability management.',
          icon: 'lock',
        },
      ],
    },
  },
}) as any

// 5. Create About and Contact pages
console.log('Creating About and Contact pages...')
const pages = [
  {
    title: 'About Us',
    slug: 'about',
    layout: [
      {
        blockType: 'content',
        columns: [{ size: 'full', link: {}, richText: { root: { type: 'root', children: [{ type: 'paragraph', children: [{ type: 'text', text: 'Master Tech Solutions Center is Nairobi’s premier technology agency. We empower Kenyan businesses with custom software, M-Pesa e-commerce, and digital strategy.' }] }] } } }],
      },
    ],
  },
  {
    title: 'Contact',
    slug: 'contact',
    layout: [
      {
        blockType: 'contact',
        title: 'Get in Touch',
        subtitle: 'We are here to help.',
      },
    ],
  },
]

for (const page of pages) {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: page.slug } },
  })

  if (existing.docs.length === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: page.title,
        slug: page.slug,
        _status: 'published',
        hero: { type: 'none' },
        layout: page.layout as any,
      },
    })
  }
}

console.log('Updating Home page...')
const homePages = await payload.find({
  collection: 'pages',
  where: {
    slug: {
      equals: 'home',
    },
  },
})

const homeData = {
title: 'Home',
slug: 'home',
_status: 'published',
hero: {
  type: 'none',
},
layout: [
  {
    blockType: 'hero',
    title: 'GROW YOUR BUSINESS FASTER WITH SMART DIGITAL SOLUTIONS',
    description: 'Custom software, secure systems and conversion-first digital tools that increase revenue and efficiency.',
    image: consultingMedia.id,
    links: [
      {
        link: {
          type: 'custom',
          url: '/contact',
          label: 'Get A Quote',
          appearance: 'default',
        },
      },
    ],
  },
  {
    blockType: 'content',
    columns: [
      {
        size: 'full',
        richText: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: [
              {
                type: 'paragraph',
                format: 'center',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 1,
                    mode: 'normal',
                    style: '',
                    text: 'YOUR TRUSTED DIGITAL SOLUTIONS PARTNER',
                    version: 1,
                  },
                ],
              },
              {
                type: 'paragraph',
                format: 'center',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Why juggle multiple providers when everything you need is right here? At Master Tech Solutions Center, we bring all your digital needs under one roof from Strategy, Development, and Installation to Marketing, Social Media Management, Automation, and IT support. Our services are built on Reliability, Consistency, and Proven expertise, so you never have to worry about fragmented results or managing different vendors. As your dedicated partner, we simplify your Digital Journey, save you valuable time, and fuel sustainable growth. One team, one vision, and every solution your business needs — all in one place.',
                    version: 1,
                  },
                ],
              },
            ],
          },
        },
      },
    ],
  },
  {
    blockType: 'timeline',    title: 'Our Journey Into Success',
    steps: [
      { title: '1. Consultation', description: 'Understanding your business needs.' },
      { title: '2. Discovery & Strategy', description: 'Defining the roadmap for success.' },
      { title: '3. Branding & Visual Identity', description: 'Crafting your unique look.' },
      { title: '4. Tools & Architecture', description: 'Recommending the best tech stack.' },
      { title: '5. Design & Development', description: 'Building your solution.' },
      { title: '6. Content & Marketing Collateral', description: 'Creating engaging assets.' },
      { title: '7. Go-Live & Launch Marketing', description: 'Taking your business to the market.' },
      { title: '8. Social Media Management', description: 'Driving engagement online.' },
      { title: '9. Maintenance & 24/7 Support', description: 'Keeping things running smoothly.' },
      { title: '10. Measure, Optimize & Grow', description: 'Iterating for better results.' },
    ],
  },  {
    blockType: 'servicesGrid',
    title: 'Digital Transformation & Technology',
    subtitle: 'Digitize operations, automate workflows, and leverage data to boost efficiency and revenue',
    service: digitalService.id,
  },    {
      blockType: 'consulting',
      title: "Let's Talk About Your Digital Strategy",
      subtitle: 'Consulting & Digital Strategy',
      description: 'At Master Tech Solutions Center, we understand that every business in Kenya needs a tailored digital strategy to thrive in today\'s competitive market. Our consulting services are designed to help your brand increase online visibility, streamline operations, and drive meaningful growth. From social media campaigns to website optimization, we craft strategies that align with your business goals and target audience. Partnering with us means leveraging expert insights, innovative solutions, and hands-on support to ensure your digital presence is strong, measurable, and impactful. Whether you are a startup or an established company, our proven strategies will help you attract more customers, enhance brand credibility, and maximize ROI. Don\'t wait—come consult with us today and unlock the full potential of your digital growth in Kenya and beyond.',
      image: consultingMedia.id,
      links: [
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Schedule a Consultation',
            appearance: 'default',
          },
        },
      ],
    },
  ],
}

if (homePages.docs.length > 0) {
  await payload.update({
    collection: 'pages',
    id: homePages.docs[0].id,
    data: homeData as any,
  })
} else {
  await payload.create({
    collection: 'pages',
    data: homeData as any,
  })
}

console.log('Seed process completed successfully!')
process.exit(0)
}

if (process.argv.includes('--run')) {
  seed()
    .then(() => {
      process.exit(0)
    })
    .catch((err) => {
      console.error('Seed failed:', err)
      process.exit(1)
    })
}
