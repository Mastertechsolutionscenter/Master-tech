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
    <>
      <header
        className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 backdrop-blur-md dark:bg-black/80 sticky top-0 z-[100]"
        {...(theme ? { 'data-theme': theme } : {})}
      >
        <div className="mx-auto w-11/12 lg:w-4/5 flex items-center justify-between py-4 md:py-5">

          {/* LOGO & NAME */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Logo loading="eager" priority="high" className="h-10 w-10 md:h-14 md:w-14" />
            <span className="font-bold text-base md:text-xl tracking-tight whitespace-nowrap">
              Master Tech <span className="text-[#A67C00]">Solutions</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            {/* DESKTOP NAVIGATION */}
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

            {/* SEARCH ICON */}
            {isBlogPage && (
              <Link href="/search" className="hidden md:block">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-5 text-neutral-900 dark:text-white hover:text-[#A67C00] transition" />
              </Link>
            )}

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="md:hidden p-2 text-neutral-900 dark:text-white focus:outline-none relative z-[110]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* 70% DRAWER MOBILE MENU */}
      {menuOpen && (
        <>
          {/* Semi-transparent Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden animate-in fade-in duration-300"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Drawer (70% Width) */}
          <div className="fixed inset-y-0 right-0 w-[75%] bg-white dark:bg-black z-[999] shadow-2xl md:hidden animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-900">
              <span className="font-bold text-sm tracking-widest text-neutral-500 uppercase">Menu</span>
              <button 
                className="p-2 text-neutral-900 dark:text-white focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="flex flex-col gap-6">
                <Link 
                  href="/" 
                  className="text-2xl font-black tracking-tight hover:text-[#A67C00] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  HOME
                </Link>

                <Link 
                  href="/posts" 
                  className="text-2xl font-black tracking-tight hover:text-[#A67C00] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  BLOG
                </Link>

                <div className="flex flex-col gap-4">
                  <button 
                    className="flex items-center justify-between text-2xl font-black tracking-tight hover:text-[#A67C00] transition-colors text-left"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    SERVICES
                    <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-[#A67C00]/20 animate-in slide-in-from-top-2 duration-300">
                      <Link 
                        href="/services"
                        className="text-lg font-bold text-neutral-600 dark:text-neutral-400 hover:text-[#A67C00]"
                        onClick={() => setMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="text-lg font-bold text-neutral-500 hover:text-[#A67C00]"
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
                  className="text-2xl font-black tracking-tight hover:text-[#A67C00] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  ABOUT US
                </Link>

                <Link 
                  href="/contact" 
                  className="text-2xl font-black tracking-tight hover:text-[#A67C00] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT
                </Link>

                {isBlogPage && (
                  <Link 
                    href="/search" 
                    className="flex items-center gap-3 text-xl font-bold pt-6 text-neutral-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    <SearchIcon className="w-6 h-6" />
                    SEARCH
                  </Link>
                )}
              </nav>
            </div>

            <div className="p-8 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950/50">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A67C00] mb-2">Master Tech Solutions</p>
               <p className="text-xs text-neutral-500 leading-relaxed">
                 Nairobi, Kenya. Building secure and scalable digital futures.
               </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
