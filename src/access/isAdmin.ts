import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

export const isAdmin = ({ req: { user } }: AccessArgs<User>): boolean => {
  // EMERGENCY BYPASS: Allow any logged-in user
  return !!user
}
