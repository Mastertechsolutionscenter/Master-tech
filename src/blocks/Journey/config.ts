import type { Block } from 'payload'

export const Journey: Block = {
  slug: 'journey',
  interfaceName: 'JourneyBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'The Journey to Success',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      defaultValue: "We've refined a process that ensures clarity, quality, and results at every stage of your digital transformation.",
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 3,
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
          admin: {
            description: 'Short phrase for the side visual (e.g., "Strategic Alignment")',
          },
        },
      ],
    },
  ],
}
