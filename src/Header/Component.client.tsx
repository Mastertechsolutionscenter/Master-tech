'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import MegaMenu from './MegaMenu'
import { SearchIcon } from 'lucide-react'
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
      className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-md dark:bg-black/80 sticky top-0 z-40"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="mx-auto w-11/12 lg:w-4/5 flex items-center justify-between py-5">

        {/* LOGO & NAME */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Logo loading="eager" priority="high" />
          <span className="font-bold text-lg hidden sm:block tracking-tight whitespace-nowrap">
            Master Tech <span className="text-[#A67C00]">Solutions</span>
          </span>
        </Link>

        {/* NAVIGATION - Pushed to the right */}
        <div className="flex items-center justify-end flex-1 gap-8">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link className="hover:text-[#A67C00] transition" href="/">
              Home
            </Link>

            <Link className="hover:text-[#A67C00] transition" href="/posts">
              Blog
            </Link>

            <MegaMenu services={services} />

            <Link className="hover:text-[#A67C00] transition" href="/about">
              About Us
            </Link>

            <Link className="hover:text-[#A67C00] transition" href="/contact">
              Contact
            </Link>
          </nav>

          {/* SEARCH ICON - Only visible on Blog pages */}
          {isBlogPage && (
            <Link href="/search" className="ml-4">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-5 text-neutral-900 dark:text-white hover:text-[#A67C00] transition" />
            </Link>
          )}
        </div>

      </div>
    </header>
  )
}