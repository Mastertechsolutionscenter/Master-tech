import React from 'react'
import OurServices from '@/components/Customs/OurServices'
import { getServicesAction } from '@/services/business/actions'
import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'

export const ServicesBlock: React.FC<ServicesBlockProps> = async ({ title, subtitle }) => {
  const services = await getServicesAction()
  
  return (
    <div className="py-10">
      <OurServices services={services} />
    </div>
  )
}
