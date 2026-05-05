import React from 'react'
// import type { MissionVisionBlock as MissionVisionProps } from '@/payload-types'

export const MissionVisionBlock: React.FC<any> = ({ mission, vision }) => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {mission && (
          <div className="space-y-6 p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900 border border-neutral-100 dark:border-neutral-800">
            <h2 className="text-3xl font-bold text-black dark:text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#A67C00] inline-block"></span>
              {mission.title || 'Our Mission'}
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
        )}
        {vision && (
          <div className="space-y-6 p-8 rounded-3xl bg-neutral-50 dark:bg-zinc-900 border border-neutral-100 dark:border-neutral-800">
            <h2 className="text-3xl font-bold text-black dark:text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#A67C00] inline-block"></span>
              {vision.title || 'Our Vision'}
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
        )}
      </div>
    </section>
  )
}
