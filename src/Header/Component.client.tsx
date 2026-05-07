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
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const isBlogPage = pathname.startsWith('/posts')
  const isPortal = pathname.startsWith('/portal')

  useEffect(() => {
    setHeaderTheme(null)
    setMenuOpen(false)
  }, [pathname, setHeaderTheme])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme, theme])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

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
      <div className="mx-auto w-11/12 lg:w-4/5 flex items-center justify-between py-4 md:py-5">

        {/* LOGO & NAME */}
        <Link href="/" className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-3 flex-shrink-0">
          <Logo loading="eager" priority="high" className="h-8 w-8 md:h-14 md:w-14" />
          <div className="flex flex-col items-center md:items-start leading-none md:leading-tight">
            <span className="font-bold text-[8px] md:text-lg tracking-tight whitespace-nowrap">
              Master Tech
            </span>
            <span className="font-bold text-[8px] md:text-lg text-[#A67C00] tracking-tight whitespace-nowrap">
              Solutions
            </span>
          </div>
        </Link>

        {/* NAVIGATION - Pushed to the right */}
        <div className="flex items-center justify-end flex-1 gap-4 md:gap-8">
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

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden p-2 text-neutral-900 dark:text-white focus:outline-none relative z-[110]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-white dark:bg-neutral-950 z-[110] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-6 text-lg font-semibold">
            <Link 
              href="/" 
              className="hover:text-[#A67C00] border-b border-neutral-100 dark:border-neutral-900 pb-2 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link 
              href="/posts" 
              className="hover:text-[#A67C00] border-b border-neutral-100 dark:border-neutral-900 pb-2 transition"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="flex flex-col gap-4">
              <button 
                className="flex items-center justify-between hover:text-[#A67C00] border-b border-neutral-100 dark:border-neutral-900 pb-2 transition text-left"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="flex flex-col gap-4 pl-4 animate-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/services"
                    className="text-sm font-medium hover:text-[#A67C00] transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#A67C00] transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className="hover:text-[#A67C00] border-b border-neutral-100 dark:border-neutral-900 pb-2 transition"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="hover:text-[#A67C00] border-b border-neutral-100 dark:border-neutral-900 pb-2 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            {isBlogPage && (
              <Link 
                href="/search" 
                className="flex items-center gap-2 hover:text-[#A67C00] transition"
                onClick={() => setMenuOpen(false)}
              >
                <SearchIcon className="w-5" />
                Search
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}