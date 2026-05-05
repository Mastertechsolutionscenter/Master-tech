import type { GlobalConfig } from 'payload'

import { authenticated } from '../access/authenticated'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site Content',
  },
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroTitle',
              type: 'text',
              required: true,
              defaultValue: 'Your trusted digital solutions partner',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          label: 'Organization',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              defaultValue: 'Master Tech Solutions Center',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'logo',
              type: 'text',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          label: 'Contact & Location',
          fields: [
            {
              name: 'telephone',
              type: 'text',
              required: true,
            },
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'street', type: 'text' },
                { name: 'city', type: 'text' },
                { name: 'region', type: 'text' },
                { name: 'postalCode', type: 'text' },
                { name: 'country', type: 'text' },
              ],
            },
            {
              name: 'geo',
              type: 'group',
              fields: [
                { name: 'latitude', type: 'number' },
                { name: 'longitude', type: 'number' },
              ],
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'twitter',
              type: 'text',
            },
            {
              name: 'instagram',
              type: 'text',
            },
            {
              name: 'linkedin',
              type: 'text',
            },
            {
              name: 'tiktok',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
