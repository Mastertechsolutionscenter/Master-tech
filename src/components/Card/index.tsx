'use client'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>

export const Card: React.FC<{
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
}> = (props) => {
  const { className, doc, relationTo = 'posts', showCategories } = props

  const { slug, categories, meta, title, heroImage } = doc || {}
  const { description, image: metaImage } = meta || {}

  const cardImage = metaImage || heroImage

  const sanitizedDescription = description?.replace(/\s/g, ' ') 
  const href = `/${relationTo}/${slug}`
  const hasCategories = categories && Array.isArray(categories) && categories.length > 0

  return (
    <article
      className={cn(
        'group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1',
        className,
      )}
    >
      <Link href={href} className="relative aspect-[16/10] w-full overflow-hidden block">
        {!cardImage && (
          <div className="w-full h-full bg-neutral-50 flex items-center justify-center text-neutral-400 text-sm">
            No image
          </div>
        )}
        {cardImage && typeof cardImage !== 'string' && (
          <Media 
            resource={cardImage} 
            size="33vw" 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
          />
        )}
      </Link>
      
      <div className="flex flex-col flex-grow p-6">
        {showCategories && hasCategories && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                return (
                  <span key={index} className="text-[10px] font-bold uppercase tracking-widest text-[#A67C00] bg-[#A67C00]/5 px-2 py-1 rounded">
                    {category.title}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-bold mb-3 text-neutral-900 line-clamp-2 group-hover:text-[#A67C00] transition-colors duration-300">
            <Link href={href}>
              {title}
            </Link>
          </h3>
        )}
        
        {description && (
          <p className="text-neutral-600 text-sm line-clamp-3 mb-6 flex-grow">
            {sanitizedDescription}
          </p>
        )}

        <Link 
          href={href} 
          className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-black group-hover:text-[#A67C00] transition-colors duration-300"
        >
          Read More
          <svg 
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
