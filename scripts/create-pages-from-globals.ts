import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../.env'),
})

const createPagesFromGlobals = async () => {
  const config = (await import('../src/payload.config')).default
  const payload = await getPayload({ config })

  console.log('Creating About Us and Contact Us pages from globals...')

  const aboutGlobals = await payload.findGlobal({ slug: 'about' })
  const contactGlobals = await payload.findGlobal({ slug: 'contact' })

  // Fetch a default image. If none exist, use null.
  const media = await payload.find({ collection: 'media', limit: 1 })
  const defaultImageId = media.docs.length > 0 ? media.docs[0].id : null

  // 1. Create About Us Page
  if (aboutGlobals) {
    const aboutPageData = {
      title: aboutGlobals.title,
      slug: 'about',
      _status: 'published',
      layout: [
        {
          blockType: 'hero',
          title: aboutGlobals.title,
          subtitle: aboutGlobals.vision?.content,
          // Removed image fields as they are causing validation errors
        },
        {
          blockType: 'missionVision',
          title: aboutGlobals.mission.title,
          description: aboutGlobals.mission.secondaryContent,
          content: {
            root: {
              type: 'root',
              children: [{ type: 'paragraph', children: [{ type: 'text', text: aboutGlobals.mission.content }] }],
            },
          },
          // Removed image fields
        },
        {
          blockType: 'values',
          title: aboutGlobals.values?.[0]?.title || 'Our Core Values',
          description: aboutGlobals.values?.[0]?.description || 'Committed to excellence and integrity.',
          points: aboutGlobals.values?.length > 0 ? aboutGlobals.values.map((v: any) => ({
            title: v.title,
            description: v.description,
          })) : [{ title: 'Integrity', description: 'Upholding the highest ethical standards in all our dealings.' }],
          // Removed image fields
        },
        {
          blockType: 'localExpertise',
          title: aboutGlobals.localExpertise.title,
          content: {
            root: {
              type: 'root',
              children: [{ type: 'paragraph', children: [{ type: 'text', text: aboutGlobals.localExpertise.content }] }],
            },
          },
          secondaryContent: aboutGlobals.localExpertise.secondaryContent,
          // Removed image fields
          locationLabel: aboutGlobals.localExpertise.locationLabel,
          quote: aboutGlobals.localExpertise.quote,
        },
        {
          blockType: 'timeline',
          title: 'Our Journey',
          steps: aboutGlobals.journey?.length > 0 ? aboutGlobals.journey.map((j: any) => ({
            title: j.title,
            description: j.description,
            label: j.label,
          })) : [{ title: 'Foundation', description: 'Established with a vision to empower Kenyan businesses.', label: '2020' }],
          // Removed image fields
        },
        {
          blockType: 'techStack',
          title: aboutGlobals.techStack.title,
          subtitle: aboutGlobals.techStack.subtitle,
          technologies: aboutGlobals.techStack.technologies?.length > 0 ? aboutGlobals.techStack.technologies.map((tech: any) => ({
            name: tech.name,
            description: tech.description,
            icon: tech.icon,
          })) : [{ name: 'Next.js', description: 'A React framework for building modern web applications.', icon: 'SiNextdotjs' }],
          // Removed image fields
        },
      ] as any[],
    }

    await payload.create({
      collection: 'pages',
      data: aboutPageData,
      context: { disableRevalidate: true },
    })
    console.log('About Us page created successfully.')
  }

  // 2. Create Contact Us Page
  if (contactGlobals) {
    const contactPageData = {
      title: contactGlobals.title,
      slug: 'contact',
      _status: 'published',
      layout: [
        {
          blockType: 'hero',
          title: contactGlobals.title,
          subtitle: contactGlobals.description,
          ctaText: 'Get in Touch',
          // Removed image fields
        },
        {
          blockType: 'contactBlock',
          title: 'Contact Information',
          phone: contactGlobals.contactInfo.phone,
          email: contactGlobals.contactInfo.email,
          address: contactGlobals.contactInfo.address,
          whatsappNumber: contactGlobals.contactInfo.whatsappNumber,
          // Removed image fields
        },
        {
          blockType: 'timeline',
          title: 'Next Steps',
          steps: contactGlobals.nextSteps?.length > 0 ? contactGlobals.nextSteps.map((step: any) => ({
            title: step.step,
            description: '',
          })) : [{ title: 'Inquiry Received', description: '', label: 'Step 1' }],
          // Removed image fields
        },
        {
          blockType: 'formBlock',
          form: {
            title: 'Send Us a Message',
            fields: [
              { name: 'firstname', type: 'text', required: true, label: 'First Name' },
              { name: 'lastname', type: 'text', required: true, label: 'Last Name' },
              { name: 'email', type: 'email', required: true, label: 'Email' },
              { name: 'location', type: 'text', label: 'Location (Optional)' },
              { name: 'message', type: 'textarea', required: true, label: 'Your Message' },
            ],
            submitButtonLabel: 'Send Message',
          },
        },
      ] as any[],
    }

    await payload.create({
      collection: 'pages',
      data: contactPageData,
      context: { disableRevalidate: true },
    })
    console.log('Contact Us page created successfully.')
  }

  console.log('Page creation from globals complete!')
  process.exit(0)
}

createPagesFromGlobals()
