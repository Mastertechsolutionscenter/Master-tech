// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { CaseStudies } from './collections/CaseStudies'
import { Services } from './collections/Services'
import { SubServices } from './collections/SubServices'
import { FAQs } from './collections/FAQs'
import { Leads } from './collections/Leads'
import { Projects } from './collections/Projects'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { SiteSettings } from './globals/SiteSettings'
import { About } from './globals/About'
import { Contact } from './globals/Contact'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { weeklyLeadReport } from './tasks/weeklyLeadReport'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
console.log('MONGODB_URI:', process.env.MONGODB_URI)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  collections: [Pages, Posts, Media, Categories, Users, CaseStudies, Services, SubServices, FAQs, Leads, Projects],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, SiteSettings, About, Contact],
  plugins: [
    ...plugins,
    vercelBlobStorage({
      enabled: true, // defaults to true
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      // The line below is the fix. Set it to false or remove it entirely.
      clientUploads: false,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [weeklyLeadReport],
  },
})
