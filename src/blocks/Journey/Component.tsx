import React from 'react'
import { Journey as JourneyComponent } from '@/components/Customs/Journey'
// import type { JourneyBlock as JourneyProps } from '@/payload-types'

export const JourneyBlock: React.FC<any> = ({ title, subtitle, steps }) => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <JourneyComponent steps={steps} />
    </section>
  )
}
