import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'
import fetch from 'node-fetch' // Assuming node-fetch is available in the environment

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const uploadPlaceholderImage = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  const mediaExists = await payload.find({
    collection: 'media',
    limit: 1,
  })

  if (mediaExists.totalDocs > 0) {
    console.log('Media already exists, skipping placeholder image upload.')
    process.exit(0)
  }

  console.log('Uploading placeholder image...')

  // Use a known good placeholder image URL
  const placeholderImageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const placeholderFilename = 'default-hero-placeholder.jpg'

  try {
    const response = await fetch(placeholderImageUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch placeholder image: ${response.statusText}`)
    }
    const buffer = await response.arrayBuffer()

    const uploadedImage = await payload.create({
      collection: 'media',
      data: {
        alt: 'Placeholder Image for Master Tech Solutions',
        filename: placeholderFilename,
      },
      file: {
        data: Buffer.from(buffer),
        name: placeholderFilename,
        mimetype: 'image/jpeg',
        size: buffer.byteLength,
      },
      context: { disableRevalidate: true }, // Important for script execution
    })
    console.log(`Placeholder image uploaded successfully with ID: ${uploadedImage.id}`)
    process.exit(0)
  } catch (error) {
    console.error('Failed to upload placeholder image:', error)
    process.exit(1)
  }
}

uploadPlaceholderImage()
