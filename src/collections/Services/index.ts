import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from '@/fields/slug'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Services',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
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
              name: 'subServices',
              type: 'relationship',
              relationTo: 'sub-services',
              hasMany: true,
              label: 'Linked Sub-services',
            },
            ...slugField(),
          ],
        },
        {
          label: 'Hero & Intro',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'subtitle', type: 'textarea' },
                { name: 'image', type: 'upload', relationTo: 'media', label: 'Side Image' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media', label: 'Section Background Image' },
              ],
            },
            {
              name: 'intro',
              type: 'group',
              label: 'Introduction / Overview',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'Solutions & Process',
          fields: [
            {
              name: 'solutions',
              type: 'group',
              label: 'What We Can Build For You',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'processSection',
              type: 'group',
              label: 'Our Development Process',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'steps',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'techStackSection',
              type: 'group',
              label: 'Technology Stack',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'technologies',
                  type: 'array',
                  fields: [
                    { name: 'name', type: 'text', required: true },
                    { name: 'icon', type: 'text' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Trust & Benefits',
          fields: [
            {
              name: 'whyChooseUs',
              type: 'group',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'points',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'benefits',
              type: 'group',
              label: 'What You Get / Key Benefits',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'trust',
              type: 'group',
              label: 'Trust & Commitment Section',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'Call To Action',
          fields: [
            {
              name: 'cta',
              type: 'group',
              label: 'Call To Action (Contact Section)',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                { name: 'buttonText', type: 'text' },
                { name: 'link', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Sub-services Grid',
          fields: [
            {
              name: 'subServicesGrid',
              type: 'group',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'SEO & Context',
          fields: [
            {
              name: 'kenyanContext',
              type: 'textarea',
              label: 'Kenya Market Insight (SEO)',
              admin: {
                placeholder: 'Describe how this service is optimized for the Kenyan market (e.g., M-Pesa integration, local regulations, Nairobi-based support).',
              },
            },
            {
              name: 'kenyanContextBackgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Kenyan Context Background Image',
            },
          ],
        },
      ],
    },
  ],
}
