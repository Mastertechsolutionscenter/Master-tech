import type { Access } from 'payload'

export const authenticatedOrPublished: Access = ({ req }) => {
  // Allow logged-in users
  if (req?.user) {
    return true
  }

  // Allow public access only if document is published
  return {
    _status: {
      equals: 'published',
    },
  }
}