'use client'
import React from 'react'
import ContactForm from '@/components/Customs/ContactUs'
import type { ContactBlock as ContactBlockProps } from '@/payload-types'

export const ContactBlock: React.FC<ContactBlockProps> = ({ showDetails }) => {
  return (
    <div className="container mx-auto py-20 px-4">
      <ContactForm showDetails={showDetails || false} />
    </div>
  )
}
