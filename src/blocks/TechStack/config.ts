import type { Block } from 'payload'

export const TechStack: Block = {
  slug: 'techStack',
  interfaceName: 'TechStackBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Our Tech Stack',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Modern Tools for African Enterprises',
    },
    {
      name: 'technologies',
      type: 'array',
      required: true,
      minRows: 1,
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
        },
      ],
    },
  ],
}
