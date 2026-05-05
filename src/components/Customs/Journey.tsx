'use client'
import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'

interface JourneyStep {
  title: string
  description: string
  label: string
  id?: string | null
}

interface JourneyProps {
  steps?: JourneyStep[] | null
}

const defaultContent = [
  {
    title: '1. Consultation',
    description:
      'We start with a focused conversation to learn your business, customers, and goals. This is not a surface-level call — we ask the hard questions, map priorities, and define measurable outcomes so every decision that follows is aligned to your growth.',
    label: 'Strategic Alignment',
  },
  {
    title: '2. Discovery & Strategy',
    description:
      'Next we research your market, audit your current systems, and build a clear strategy and roadmap. We uncover quick wins and long-term opportunities, prioritize features, and set KPIs so progress is predictable and measurable.',
    label: 'Market Research & Roadmapping',
  },
  {
    title: '3. Branding & Visual Identity',
    description:
      'Your brand must perform as well as it looks. We create logo concepts, office/brand visuals, graphic assets and a refined color palette so your business stands out and communicates trust instantly — positioning you to win customers the moment they see you.',
    label: 'Visual Excellence',
  },
  {
    title: '4. Tools & Architecture',
    description:
      'We recommend the best, proven tools for your needs — from websites and e-commerce platforms to POS, CRM and sales-management systems. Our selections balance reliability, scalability and user experience so your team can work faster.',
    label: 'Technical Foundation',
  },
  {
    title: '5. Design & Development',
    description:
      'We design customer-centric interfaces and develop the full stack: website, e-commerce, mobile apps, POS integrations and internal tools. Every product we build focuses on usability, speed and conversion.',
    label: 'The Build Phase',
  },
  {
    title: '6. Content & Marketing',
    description:
      'With platforms in place, we craft marketing materials that help customers find and trust you — posters, banners, product pages, landing pages and campaign creative. Everything is optimized for clarity and conversion.',
    label: 'Impactful Assets',
  },
  {
    title: '7. Go-Live & Launch',
    description:
      'Launch is more than a deploy — it’s a coordinated push. We run targeted social and paid campaigns, set up tracking, and fine-tune messaging so your first visitors become real customers.',
    label: 'Igniting Growth',
  },
  {
    title: '8. Social Media Management',
    description:
      'Grow your audience with data-driven content and precision targeting. We manage channels, run lead-generation campaigns, and continuously test to turn followers into qualified leads.',
    label: 'Community Engagement',
  },
  {
    title: '9. Maintenance & Support',
    description:
      'Sit back — relax. We don’t cut corners on quality. Our team resolves queries, patches security, and keeps systems healthy around the clock so your operations never miss a beat.',
    label: '24/7 Peace of Mind',
  },
  {
    title: '10. Measure & Optimize',
    description:
      'This is a long-term partnership. We review KPIs, iterate features, and scale successful programs. You’re not buying a one-off project — you’re investing in a trusted partner that grows with you.',
    label: 'Sustainable Success',
  },
]

const gradients = [
    'bg-[linear-gradient(135deg,#A67C00,#FFC300,#FFB200,#FFAA00)]',
    'bg-[linear-gradient(135deg,#000000,#333333,#666666)]',
    'bg-[linear-gradient(to_bottom_right,var(--orange-500),#A67C00)]',
    'bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]',
    'bg-[linear-gradient(to_bottom_right,#000000,#A67C00)]',
    'bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))]',
    'bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))]',
    'bg-[linear-gradient(to_bottom_right,#1DA1F2,#0077B5)]',
    'bg-[linear-gradient(to_bottom_right,#333333,#000000)]',
    'bg-[linear-gradient(to_bottom_right,#FFD700,#A67C00)]',
]

export function Journey({ steps }: JourneyProps) {
  const displaySteps = steps || defaultContent
  
  const content = displaySteps.map((step, i) => ({
    title: step.title,
    description: step.description,
    content: (
        <div className={`flex h-full w-full items-center justify-center ${gradients[i % gradients.length]} text-white font-bold text-xl px-4 text-center`}>
          {step.label}
        </div>
    )
  }))

  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  )
}
