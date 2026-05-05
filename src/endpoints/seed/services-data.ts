import type { Service, SubService } from '../../payload-types'

export const subServicesData: (Omit<SubService, 'id' | 'createdAt' | 'updatedAt' | 'sizes'> & {
  id?: string
})[] = [
  // SOFTWARE & APP DEVELOPMENT
  {
    title: 'Custom Web Applications',
    slug: 'custom-web-apps',
    description: 'High-performance, scalable web platforms built with Next.js and Node.js to solve complex business challenges.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Engineering for Kenyan Scale', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'In an era where digital presence is the primary driver of business growth, a standard website is no longer enough. We build custom web platforms that act as your 24/7 digital workforce—automating complex workflows, securing sensitive data, and providing a lightning-fast experience that keeps users engaged.', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Most off-the-shelf software fails when it hits the reality of the East African market—varied internet speeds, mobile-heavy traffic, and unique payment behaviors. Our applications are built using a \'Mobile-First, Edge-Ready\' philosophy. This means your platform remains responsive even on 3G networks in rural areas while scaling instantly to handle thousands of concurrent users during peak hours.', version: 1 }],
          },
        ],
      },
    },
    heroSection: {
      title: 'Engineering for Kenyan Scale',
      valueStatement: 'In an era where digital presence is the primary driver of business growth, a standard website is no longer enough. We build custom web platforms that act as your 24/7 digital workforce.',
      ctaText: 'Start Building',
    },
    overviewSection: {
      title: 'Built for Performance',
      description: 'Most off-the-shelf software fails when it hits the reality of the East African market—varied internet speeds, mobile-heavy traffic, and unique payment behaviors.',
    },
    techSection: {
      techStack: [
        { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend', description: 'Server-side rendering for elite speed.' },
        { name: 'Node.js', icon: 'FaNodeJs', category: 'backend', description: 'Scalable event-driven architecture.' },
        { name: 'TypeScript', icon: 'SiTypescript', category: 'security', description: 'Type-safe code to prevent production errors.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Week 1', title: 'Discovery & UI/UX Wireframing', description: 'Deep dive into business logic and user journey mapping.' },
        { day: 'Week 2-3', title: 'Core Feature Development', description: 'Building the functional MVP and API integrations.' },
        { day: 'Week 4', title: 'Security & Deployment', description: 'Final auditing and launch on high-performance cloud infrastructure.' },
      ],
    },
  },
  {
    title: 'E-commerce & M-Pesa Integration',
    slug: 'ecommerce-mpesa',
    description: 'Conversion-focused online stores with deep M-Pesa Daraja API integration for seamless local payments.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'The Power of STK Push & Automated Reconciliation', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'E-commerce in Africa is unique. It’s not just about a shopping cart; it’s about building trust and removing friction in the payment process. We build high-conversion online stores that treat M-Pesa as a first-class citizen, ensuring your customers can go from \'browsing\' to \'paid\' in under 30 seconds.', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Forget manual confirmation codes. We implement advanced M-Pesa Daraja 2.0 API integrations featuring STK Push (Lipa Na M-Pesa Online). This allows a payment prompt to appear directly on your customer\'s phone—no typing errors, no friction.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'React', icon: 'FaReact', category: 'frontend', description: 'Interactive shopping experiences.' },
        { name: 'M-Pesa API', icon: 'FaSearchDollar', category: 'backend', description: 'Deep API integration with Daraja and STK Push.' },
        { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'design', description: 'Mobile-first, premium styling.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Day 1-7', title: 'Store Architecture', description: 'Product catalog mapping and M-Pesa sandbox setup.' },
        { day: 'Day 8-21', title: 'Checkout Optimization', description: 'Building the seamless STK Push flow.' },
        { day: 'Day 22-30', title: 'Live Testing & Go-Live', description: 'Reconciliation testing and final staff training.' },
      ],
    },
  },

  // DIGITAL MARKETING & GROWTH
  {
    title: 'SEO & Content Authority',
    slug: 'seo-content-authority',
    description: 'Dominating the search landscape in Kenya through technical SEO and high-intent content strategies.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Moving from Invisible to #1 Choice', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Search has evolved beyond simple keywords to intent and location-based queries. Our technical SEO services ensure your business is the first thing potential clients see when searching for solutions in Westlands, Upper Hill, or the wider East African region.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'Google Analytics 4', icon: 'FaSearchDollar', category: 'devops', description: 'Advanced behavior tracking.' },
        { name: 'Ahrefs/SEMRush', icon: 'FaSearchDollar', category: 'design', description: 'Deep keyword intelligence.' },
        { name: 'Payload CMS', icon: 'SiNextdotjs', category: 'backend', description: 'SEO-optimized headless delivery.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Phase 1', title: 'Technical Audit', description: 'Fixing site speed, indexing, and mobile responsiveness.' },
        { day: 'Phase 2', title: 'Keyword Intelligence', description: 'Mapping high-intent clusters your competitors are missing.' },
        { day: 'Phase 3', title: 'Authority Build', description: 'Rollout of pillar content and backlink strategy.' },
      ],
    },
  },
  {
    title: 'Social Media Strategy & Paid Ads',
    slug: 'social-media-ads',
    description: 'Precision targeting on LinkedIn, Instagram, and Meta to drive high-quality B2B and B2C leads.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Hyper-Precision Targeting', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'We don\'t just chase likes; we chase ROI. Our paid ad strategies use advanced predictive lead scoring to identify high-value decision-makers in Kenya\'s leading corporates.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'Meta Ads Manager', icon: 'FaReact', category: 'design', description: 'High-conversion visual storytelling.' },
        { name: 'LinkedIn Campaign Manager', icon: 'FaLock', category: 'security', description: 'Precision B2B targeting.' },
        { name: 'HubSpot', icon: 'SiNextdotjs', category: 'devops', description: 'Marketing operations automation.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Week 1', title: 'Audience Persona Mapping', description: 'Defining the high-intent buyer profiles.' },
        { day: 'Week 2', title: 'Creative Development', description: 'Building high-impact video and static assets.' },
        { day: 'Week 3-4', title: 'Campaign Launch & Scaling', description: 'A/B testing and performance optimization.' },
      ],
    },
  },

  // INFRASTRUCTURE & CYBERSECURITY
  {
    title: 'Zero Trust Security & AI Defense',
    slug: 'zero-trust-security',
    description: 'Protecting your business with identity-centric security and predictive threat intelligence.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Predictive, Identity-Centric Defense', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'In 2026, a firewall isn\'t enough. You need a system that assumes every request is a threat until proven otherwise. We implement Zero Trust architectures paired with AI models that detect and block attacks before they happen.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'Arcjet', icon: 'FaLock', category: 'security', description: 'Bot protection and rate-limiting at the edge.' },
        { name: 'AWS IAM', icon: 'SiAmazonwebservices', category: 'security', description: 'Granular identity access management.' },
        { name: 'Terraform', icon: 'SiVercel', category: 'devops', description: 'Infrastructure as Code for predictability.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Week 1', title: 'Vulnerability Audit', description: 'Deep scan of existing network and app infrastructure.' },
        { day: 'Week 2', title: 'IAM Implementation', description: 'Setup of passwordless and biometric authentication.' },
        { day: 'Week 3-4', title: 'AI Monitoring Launch', description: 'Automated threat hunting and incident response setup.' },
      ],
    },
  },

  // BRANDING & VISUAL IDENTITY
  {
    title: 'Dynamic Brand Systems',
    slug: 'dynamic-brand-systems',
    description: 'Moving beyond logos to create adaptive, scalable identity systems designed for a digital-first world.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Liquid Identities for Modern Platforms', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'We build visual identities that are "liquid"—working as well on a smartwatch or AR headset as they do on a billboard. Our systems ensure your brand is consistent, accessible, and high-impact.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'Figma', icon: 'SiTypescript', category: 'design', description: 'Collaborative interface design.' },
        { name: 'Framer Motion', icon: 'SiFramermotion', category: 'frontend', description: 'Bringing brand movement to life.' },
        { name: 'Adobe CC', icon: 'SiTailwindcss', category: 'design', description: 'Industry-standard asset creation.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Week 1', title: 'Visual Audit', description: 'Market positioning and mood-boarding.' },
        { day: 'Week 2-3', title: 'System Build', description: 'Developing responsive logos and type systems.' },
        { day: 'Week 4', title: 'Brand Portal', description: 'Launch of the living digital brand guidelines.' },
      ],
    },
  },

  // CONSULTING & DIGITAL STRATEGY
  {
    title: 'Digital Transformation Roadmap',
    slug: 'digital-transformation',
    description: 'De-risking your technology investments by aligning your tech stack with measurable business ROI.',
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        direction: 'ltr',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Architecting AI-Native Ecosystems', version: 1 }],
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [{ type: 'text', text: 'Agencies are no longer just implementing tools; they are redesigning business models to thrive in an era of hyper-automation and data-driven decision-making. We provide a 12-to-24 month technical roadmap.', version: 1 }],
          },
        ],
      },
    },
    techSection: {
      techStack: [
        { name: 'Tableau/PowerBI', icon: 'FaSearchDollar', category: 'devops', description: 'Visualizing ROI and KPIs.' },
        { name: 'Notion/Linear', icon: 'SiNextdotjs', category: 'design', description: 'Roadmap and project transparency.' },
        { name: 'GA4', icon: 'FaSearchDollar', category: 'devops', description: 'Data-driven decision making.' },
      ],
    },
    processSection: {
      roadmap: [
        { day: 'Step 1', title: 'Maturity Assessment', description: 'Interviewing stakeholders and goal alignment.' },
        { day: 'Step 2', title: 'Tech Stack Audit', description: 'Identifying debt and "quick-win" opportunities.' },
        { day: 'Step 3-4', title: 'Roadmap Launch', description: 'Final strategy delivery and execution framework.' },
      ],
    },
  },
]

