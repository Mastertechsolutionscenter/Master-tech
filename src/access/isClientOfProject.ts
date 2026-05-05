import type { Access } from 'payload'
import type { User } from '@/payload-types'

export const isClientOfProject: Access<User> = ({ req: { user } }) => {
  if (user) {
    if (user.role === 'admin') {
      return true
    }

    return {
      client: {
        equals: user.id,
      },
    }
  }

  return false
}
