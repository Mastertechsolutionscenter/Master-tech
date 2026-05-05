import type { CollectionConfig } from 'payload'

import { isAdmin } from '../../access/isAdmin'
import { isAdminOrSelf } from '../../access/isAdminOrSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: isAdmin,
    create: isAdmin,
    delete: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  admin: {
    group: 'System',
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      label: 'Phone Number (+254...)',
      admin: {
        description: 'Used for sending the portal invitation link via WhatsApp.',
      },
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'client',
      options: [
        { label: 'Administrator', value: 'admin' },
        { label: 'Client Partner', value: 'client' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isPortalActive',
      type: 'checkbox',
      label: 'Activate Client Dashboard Access',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        condition: (data) => data.role === 'client',
      },
    },
  ],
  timestamps: true,
}
