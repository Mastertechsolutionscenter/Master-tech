import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const deletePlaceholderPosts = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  const slugsToDelete = [
    'digital-horizons',
    'global-gaze',
    'dollar-and-sense-the-financial-forecast'
  ]

  console.log('Deleting placeholder posts...')
  
  for (const slug of slugsToDelete) {
    try {
      const result = await payload.delete({
        collection: 'posts',
        where: {
          slug: {
            equals: slug,
          },
        },
        context: { disableRevalidate: true },
      })
      
      console.log(`Successfully processed post with slug: ${slug}`)
    } catch (err) {
      console.error(`Error deleting post with slug: ${slug}`, err)
    }
  }

  console.log('Cleanup complete!')
  process.exit(0)
}

deletePlaceholderPosts()
