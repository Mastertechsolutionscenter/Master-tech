import type { Access } from 'payload'
import type { User } from '@/payload-types'

export const isAdminOrSelf: Access<User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === 'admin') {
      return true
    }

    return {
      id: {
        equals: user.id,
      },
    }
  }

  return false
}
