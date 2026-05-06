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

  payload.logger.info('Creating About Us and Contact Us pages from globals...')

  // Cast once at the top to clear IDE property errors
  const aboutGlobals = (await payload.findGlobal({ slug: 'about' })) as any
  const contactGlobals = (await payload.findGlobal({ slug: 'contact' })) as any

  // Fetch a default image.
  const media = await payload.find({ collection: 'media', limit: 1 })
  const defaultImageId = media.docs.length > 0 ? media.docs[0].id : null

  if (!defaultImageId) {
    payload.logger.error(
      'Warning: No media found. Required image fields in Hero and LocalExpertise may fail validation.',
    )
  }

  // 1. Create About Us Page
  if (aboutGlobals) {
    const layout: any[] = [
      {
        blockType: 'hero',
        title: aboutGlobals.title,
        description: aboutGlobals.vision?.content || '',
        image: defaultImageId,
      },
      {
        blockType: 'missionVision',
        mission: {
          title: aboutGlobals.mission?.title,
          content: aboutGlobals.mission?.content,
          secondaryContent: aboutGlobals.mission?.secondaryContent,
        },
        vision: {
          title: aboutGlobals.vision?.title,
          content: aboutGlobals.vision?.content,
          secondaryContent: aboutGlobals.vision?.secondaryContent,
        },
      },
    ]

    if ((aboutGlobals.values?.length ?? 0) > 0) {
      layout.push({
        blockType: 'values',
        title: '',
        points: aboutGlobals.values.map((v: any) => ({
          title: v.title,
          description: v.description,
        })),
      })
    }

    layout.push({
      blockType: 'localExpertise',
      title: aboutGlobals.localExpertise?.title,
      content: aboutGlobals.localExpertise?.content,
      secondaryContent: aboutGlobals.localExpertise?.secondaryContent,
      locationLabel: aboutGlobals.localExpertise?.locationLabel,
      quote: aboutGlobals.localExpertise?.quote,
      image: defaultImageId,
    })

    if ((aboutGlobals.journey?.length ?? 0) >= 3) {
      layout.push({
        blockType: 'journey',
        title: '',
        subtitle: '',
        steps: aboutGlobals.journey.map((j: any) => ({
          title: j.title,
          description: j.description,
          label: j.label,
        })),
      })
    }

    if ((aboutGlobals.techStack?.technologies?.length ?? 0) > 0) {
      layout.push({
        blockType: 'techStack',
        title: aboutGlobals.techStack?.title,
        subtitle: aboutGlobals.techStack?.subtitle,
        technologies: aboutGlobals.techStack.technologies.map((tech: any) => ({
          name: tech.name,
          description: tech.description,
          icon: tech.icon,
        })),
      })
    }

    const aboutPageData: any = {
      title: aboutGlobals.title,
      slug: 'about',
      _status: 'published',
      hero: { type: 'none' },
      layout,
    }

    await payload.create({
      collection: 'pages',
      data: aboutPageData,
      context: { disableRevalidate: true },
    })
    payload.logger.info('About Us page created successfully.')
  }

  // 2. Create Contact Us Page
  if (contactGlobals) {
    const forms = await payload.find({ collection: 'forms', limit: 1 })
    const defaultFormId = forms.docs.length > 0 ? forms.docs[0].id : null

    const layout: any[] = [
      {
        blockType: 'hero',
        title: contactGlobals.title,
        description: contactGlobals.description,
        image: defaultImageId,
      },
      {
        blockType: 'contactFormBlock',
        title: '',
        description: contactGlobals.description,
        contactInfo: {
          phone: contactGlobals.contactInfo?.phone,
          email: contactGlobals.contactInfo?.email,
          address: contactGlobals.contactInfo?.address,
          whatsappNumber: contactGlobals.contactInfo?.whatsappNumber,
        },
        nextSteps:
          (contactGlobals.nextSteps?.length ?? 0) > 0
            ? contactGlobals.nextSteps.map((step: any) => ({
                step: step.step,
              }))
            : [],
      },
    ]

    if (defaultFormId) {
      layout.push({
        blockType: 'formBlock',
        form: defaultFormId,
        enableIntro: false,
      })
    }

    const contactPageData: any = {
      title: contactGlobals.title,
      slug: 'contact',
      _status: 'published',
      hero: { type: 'none' },
      layout,
    }

    await payload.create({
      collection: 'pages',
      data: contactPageData,
      context: { disableRevalidate: true },
    })
    payload.logger.info('Contact Us page created successfully.')
  }

  payload.logger.info('Page creation from globals complete!')
  process.exit(0)
}

createPagesFromGlobals()
