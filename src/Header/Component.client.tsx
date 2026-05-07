'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import MegaMenu from './MegaMenu'
import { SearchIcon, Menu, X, ChevronDown } from 'lucide-react'
import { MainService } from '@/services/business/ServiceRegistry'

interface HeaderClientProps {
  data: Header
  services: MainService[]
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, services }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  const isBlogPage = pathname.startsWith('/posts')
  const isPortal = pathname.startsWith('/portal')

  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  if (isPortal) {
    return (
      <header
        className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-md dark:bg-black/80 sticky top-0 z-40"
      >
        <div className="mx-auto w-11/12 lg:w-4/5 flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo loading="eager" priority="high" />
            <span className="font-bold text-lg hidden sm:block tracking-tight whitespace-nowrap">
              Master Tech <span className="text-[#A67C00]">Portal</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-bold text-[#A67C00] hover:underline">
            Back to Website
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-md dark:bg-black/80 sticky top-0 z-[100]"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="mx-auto w-[95%] lg:w-4/5 flex flex-col sm:flex-row items-center justify-between py-3 md:py-5 gap-3 sm:gap-6">

        {/* LOGO & NAME */}
        <Link href="/" className="flex flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
          <Logo loading="eager" priority="high" className="h-8 w-8 sm:h-12 sm:w-12" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[10px] sm:text-lg tracking-tight whitespace-nowrap">
              Master Tech
            </span>
            <span className="font-bold text-[10px] sm:text-lg text-[#A67C00] tracking-tight whitespace-nowrap">
              Solutions
            </span>
          </div>
        </Link>

        {/* NAVIGATION - Always visible */}
        <div className="flex items-center justify-center sm:justify-end flex-1 w-full sm:w-auto">
          <nav className="flex items-center justify-center gap-3 md:gap-8 text-[9px] sm:text-sm font-bold sm:font-medium tracking-tight sm:tracking-normal uppercase sm:normal-case">
            <Link className="hover:text-[#A67C00] transition whitespace-nowrap" href="/">
              Home
            </Link>

            <Link className="hover:text-[#A67C00] transition whitespace-nowrap" href="/posts">
              Blog
            </Link>

            <MegaMenu services={services} />

            <Link className="hover:text-[#A67C00] transition whitespace-nowrap" href="/about">
              About
            </Link>

            <Link className="hover:text-[#A67C00] transition whitespace-nowrap" href="/contact">
              Contact
            </Link>

            {/* SEARCH ICON - Only visible on Blog pages */}
            {isBlogPage && (
              <Link href="/search" className="ml-1 sm:ml-4">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-3 h-3 sm:w-5 sm:h-5 text-neutral-900 dark:text-white hover:text-[#A67C00] transition" />
              </Link>
            )}
          </nav>
        </div>

      </div>
    </header>
  )
}