import type { CollectionAfterReadHook } from 'payload'
import { User } from 'src/payload-types'

export const populateAuthors: CollectionAfterReadHook = async ({
  doc,
  req,
}) => {
  const payload = req?.payload

  if (!payload) {
    console.error('Payload instance missing in hook context')
    return doc
  }

  if (!doc?.authors?.length) return doc

  const authorDocs: User[] = []

  for (const author of doc.authors) {
    try {
      const authorId = typeof author === 'object' ? author?.id : author

      if (!authorId) continue

      const authorDoc = await payload.findByID({
        id: authorId,
        collection: 'users',
        depth: 0,
      })

      if (authorDoc) {
        authorDocs.push(authorDoc)
      }
    } catch (error) {
      console.error('Author population error:', error)
    }
  }

  if (authorDocs.length > 0) {
    doc.populatedAuthors = authorDocs.map((authorDoc) => ({
      id: authorDoc.id,
      name: authorDoc.name,
    }))
  }

  return doc
}