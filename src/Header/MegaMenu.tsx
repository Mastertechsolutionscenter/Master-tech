'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MainService } from '@/services/business/ServiceRegistry'
import { ChevronDown } from 'lucide-react'

export default function MegaMenu({ services }: { services: MainService[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger - Now a Link that redirects to /services */}
      <Link 
        href="/services"
        className="flex items-center gap-1 hover:text-[#A67C00] transition font-medium h-full"
      >
        Services
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180 text-[#A67C00]' : ''}`} 
        />
      </Link>

      {/* Dropdown - Added an invisible 'bridge' div at the top to prevent closure when moving mouse down */}
      {open && (
        <div className="absolute left-0 top-[100%] pt-2 w-[320px] z-50">
          <div className="bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 transition-all duration-200 ease-out">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/services" 
                  className="block hover:text-[#A67C00] transition font-semibold border-b border-neutral-100 dark:border-neutral-800 pb-2"
                  onClick={() => setOpen(false)}
                >
                  All Services
                </Link>
              </li>
              {(services || []).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="block hover:text-[#A67C00] transition text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
