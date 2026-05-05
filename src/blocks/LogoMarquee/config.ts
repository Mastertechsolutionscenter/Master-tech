import type { Block } from 'payload'

export const LogoMarquee: Block = {
  slug: 'logoMarquee',
  interfaceName: 'LogoMarqueeBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Trusted by Innovative Companies',
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      minRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
