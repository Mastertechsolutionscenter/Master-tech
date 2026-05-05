import type { Block } from 'payload'

export const ServicesGrid: Block = {
  slug: 'servicesGrid',
  interfaceName: 'ServicesGridBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Digital Transformation & Technology',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'Digitize operations, automate workflows, and leverage data to boost efficiency and revenue',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
      label: 'Select Service to display its Sub-services',
    },
  ],
}
