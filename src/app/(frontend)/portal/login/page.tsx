import React from 'react'
import { Metadata } from 'next'
import LoginForm from './LoginForm'
import { Logo } from '@/components/Logo/Logo'

export const metadata: Metadata = {
  title: 'Client Login | Master Tech Solutions Center',
  description: 'Securely access your project dashboard and track your digital transformation journey.',
}

export default function PortalLoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#A67C00]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#A67C00]/5 blur-3xl" />
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo loading="eager" priority="high" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Client <span className="text-[#A67C00]">Partner</span> Portal
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to track your project progress and milestones.
          </p>
        </div>

        <div className="mt-8">
          <LoginForm />
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-neutral-500 dark:text-neutral-500 italic">
            "Transforming Kenyan Businesses Digitally"
          </p>
        </div>
      </div>
    </div>
  )
}
