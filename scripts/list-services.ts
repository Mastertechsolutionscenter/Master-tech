import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const listServices = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  const services = await payload.find({ collection: 'services' })
  console.log(JSON.stringify(services.docs.map(s => ({ title: s.title, slug: s.slug })), null, 2))
  process.exit(0)
}

listServices()
