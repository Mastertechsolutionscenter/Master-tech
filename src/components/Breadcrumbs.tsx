'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')

  if (pathSegments.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
      <Link href="/" className="hover:text-[#A67C00] flex items-center transition-colors">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

        return (
          <React.Fragment key={href}>
            <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-700" />
            {isLast ? (
              <span className="font-semibold text-[#A67C00] truncate max-w-[200px]" aria-current="page">
                {label}
              </span>
            ) : (
              <Link href={href} className="hover:text-[#A67C00] transition-colors">
                {label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
