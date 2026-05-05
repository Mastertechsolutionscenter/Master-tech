import type { GlobalConfig } from 'payload'
import { authenticated } from '../access/authenticated'

export const Contact: GlobalConfig = {
  slug: 'contact',
  admin: {
    group: 'Site Content',
  },
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: "Let's Talk Business",
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: "Contact us today and let's discuss how we can help you grow with smart digital solutions.",
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          required: true,
          defaultValue: '+254 723 230203',
        },
        {
          name: 'email',
          type: 'text',
          required: true,
          defaultValue: 'info@mastertechsolutionscenter.com',
        },
        {
          name: 'address',
          type: 'text',
          required: true,
          defaultValue: 'Lunga Lunga Square, Nairobi',
        },
        {
            name: 'whatsappNumber',
            type: 'text',
            required: true,
            defaultValue: '254723230203',
            admin: {
                description: 'Format: 254XXXXXXXXX (No + sign)',
            }
        }
      ]
    },
    {
      name: 'nextSteps',
      type: 'array',
      defaultValue: [
        { step: 'We schedule a call at your convenience' },
        { step: 'We do a discovery and consulting meeting' },
        { step: 'We prepare a proposal' },
      ],
      fields: [
        {
          name: 'step',
          type: 'text',
          required: true,
        }
      ]
    }
  ]
}
