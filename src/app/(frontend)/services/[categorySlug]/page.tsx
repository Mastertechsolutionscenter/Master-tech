import React from 'react'
import { notFound } from 'next/navigation'
import { ServiceRegistry } from '@/services/business/ServiceRegistry'
import { TitleText } from '@/components/Basic/CustomText'
import Link from 'next/link'
import { ServicesClient } from '../ServicesClient'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import FAQSection from '@/components/Customs/FAQSection'
import { getFAQsAction } from '@/services/business/actions'
import { Media } from '@/components/Media'
import { Timeline } from '@/components/ui/timeline'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import Magnetic from '@/components/ui/magnetic'
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Users, 
  Code2, 
  Rocket 
} from 'lucide-react'

interface PageProps {
  params: Promise<{
    categorySlug: string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { categorySlug } = await params
  const service = await ServiceRegistry.getBySlug(categorySlug)
  
  if (!service) return { title: 'Service Not Found' }

  const baseUrl = 'https://mastertechsolutionscenter.com'
  
  return {
    title: `${service.title} | Master Tech Solutions Center Kenya`,
    description: `${service.description} Get expert ${service.title.toLowerCase()} tailored for the Kenyan market.`,
    keywords: [
      service.title,
      ...(service.subServices || []).map((s: any) => s.title),
      'software company Nairobi',
      'tech solutions Kenya',
      'digital agency Nairobi'
    ],
    openGraph: {
      title: `${service.title} | Premium Tech Solutions`,
      description: service.description,
      url: `${baseUrl}/services/${categorySlug}`,
      siteName: 'Master Tech Solutions Center',
      images: [
        {
          url: '/website-template-OG.webp',
          width: 1200,
          height: 630,
          alt: `Master Tech Solutions: ${service.title}`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Master Tech Solutions`,
      description: service.description,
    },
  }
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { categorySlug } = await params
  const service = await ServiceRegistry.getBySlug(categorySlug)

  if (!service) {
    notFound()
  }

  const faqs = service?.id ? await getFAQsAction(service.id) : []

  const processData = service.processSection?.steps?.map((step: any) => ({
    title: step.title,
    content: (
      <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-zinc-900 border border-neutral-100 dark:border-neutral-800">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    )
  })) || []

  const SectionBackground = ({ image, children, className = "", id = "" }: { image?: any, children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Media resource={image} fill imgClassName="object-cover" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  )

  return (
    <ServicesClient>
      <div className="bg-white dark:bg-black min-h-screen">
        {/* HERO SECTION */}
        <SectionBackground image={service.hero?.backgroundImage} className="pt-32 pb-20">
          <div className="w-11/12 lg:w-4/5 mx-auto relative z-10">
            <Breadcrumbs />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight mb-6">
                  {service.hero?.title || service.title}
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-xl">
                  {service.hero?.subtitle || service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Magnetic>
                    <Link 
                      href="#contact-section" 
                      className="px-8 py-4 rounded-full bg-[#A67C00] text-white font-bold hover:bg-[#8B6800] transition-colors flex items-center gap-2"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link 
                      href="#sub-services" 
                      className="px-8 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 text-black dark:text-white font-bold hover:bg-neutral-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                      Explore Services
                    </Link>
                  </Magnetic>
                </div>
              </div>
              {service.hero?.image && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-neutral-800 aspect-square lg:aspect-video">
                  <Media resource={service.hero.image} imgClassName="object-cover w-full h-full" />
                </div>
              )}
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#A67C00]/10 blur-[120px] rounded-full" />
        </SectionBackground>

        {/* INTRO SECTION */}
        {service.intro?.title && (
          <SectionBackground image={service.intro.backgroundImage} className="py-20 bg-neutral-50 dark:bg-zinc-900/50">
            <div className="w-11/12 lg:w-4/5 mx-auto text-center max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{service.intro.title}</h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.intro.description}
              </p>
            </div>
          </SectionBackground>
        )}

        {/* KENYAN CONTEXT */}
        {service.kenyanContext && (
          <SectionBackground image={service.kenyanContextBackgroundImage} className="py-20">
            <div className="w-11/12 lg:w-4/5 mx-auto relative z-10">
              <div className="p-10 rounded-[2.5rem] bg-[#A67C00]/5 border border-[#A67C00]/20 flex flex-col md:flex-row gap-10 items-center backdrop-blur-md">
                <div className="w-20 h-20 rounded-2xl bg-[#A67C00] flex items-center justify-center shrink-0">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#A67C00]">Kenya Market Insight</h3>
                  <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    &quot;{service.kenyanContext}&quot;
                  </p>
                </div>
              </div>
            </div>
          </SectionBackground>
        )}

        {/* SUB-SERVICES GRID */}
        <SectionBackground image={service.subServicesGrid?.backgroundImage} id="sub-services" className="py-24">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
                {service.subServicesGrid?.title || "Our Specialized Solutions"}
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                {service.subServicesGrid?.description || "Expert-led services tailored to your specific business needs and industry standards."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(service.subServices || []).map((sub: any, idx: number) => (
                <Link 
                  key={idx} 
                  href={`/services/${categorySlug}/${sub.slug}`}
                  className="group relative p-1 rounded-[2rem] overflow-hidden transition-all hover:scale-[1.01]"
                >
                  <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative h-full p-8 rounded-[1.9rem] bg-[#A67C00] border border-[#8B6800] transition-colors flex flex-col z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {sub.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed flex-grow">
                      {sub.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionBackground>

        {/* SOLUTIONS SECTION */}
        {service.solutions?.items && (service.solutions.items || []).length > 0 && (
          <SectionBackground image={service.solutions.backgroundImage} className="py-24 bg-neutral-50 dark:bg-zinc-900/50">
            <div className="w-11/12 lg:w-4/5 mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white">
                  {service.solutions.title || "What We Can Build For You"}
                </h2>
                {service.solutions.description && (
                  <p className="text-xl text-neutral-600 dark:text-neutral-400">
                    {service.solutions.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {(service.solutions.items || []).map((item: any, idx: number) => (
                  <div key={idx} className="relative group">
                    <GlowingEffect
                      blur={0}
                      borderWidth={2}
                      spread={60}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <BackgroundGradient className="rounded-[22px] h-full p-8 bg-white dark:bg-zinc-900 flex flex-col relative z-10">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-4">{item.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </BackgroundGradient>
                  </div>
                ))}
              </div>
            </div>
          </SectionBackground>
        )}

        {/* PROCESS SECTION */}
        {processData.length > 0 && (
          <SectionBackground image={service.processSection?.backgroundImage} className="py-24">
            <div className="w-full">
              <div className="w-11/12 lg:w-4/5 mx-auto mb-10">
                <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
                  {service.processSection?.title || "Our Development Process"}
                </h2>
                {service.processSection?.description && (
                  <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
                    {service.processSection.description}
                  </p>
                )}
              </div>
              <Timeline data={processData} />
            </div>
          </SectionBackground>
        )}

        {/* WHY CHOOSE US & BENEFITS */}
        <SectionBackground image={service.whyChooseUs?.backgroundImage || service.benefits?.backgroundImage} className="py-24 bg-black text-white overflow-hidden relative">
          <div className="w-11/12 lg:w-4/5 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10">
                  {service.whyChooseUs?.title || "Why Choose Master Tech"}
                </h2>
                <div className="space-y-8">
                  {(service.whyChooseUs?.points || []).map((point: any, idx: number) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#A67C00] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                        <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10">
                  {service.benefits?.title || "Key Benefits"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(service.benefits?.items || []).map((item: any, idx: number) => (
                    <div key={idx} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A67C00] transition-colors">
                      <CheckCircle2 className="w-8 h-8 text-[#A67C00] mb-4" />
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionBackground>

        {/* TRUST SECTION */}
        {service.trust?.title && (
          <SectionBackground image={service.trust.backgroundImage} className="py-24 text-center">
            <div className="w-11/12 lg:w-4/5 mx-auto max-w-4xl">
              <Users className="w-16 h-16 text-[#A67C00] mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{service.trust.title}</h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.trust.description}
              </p>
            </div>
          </SectionBackground>
        )}

        {/* CTA SECTION */}
        <SectionBackground image={service.cta?.backgroundImage} id="contact-section" className="py-24">
          <div className="w-11/12 lg:w-4/5 mx-auto">
            <div className="relative rounded-[3rem] bg-[#A67C00] p-12 md:p-20 overflow-hidden text-center text-white shadow-2xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                <Rocket className="w-16 h-16 text-white mx-auto mb-8 animate-bounce" />
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                  {service.cta?.title || "Ready to build the future?"}
                </h2>
                <p className="text-xl text-white/90 mb-12 leading-relaxed">
                  {service.cta?.description || "Let's turn your vision into a high-performance reality. Our experts are ready to discuss your next big project."}
                </p>
                <Magnetic>
                  <Link 
                    href={service.cta?.link || "/contact"} 
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-neutral-100 transition-all hover:scale-105"
                  >
                    {service.cta?.buttonText || "Request a Free Quote"}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </SectionBackground>

        {/* FAQ SECTION */}
        {faqs && faqs.length > 0 && (
          <section className="py-24 bg-neutral-50 dark:bg-zinc-900/50">
            <div className="w-11/12 lg:w-4/5 mx-auto">
              <FAQSection 
                items={faqs} 
                title={`Common Questions about ${service.title}`} 
              />
            </div>
          </section>
        )}
      </div>
    </ServicesClient>
  )
}
