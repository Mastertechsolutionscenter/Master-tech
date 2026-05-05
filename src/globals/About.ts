import type { GlobalConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const About: GlobalConfig = {
  slug: 'about',
  admin: {
    group: 'Site Content',
  },
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Driving Digital Transformation with Purpose and Precision',
    },
    {
      name: 'mission',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Our Mission',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          defaultValue: 'At Master Tech Solutions Center, our mission is to empower businesses with cutting-edge technology that simplifies operations, enhances customer experiences, and drives sustainable growth. We believe in creating digital solutions that are not only functional but also transformative.',
        },
        {
          name: 'secondaryContent',
          type: 'textarea',
          defaultValue: 'We bridge the gap between complex technical challenges and intuitive business results, ensuring that every project we undertake delivers measurable value to our clients.',
        }
      ]
    },
    {
      name: 'vision',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Our Vision',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          defaultValue: 'To be the leading catalyst for digital excellence in Africa, transforming how businesses connect, grow, and succeed through world-class technology crafted with local insight.',
        },
        {
          name: 'secondaryContent',
          type: 'textarea',
          defaultValue: 'We envision a future where Kenyan enterprises are globally competitive, powered by secure, scalable, and intelligent digital ecosystems that we help build and sustain.',
        }
      ]
    },
    {
      name: 'values',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        }
      ]
    },
    {
      name: 'localExpertise',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Local Expertise, Global Standards',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          defaultValue: 'Based at Lunga Lunga Square in Nairobi\'s Industrial Area, we are uniquely positioned to serve the Kenyan business community. We understand the local challenges and opportunities, from M-Pesa ecosystem integrations to specialized logistics and manufacturing workflows.',
        },
        {
          name: 'secondaryContent',
          type: 'textarea',
          defaultValue: 'Our team combines this local insight with international best practices in software engineering and digital strategy, ensuring you get the best of both worlds.',
        },
        {
            name: 'locationLabel',
            type: 'text',
            defaultValue: 'Industrial Area, Nairobi, KE',
        },
        {
            name: 'quote',
            type: 'text',
            defaultValue: 'Empowering the heart of Nairobi\'s Industry.',
        }
      ]
    },
    {
      name: 'journey',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        }
      ]
    },
    {
      name: 'techStack',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Our Tech Stack',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          defaultValue: 'Modern Tools for African Enterprises',
        },
        {
          name: 'technologies',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'icon',
              type: 'text',
              admin: {
                description: 'Icon identifier (e.g., react, nodejs, typescript)',
              },
            }
          ]
        }
      ]
    }
  ]
}
