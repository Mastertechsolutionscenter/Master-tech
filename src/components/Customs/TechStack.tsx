'use client'
import React from 'react'
import { TitleText } from '@/components/Basic/CustomText'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import { 
  FaPython, 
  FaMobileAlt, 
  FaLock, 
  FaSearchDollar 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiVercel,
} from 'react-icons/si'

interface Technology {
    name: string
    description: string
    icon?: string | null
    id?: string | null
}

interface TechStackProps {
    title?: string | null
    subtitle?: string | null
    technologies?: Technology[] | null
}

const iconMap: Record<string, React.ReactNode> = {
    nextjs: <SiNextdotjs className="w-8 h-8" />,
    typescript: <SiTypescript className="w-8 h-8" />,
    python: <FaPython className="w-8 h-8" />,
    mobile: <FaMobileAlt className="w-8 h-8" />,
    mongodb: <SiMongodb className="w-8 h-8" />,
    payment: <FaSearchDollar className="w-8 h-8" />,
    vercel: <SiVercel className="w-8 h-8" />,
    lock: <FaLock className="w-8 h-8" />,
}

const defaultTechnologies = [
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
]

export default function TechStack({ title, subtitle, technologies }: TechStackProps) {
  const displayTitle = title || 'Our Tech Stack'
  const displaySubtitle = subtitle || 'Modern Tools for African Enterprises'
  const displayTech = technologies || defaultTechnologies

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="w-full relative z-10">
        <TitleText title={<>{displayTitle}</>} textStyles="text-center" />
        
        <div className="w-full flex items-center text-center justify-center mb-16">
          <h2 className="exterior text-2xl md:text-5xl font-bold text-center dark:text-white max-w-4xl">
            {displaySubtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTech.map((tech, index) => (
            <div key={index} className="relative h-full">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative h-full rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/50 p-8 flex flex-col items-center text-center transition-all hover:scale-[1.02]">
                <div className="mb-6 p-4 rounded-xl bg-white dark:bg-black text-[#A67C00] shadow-sm">
                  {(tech.icon && iconMap[tech.icon]) || <SiNextdotjs className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto italic text-sm">
                We select our tools based on speed, security, and scalability — ensuring your business stays ahead of the competition in the Kenyan market.
            </p>
        </div>
      </div>
    </section>
  )
}
