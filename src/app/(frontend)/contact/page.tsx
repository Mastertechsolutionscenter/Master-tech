import React from 'react'
import { Metadata } from 'next'
import ContactForm from '@/components/Customs/ContactUs'
import { ServicesClient } from '../services/ServicesClient'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact Us | Master Tech Solutions Center Kenya',
  description: 'Reach out to Nairobi’s leading tech experts.',
}

async function getContactData() {
    try {
        const payload = await getPayload({ config: configPromise })
        console.log('Fetching contact global...')
        const contact = await payload.findGlobal({
            slug: 'contact',
        })
        console.log('Contact data found:', !!contact)
        return contact
    } catch (error) {
        console.error('Failed to fetch contact data:', error)
        return null
    }
}

export default async function ContactPage() {
  const data = await getContactData()

  // Mapping CMS data to the format expected by the component
  const cmsData = data ? {
    title: data.title,
    description: data.description,
    phone: data.contactInfo?.phone,
    email: data.contactInfo?.email,
    address: data.contactInfo?.address,
    whatsappNumber: data.contactInfo?.whatsappNumber,
    steps: data.nextSteps?.map(s => s.step)
  } : undefined

  return (
    <ServicesClient>
      <div className="bg-white dark:bg-black min-h-screen pt-32 pb-20 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <ContactForm 
            showDetails={true} 
            data={cmsData}
          />
        </div>
      </div>
    </ServicesClient>
  )
}
