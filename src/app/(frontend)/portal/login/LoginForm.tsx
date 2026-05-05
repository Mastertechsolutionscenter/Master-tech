'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { loginAction } from '../actions'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaLock, FaEnvelope, FaChevronRight } from 'react-icons/fa'

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    try {
      const result = await loginAction(formData)
      if (result.error) {
        setError(result.error)
      } else if (result.success) {
        router.push('/portal')
        router.refresh()
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
              <FaEnvelope className="size-4" />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@business.com"
              required
              className="pl-11 h-12 bg-neutral-50 dark:bg-zinc-950"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-[#A67C00] hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
              <FaLock className="size-4" />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="pl-11 h-12 bg-neutral-50 dark:bg-zinc-950"
            />
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-[#A67C00] hover:bg-[#8B6500] text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
        >
          {loading ? 'Authenticating...' : 'Sign In to Portal'}
          {!loading && <FaChevronRight className="size-3 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
    </motion.div>
  )
}
