'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { cn } from '@/utilities/ui'

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+254723230203' // Your verified number
  const message = 'Hello Master Tech, I would like to inquire about your digital services.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center',
        'hover:bg-[#128C7E] animate-bounce'
      )}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  )
}
