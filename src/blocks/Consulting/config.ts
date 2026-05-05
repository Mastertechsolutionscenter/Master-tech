import type { Block } from 'payload'
import { linkGroup } from '../../fields/linkGroup'

export const Consulting: Block = {
  slug: 'consulting',
  interfaceName: 'ConsultingBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: "Let's Talk About Your Digital Strategy",
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'Consulting & Digital Strategy',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 1,
      },
    }),
  ],
}
