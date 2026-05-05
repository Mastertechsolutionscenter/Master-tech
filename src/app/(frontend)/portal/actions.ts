'use server'

import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    const payload = await getPayload({ config: configPromise })
    
    const result = await payload.login({
      collection: 'users',
      data: {
        email,
        password,
      },
    })

    if (result.user) {
      // Check if user has the correct role and portal is active
      if (result.user.role !== 'client' && result.user.role !== 'admin') {
        return { error: 'Unauthorized access' }
      }

      if (result.user.role === 'client' && !result.user.isPortalActive) {
        return { error: 'Your portal access is not yet active. Please contact support.' }
      }

      // Payload handles the cookie set automatically in login() if not local
      // But in server actions we might need to handle it or ensure it's set
      return { success: true }
    }
  } catch (error: any) {
    console.error('Login error:', error)
    return { error: 'Invalid email or password' }
  }

  return { error: 'Something went wrong' }
}

export async function logoutAction() {
  const payload = await getPayload({ config: configPromise })
  // For server actions, we might just clear the cookie manually if needed
  // or use payload.logout() if it supports it in this context
  const cookieStore = await cookies()
  cookieStore.delete('payload-token')
  redirect('/portal/login')
}
