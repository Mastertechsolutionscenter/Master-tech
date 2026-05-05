import type { Block } from 'payload'

export const Services: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Transform Your Business',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Discover Our Comprehensive Suite of Services and Tools to Elevate Your Business',
    },
  ],
}
