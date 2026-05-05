import React from 'react'
// import type { ValuesBlock as ValuesProps } from '@/payload-types'

export const ValuesBlock: React.FC<any> = ({ title, points }) => {
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
          {title || 'Our Core Values'}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {points?.map((val: any, i: number) => (
          <div key={i} className="p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-zinc-900/50">
            <h3 className="text-xl font-bold mb-4 text-[#A67C00]">{val.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
