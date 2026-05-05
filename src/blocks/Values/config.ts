import type { Block } from 'payload'

export const Values: Block = {
  slug: 'values',
  interfaceName: 'ValuesBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Core Values',
    },
    {
      name: 'points',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
