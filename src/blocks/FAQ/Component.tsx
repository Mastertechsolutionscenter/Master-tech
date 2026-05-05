import React from 'react'
import FAQSection from '@/components/Customs/FAQSection'
import { getFAQsAction } from '@/services/business/actions'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'

export const FAQBlock: React.FC<FAQBlockProps> = async ({ category, title }) => {
  const serviceId = category && typeof category === 'object' ? category.id : (category as string | undefined)
  const faqs = await getFAQsAction(serviceId)
  
  return (
    <FAQSection items={faqs || []} title={title || 'Frequently Asked Questions'} />
  )
}