export const servicesData: (Omit<Service, 'id' | 'createdAt' | 'updatedAt'> & {
  id?: string
  subServicesSlugs: string[]
})[] = [
  {
    title: 'Software & Application Development',
    slug: 'software-application-development',
    description: 'We build the digital backbone of your business. From high-speed web apps to complex M-Pesa integrated e-commerce platforms, our software is engineered for Kenyan scale and global performance.',
    subServicesSlugs: ['custom-web-apps', 'ecommerce-mpesa'],
  },
  {
    title: 'Digital Marketing & Growth',
    slug: 'digital-marketing-growth',
    description: 'Dominating the Kenyan search landscape through data-driven SEO, high-precision paid ads, and conversational WhatsApp marketing that converts traffic into loyal customers.',
    subServicesSlugs: ['seo-content-authority', 'social-media-ads'],
  },
  {
    title: 'Branding & Visual Identity',
    slug: 'branding-visual-identity',
    description: 'Crafting premium, dynamic identities that scale. From responsive logo systems to enterprise design systems, we ensure your brand looks elite on every screen.',
    subServicesSlugs: ['dynamic-brand-systems'],
  },
  {
    title: 'Infrastructure & Cybersecurity',
    slug: 'infrastructure-cybersecurity',
    description: 'Resilient, locally-hosted, and sovereign infrastructure paired with proactive AI-driven cybersecurity to protect your business logic and sensitive data.',
    subServicesSlugs: ['zero-trust-security'],
  },
  {
    title: 'Consulting & Digital Strategy',
    slug: 'consulting-digital-strategy',
    description: 'De-risking your digital journey. We provide multi-year transformation roadmaps that align technology with your core business objectives for maximum ROI.',
    subServicesSlugs: ['digital-transformation'],
  },
]
