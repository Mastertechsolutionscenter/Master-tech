import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactFormBlock',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Let’s Build Something Great Together',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: 'Ready to start your digital journey? Our experts are just a message away.',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'whatsappNumber', type: 'text' },
      ],
    },
    {
      name: 'nextSteps',
      type: 'array',
      fields: [
        { name: 'step', type: 'text' },
      ],
    },
  ],
}
