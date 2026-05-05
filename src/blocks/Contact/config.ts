import type { Block } from 'payload'

export const Contact: Block = {
  slug: 'contactBlock',
  interfaceName: 'ContactBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Ready To Elevate Your Business?',
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue: "Contact us today and let's discuss how we can help you grow with smart digital solutions.",
    },
    {
      name: 'showDetails',
      type: 'checkbox',
      label: 'Show Office Details (Phone, Email, Address)',
      defaultValue: false,
    },
  ],
}
