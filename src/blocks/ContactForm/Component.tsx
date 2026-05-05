import React from 'react'
import ContactForm from '@/components/Customs/ContactUs'
// import type { ContactFormBlock as ContactFormProps } from '@/payload-types'

export const ContactFormBlock: React.FC<any> = ({ 
  title, 
  description, 
  contactInfo, 
  nextSteps 
}) => {
  const cmsData = {
    title,
    description,
    phone: contactInfo?.phone,
    email: contactInfo?.email,
    address: contactInfo?.address,
    whatsappNumber: contactInfo?.whatsappNumber,
    steps: nextSteps?.map((s: any) => s.step)
  }

  return (
    <section className="bg-white dark:bg-black py-20 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <ContactForm 
          showDetails={true} 
          data={cmsData}
        />
      </div>
    </section>
  )
}
