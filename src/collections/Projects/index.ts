import type { CollectionConfig } from 'payload'
import { isAdmin } from '../../access/isAdmin'
import { isClientOfProject } from '../../access/isClientOfProject'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: isAdmin,
    read: isClientOfProject,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'projectName',
    defaultColumns: ['projectName', 'client', 'status', 'updatedAt'],
  },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      required: true,
      label: 'Project Name',
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Client Partner',
      admin: {
        description: 'Select the client who will see this on their dashboard.',
      },
      filterOptions: {
        role: { equals: 'client' },
      },
    },
    {
        type: 'row',
        fields: [
          {
            name: 'status',
            type: 'select',
            defaultValue: 'planning',
            options: [
              { label: 'Strategic Planning', value: 'planning' },
              { label: 'In Development', value: 'development' },
              { label: 'Quality Assurance', value: 'qa' },
              { label: 'Launched', value: 'launched' },
              { label: 'Maintenance', value: 'maintenance' },
            ],
            required: true,
            admin: {
              width: '50%',
            },
          },
          {
            name: 'progress',
            type: 'number',
            defaultValue: 0,
            label: 'Completion Percentage',
            min: 0,
            max: 100,
            admin: {
              width: '50%',
              step: 5,
            },
          },
        ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Active Services',
    },
    {
      name: 'milestones',
      type: 'array',
      label: 'Project Roadmap',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'completed',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'date',
          type: 'date',
          label: 'Estimated/Completion Date',
        },
      ],
    },
    {
      name: 'portalMessage',
      type: 'textarea',
      label: 'Personal Note to Client',
      admin: {
        description: 'A brief update that will appear at the top of their dashboard.',
      },
    },
  ],
  timestamps: true,
}
