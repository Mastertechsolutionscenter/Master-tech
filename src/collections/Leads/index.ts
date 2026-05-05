import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'

export const Leads: CollectionConfig = {
  slug: 'leads',
  access: {
    // Only admins can read, create (via admin UI), update or delete leads
    // Note: The public creation will happen via the Local API in a Server Action
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: 'Leads',
    useAsTitle: 'email',
    defaultColumns: ['firstname', 'lastname', 'email', 'status', 'createdAt'],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstname',
          type: 'text',
          required: true,
        },
        {
          name: 'lastname',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New Inquiry', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Proposal Sent', value: 'proposal_sent' },
        { label: 'Meeting Scheduled', value: 'meeting' },
        { label: 'Qualified/Converted', value: 'converted' },
        { label: 'Closed/Lost', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
