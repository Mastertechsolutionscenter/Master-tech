import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Services',
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'updatedAt'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'isGeneral',
      type: 'checkbox',
      label: 'Is this a General FAQ?',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Related Services',
      admin: {
        position: 'sidebar',
        condition: (data) => !data.isGeneral,
      },
    },
  ],
}
