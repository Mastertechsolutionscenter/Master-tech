import React from 'react'
import TechStackComponent from '@/components/Customs/TechStack'
// import type { TechStackBlock as TechStackProps } from '@/payload-types'

export const TechStackBlock: React.FC<any> = ({ title, subtitle, technologies }) => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto py-20">
      <TechStackComponent 
        title={title || undefined} 
        subtitle={subtitle || undefined} 
        technologies={technologies} 
      />
    </section>
  )
}
