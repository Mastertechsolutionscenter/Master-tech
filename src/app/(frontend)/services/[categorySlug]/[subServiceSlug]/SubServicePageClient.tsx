'use client'

import React from 'react'
import { TitleText } from '@/components/Basic/CustomText'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { motion } from 'framer-motion'
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiFastapi, 
  SiVercel, 
  SiAmazonwebservices,
  SiTailwindcss,
  SiFramer,
  SiTypescript
} from 'react-icons/si'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaSearchDollar, 
  FaLock,
  FaArrowRight
} from 'react-icons/fa'
import { 
  CheckCircle2, 
  Users, 
  Zap, 
  Briefcase, 
  Rocket, 
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Magnetic from '@/components/ui/magnetic'

const IconMap: { [key: string]: any } = {
  SiNextdotjs: <SiNextdotjs className="w-8 h-8" />,
  FaReact: <FaReact className="w-8 h-8" />,
  FaNodeJs: <FaNodeJs className="w-8 h-8" />,
  FaPython: <FaPython className="w-8 h-8" />,
  SiMongodb: <SiMongodb className="w-8 h-8" />,
  SiPostgresql: <SiPostgresql className="w-8 h-8" />,
  SiFastapi: <SiFastapi className="w-8 h-8" />,
  FaSearchDollar: <FaSearchDollar className="w-8 h-8" />,
  FaLock: <FaLock className="w-8 h-8" />,
  SiVercel: <SiVercel className="w-8 h-8" />,
  SiAmazonwebservices: <SiAmazonwebservices className="w-8 h-8" />,
  SiTailwindcss: <SiTailwindcss className="w-8 h-8" />,
  SiFramer: <SiFramer className="w-8 h-8" />,
  SiTypescript: <SiTypescript className="w-8 h-8" />,
}

interface ClientProps {
  subService: any
  categorySlug: string
}

export default function SubServicePageClient({ subService, categorySlug }: ClientProps) {
  const roadmapData = subService.processSection?.roadmap || subService.roadmap || []
  const techStack = subService.techSection?.techStack || subService.techStack || []

  const SectionBackground = ({ image, children, className = "", id = "" }: { image?: any, children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Media resource={image} fill imgClassName="object-cover" />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  )

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* 1. HERO SECTION */}
      <SectionBackground image={subService.heroSection?.backgroundImage} className="pt-32 pb-20 bg-neutral-50 dark:bg-zinc-900/30">
        <div className="w-11/12 lg:w-4/5 mx-auto relative z-10">
          <Breadcrumbs />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 max-w-4xl"
          >
            <h2 className="text-[#A67C00] font-bold text-sm uppercase tracking-widest mb-4">
              {categorySlug.replace(/-/g, ' ')}
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight mb-6">
              {subService.heroSection?.title || subService.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
              {subService.heroSection?.valueStatement || subService.description}
            </p>
            <Magnetic>
              <Link 
                href="#contact-section" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity"
              >
                {subService.heroSection?.ctaText || "Request a Consultation"}
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </SectionBackground>

      {/* 2. OVERVIEW / INTRODUCTION */}
      <SectionBackground image={subService.overviewSection?.backgroundImage} className="py-24">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                {subService.overviewSection?.title || `Understanding ${subService.title}`}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {subService.overviewSection?.description || "In the rapidly evolving digital landscape, we provide the expertise needed to stay ahead. Our solutions are built with a focus on scalability, security, and exceptional user experience."}
              </p>
            </motion.div>

            {subService.kenyanContext && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12 p-8 rounded-3xl bg-[#A67C00]/5 border border-[#A67C00]/20"
              >
                <h3 className="text-[#A67C00] font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A67C00]" />
                  Kenya Market Insight
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  &quot;{subService.kenyanContext}&quot;
                </p>
              </motion.div>
            )}
            
            <div className="prose dark:prose-invert max-w-none mb-16">
              <RichText data={subService.content} />
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* 3. WHAT WE OFFER */}
      {subService.offerings?.features && subService.offerings.features.length > 0 && (
        <SectionBackground image={subService.offerings.backgroundImage} className="py-24 bg-neutral-50 dark:bg-zinc-900/10">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <h3 className="text-3xl font-bold mb-10 dark:text-white text-center">
              {subService.offerings.title || "Capabilities & Features"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subService.offerings.features.map((feature: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-[#8B6800] bg-[#A67C00] shadow-xl"
                >
                  <h4 className="font-bold text-white mb-4 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-white/80" />
                    {feature.title}
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {/* 4. AUDIENCE & TECHNOLOGY SIDE-BY-SIDE */}
      <div className="py-24">
        <div className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 4. WHO THIS SERVICE IS FOR */}
          {subService.audience?.types && subService.audience.types.length > 0 && (
            <SectionBackground image={subService.audience.backgroundImage} className="rounded-[2.5rem] overflow-hidden shadow-2xl h-fit">
              <div className="p-10 bg-black/60 backdrop-blur-md text-white h-full">
                <Users className="w-12 h-12 text-[#A67C00] mb-8" />
                <h3 className="text-3xl font-bold mb-6">{subService.audience.title || "Ideal For"}</h3>
                <ul className="space-y-6">
                  {subService.audience.types.map((type: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-4 text-xl text-neutral-200">
                      <ChevronRight className="w-6 h-6 text-[#A67C00]" />
                      {type.name}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBackground>
          )}

          {/* 7. TECHNOLOGY */}
          {techStack.length > 0 && (
            <SectionBackground image={subService.techSection?.backgroundImage} className="rounded-[2.5rem] overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-2xl h-fit">
              <div className="p-10 bg-neutral-50/70 dark:bg-zinc-900/70 backdrop-blur-md h-full">
                <h3 className="text-3xl font-bold mb-8 dark:text-white">
                  {subService.techSection?.title || "Technology Stack"}
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {techStack.map((tech: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="relative p-6 rounded-2xl bg-[#A67C00] border border-[#8B6800] shadow-lg overflow-hidden group"
                    >
                      <GlowingEffect
                        blur={0}
                        borderWidth={1}
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-3">
                          <div className="text-white">
                            {IconMap[tech.icon] || <FaNodeJs className="w-8 h-8" />}
                          </div>
                          <span className="font-bold text-lg text-white">{tech.name}</span>
                        </div>
                        {tech.description && (
                          <p className="text-sm text-white/90 leading-relaxed">
                            {tech.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionBackground>
          )}
        </div>
      </div>

      {/* 5. OUR APPROACH / PROCESS */}
      {roadmapData.length > 0 && (
        <SectionBackground image={subService.processSection?.backgroundImage} className="py-24 bg-neutral-50 dark:bg-zinc-900/30">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
                {subService.processSection?.title || "Our Delivery Process"}
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                {subService.processSection?.description || "We follow a structured methodology to ensure your project is delivered on time, within budget, and to the highest quality standards."}
              </p>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 dark:before:via-neutral-800 before:to-transparent">
              {roadmapData.map((step: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-neutral-100 dark:bg-zinc-900 dark:border-zinc-800 text-[#A67C00] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:border-[#A67C00]">
                    <div className="flex items-center justify-between space-x-2 mb-2">
                      <div className="font-bold text-xl text-black dark:text-white">{step.title}</div>
                      <time className="font-bold text-xs text-[#A67C00] uppercase tracking-wider">{step.day}</time>
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {/* 6. KEY BENEFITS */}
      {subService.benefitsSection?.benefits && subService.benefitsSection.benefits.length > 0 && (
        <SectionBackground image={subService.benefitsSection?.backgroundImage} className="py-24">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center dark:text-white">
              {subService.benefitsSection.title || "Business Impact & Benefits"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subService.benefitsSection.benefits.map((benefit: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2.5rem] bg-[#A67C00] border border-[#8B6800] text-center group transition-all duration-500 shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">{benefit.title}</h4>
                  <p className="text-white/90 group-hover:text-white transition-colors">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {/* 8. OPTIONAL: SAMPLE USE CASES */}
      {subService.useCasesSection?.cases && subService.useCasesSection.cases.length > 0 && (
        <SectionBackground image={subService.useCasesSection?.backgroundImage} className="py-24 bg-black text-white overflow-hidden relative">
          <div className="w-11/12 lg:w-4/5 mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              {subService.useCasesSection.title || "Practical Applications"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subService.useCasesSection.cases.map((useCase: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex gap-6 items-start hover:border-[#A67C00] transition-colors"
                >
                  <Briefcase className="w-8 h-8 text-[#A67C00] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-3">{useCase.scenario}</h4>
                    <p className="text-neutral-400 leading-relaxed">{useCase.application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionBackground>
      )}

      {/* 9. CTA SECTION */}
      <SectionBackground image={subService.ctaSection?.backgroundImage} id="contact-section" className="py-24">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <div className="p-12 md:p-20 rounded-[3rem] bg-[#A67C00] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <Rocket className="w-16 h-16 text-white mx-auto mb-8 animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                {subService.ctaSection?.title || "Ready to innovate?"}
              </h2>
              <p className="text-xl text-white/90 mb-12">
                {subService.ctaSection?.description || `Take the first step towards your custom ${subService.title} solution today.`}
              </p>
              <Magnetic>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-100 transition-all hover:scale-105"
                >
                  {subService.ctaSection?.buttonText || "Start Your Project"}
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </Magnetic>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </SectionBackground>
    </div>
  )
}
