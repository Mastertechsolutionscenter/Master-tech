import React from 'react'
import { Metadata } from 'next'
import { TitleText } from '@/components/Basic/CustomText'
import { ServicesClient } from '../services/ServicesClient'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Journey } from '@/components/Customs/Journey'
import TechStack from '@/components/Customs/TechStack'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About Us | Best Tech & Digital Agency in Nairobi, Kenya',
  description: 'Master Tech Solutions Center is Nairobi’s premier technology agency located in Industrial Area. We empower Kenyan businesses with custom software, M-Pesa e-commerce, and digital strategy.',
  keywords: [
    'tech agency Nairobi',
    'software developers Industrial Area',
    'digital transformation Kenya',
    'Master Tech Solutions Center',
    'best software company Kenya',
    'Nairobi business technology consulting'
  ],
}

async function getAboutData() {
    try {
        const payload = await getPayload({ config: configPromise })
        console.log('Fetching about global...')
        const about = await payload.findGlobal({
            slug: 'about',
        })
        console.log('About data found:', !!about)
        return about
    } catch (error) {
        console.error('Failed to fetch about data:', error)
        return null
    }
}

export default async function AboutUsPage() {
  console.log('Rendering AboutUsPage')
  const data = await getAboutData()

  // Fallback data if CMS fails or is empty
  const title = data?.title || 'Driving Digital Transformation with Purpose and Precision'
  const mission = {
    title: data?.mission?.title || 'Our Mission',
    content: data?.mission?.content || 'At Master Tech Solutions Center, our mission is to empower businesses with cutting-edge technology that simplifies operations, enhances customer experiences, and drives sustainable growth.',
    secondaryContent: data?.mission?.secondaryContent || 'We bridge the gap between complex technical challenges and intuitive business results, ensuring that every project we undertake delivers measurable value to our clients.'
  }
  const vision = {
    title: data?.vision?.title || 'Our Vision',
    content: data?.vision?.content || 'To be the leading catalyst for digital excellence in Africa, transforming how businesses connect, grow, and succeed through world-class technology crafted with local insight.',
    secondaryContent: data?.vision?.secondaryContent || 'We envision a future where Kenyan enterprises are globally competitive, powered by secure, scalable, and intelligent digital ecosystems.'
  }
  const values = data?.values || [
    { title: 'Innovation', description: 'We stay ahead of the curve, adopting the latest technologies to provide our clients with competitive advantages.' },
    { title: 'Integrity', description: 'Transparency and honesty are at the core of everything we do. We build lasting relationships based on trust.' },
    { title: 'Impact', description: 'We are driven by results. Our success is measured by the growth and efficiency we bring to the businesses we partner with.' }
  ]
  const localExpertise = {
    title: data?.localExpertise?.title || 'Local Expertise, Global Standards',
    content: data?.localExpertise?.content || 'Based at Lunga Lunga Square in Nairobi\'s Industrial Area, we are uniquely positioned to serve the Kenyan business community.',
    secondaryContent: data?.localExpertise?.secondaryContent || 'Our team combines this local insight with international best practices in software engineering and digital strategy.',
    locationLabel: data?.localExpertise?.locationLabel || 'Industrial Area, Nairobi, KE',
    quote: data?.localExpertise?.quote || 'Empowering the heart of Nairobi\'s Industry.'
  }

  return (
    <ServicesClient>
      <div className="py-24 bg-white dark:bg-black min-h-screen">
        <div className="w-11/12 lg:w-4/5 mx-auto">
          <Breadcrumbs />
          <TitleText title={<>About Us</>} textStyles="text-center" />
          
          <div className="w-full flex items-center text-center justify-center mb-16"><h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white max-w-4xl">
              {title}
            </h1>
            </div>

          {/* Mission & Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6 p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900 border border-neutral-100 dark:border-neutral-800">
              <h2 className="text-3xl font-bold text-black dark:text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-[#A67C00] inline-block"></span>
                {mission.title}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {mission.content}
              </p>
              {mission.secondaryContent && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {mission.secondaryContent}
                </p>
              )}
            </div>
            <div className="space-y-6 p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900 border border-neutral-100 dark:border-neutral-800">
              <h2 className="text-3xl font-bold text-black dark:text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-[#A67C00] inline-block"></span>
                {vision.title}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {vision.content}
              </p>
              {vision.secondaryContent && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {vision.secondaryContent}
                </p>
              )}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black dark:text-white">Our Core Values</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((val: any, i: number) => (
                    <div key={i} className="p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-zinc-900/50">
                        <h3 className="text-xl font-bold mb-4 text-[#A67C00]">{val.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {val.description}
                        </p>
                    </div>
                ))}
            </div>
          </div>

          {/* Local Expertise Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <Image 
                src="/Hero/Pics/consult.webp" 
                alt="Consulting with Master Tech Solutions" 
                fill 
                className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-xl italic">"{localExpertise.quote}"</p>
               </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black dark:text-white">{localExpertise.title}</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {localExpertise.content}
              </p>
              {localExpertise.secondaryContent && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {localExpertise.secondaryContent}
                </p>
              )}
              <div className="pt-4">
                <div className="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
                    <span className="w-10 h-10 rounded-full bg-[#A67C00]/10 flex items-center justify-center text-[#A67C00]">
                        📍
                    </span>
                    <span>{localExpertise.locationLabel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="mb-24">
             <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">The Journey to Success</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl mx-auto">
                    We've refined a process that ensures clarity, quality, and results at every stage of your digital transformation.
                </p>
             </div>
             <Journey steps={data?.journey} />
          </div>

          {/* Tech Stack Section */}
          <div className="mb-24">
             <TechStack 
                title={data?.techStack?.title} 
                subtitle={data?.techStack?.subtitle} 
                technologies={data?.techStack?.technologies} 
             />
          </div>

          {/* Final CTA */}
          <div className="text-center p-16 rounded-[3rem] bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
              Ready to build the future together?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto text-lg">
              Whether you're a startup looking for a digital foundation or an enterprise seeking 
              to optimize, our team is ready to help you reach your goals.
            </p>
            <Link 
              href="/contact" 
              className="inline-block py-4 px-10 rounded-full bg-[#A67C00] text-white font-bold hover:opacity-90 transition shadow-lg shadow-[#A67C00]/20"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </ServicesClient>
  )
}
