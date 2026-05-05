import type { Block } from 'payload'

export const FAQ: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'services',
      hasMany: false,
      label: 'Specific Service (Leave empty for General FAQs)',
    },
  ],
}
