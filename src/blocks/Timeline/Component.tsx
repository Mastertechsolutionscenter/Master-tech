'use client'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import type { TimelineBlock as TimelineBlockProps } from '@/payload-types'

export const TimelineBlock: React.FC<TimelineBlockProps> = ({ steps }) => {
  const data = (steps || []).map((step) => ({
    title: step.title,
    content: (
      <div>
        <p className="mb-8 pl-6 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
          {step.description}
        </p>
      </div>
    ),
  }))

  return (
    <div className="relative w-full overflow-clip py-20">
      <Timeline data={data} />
    </div>
  )
}
