import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Grow Your Business Faster with Smart Digital Solutions',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Custom software, secure systems and conversion-focused digital tools that improve business revenue and operational efficiency.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
