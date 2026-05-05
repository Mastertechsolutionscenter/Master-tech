import type { Block } from 'payload'

export const LocalExpertise: Block = {
  slug: 'localExpertise',
  interfaceName: 'LocalExpertiseBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Local Expertise, Global Standards',
    },
    {
      name: 'content',
      type: 'textarea',
    },
    {
      name: 'secondaryContent',
      type: 'textarea',
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
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
