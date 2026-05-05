import type { Block } from 'payload'

export const MissionVision: Block = {
  slug: 'missionVision',
  interfaceName: 'MissionVisionBlock',
  fields: [
    {
      name: 'mission',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Mission' },
        { name: 'content', type: 'textarea' },
        { name: 'secondaryContent', type: 'textarea' },
      ],
    },
    {
      name: 'vision',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Vision' },
        { name: 'content', type: 'textarea' },
        { name: 'secondaryContent', type: 'textarea' },
      ],
    },
  ],
}
