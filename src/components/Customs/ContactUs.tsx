'use client'

import React, { useState } from 'react'
import { sendEmailAction } from '@/actions/sendEmail'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/utilities/ui'
import { Textarea } from '@/components/ui/textareas'
import { FaChevronRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

interface ContactFormProps {
  showDetails?: boolean
  data?: {
    title?: string
    description?: string
    phone?: string
    email?: string
    address?: string
    whatsappNumber?: string
    steps?: string[]
  }
}

export default function ContactForm({ showDetails = false, data }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const defaultSteps = [
    'We schedule a call at your convenience',
    'We do a discovery and consulting meeting',
    'We prepare a proposal',
  ]

  const displayTitle = data?.title || "Let's Talk Business"
  const displayDescription = data?.description || "Contact us today and let's discuss how we can help you grow with smart digital solutions."
  const steps = data?.steps || defaultSteps
  const whatsappNumber = data?.whatsappNumber || '254723230203'

  const contactInfo = [
    { 
        icon: <FaPhone className="text-[#A67C00]" />, 
        value: data?.phone || '+254 723 230203', 
        href: `tel:${(data?.phone || '+254723230203').replace(/\s+/g, '')}` 
    },
    { 
        icon: <FaEnvelope className="text-[#A67C00]" />, 
        value: data?.email || 'info@mastertechsolutionscenter.com', 
        href: `mailto:${data?.email || 'info@mastertechsolutionscenter.com'}` 
    },
    { 
        icon: <FaMapMarkerAlt className="text-[#A67C00]" />, 
        value: data?.address || 'Lunga Lunga Square, Nairobi', 
        href: '#' 
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    try {
      const result = await sendEmailAction(formData)
      if (result.success) {
        setSuccess(true)
        // Optionally redirect to WhatsApp after a short delay
        setTimeout(() => {
          window.open(`https://wa.me/${whatsappNumber}?text=Hi Master Tech, I just submitted an inquiry on the website...`, '_blank')
        }, 2000)
      }
    } catch (error) {
      alert('Something went wrong. Please try again or contact us via WhatsApp directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full rounded-3xl bg-white p-6 md:p-10 dark:bg-zinc-950 shadow-2xl border border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Info & Steps */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-[#A67C00] text-4xl font-bold leading-tight">
              {success ? "Message Received!" : (showDetails ? displayTitle : "Ready To Elevate Your Business?")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              {success 
                ? "Thank you for reaching out. We've sent a confirmation to your email and will get back to you shortly. Opening WhatsApp for instant chat..."
                : displayDescription
              }
            </p>
          </div>

          {/* Show Office Details only if showDetails is true */}
          {showDetails && (
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-xl">{info.icon}</div>
                  <a href={info.href} className="text-sm font-bold dark:text-white hover:text-[#A67C00] transition-colors">
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <span className="h-1 w-8 bg-[#A67C00] inline-block"></span>
              What Happens Next?
            </h3>
            <ol className="space-y-4">
              {steps.map((text, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A67C00] text-black font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-neutral-700 dark:text-neutral-300 font-medium">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right Side: The Form Part (Always the same) */}
        <div className="bg-[#A67C00] p-8 rounded-3xl shadow-2xl relative overflow-hidden group min-h-[400px] flex items-center justify-center">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          {success ? (
            <div className="relative z-10 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-[#A67C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
                <p className="text-white/80 max-w-xs mx-auto">
                  Check your email for a confirmation. Our team will contact you shortly.
                </p>
              </div>
              <button 
                onClick={() => setSuccess(false)}
                className="text-white/60 text-sm underline hover:text-white transition"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="relative z-10 space-y-5 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label className="text-white">First Name</Label>
                  <Input name="firstname" placeholder="Evans" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label className="text-white">Last Name</Label>
                  <Input name="lastname" placeholder="Jackson" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label className="text-white">Email Address</Label>
                <Input name="email" type="email" placeholder="you@business.com" required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label className="text-white">Location</Label>
                <Input name="location" placeholder="Nairobi, Kenya" className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label className="text-white">Your Project</Label>
                <Textarea name="message" placeholder="Tell us how we can help..." required className="bg-white/20 border-white/30 text-white placeholder:text-white/50 min-h-[100px]" />
              </LabelInputContainer>
              <button className="w-full bg-black text-white font-bold py-4 rounded-xl shadow-xl hover:bg-zinc-900 transition-all flex items-center justify-center gap-2">
                {loading ? 'Processing...' : 'Submit Inquiry'} <FaChevronRight className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={cn('flex w-full flex-col space-y-2', className)}>{children}</div>
}
