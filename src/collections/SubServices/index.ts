import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from '@/fields/slug'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'

export const SubServices: CollectionConfig = {
  slug: 'sub-services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Services',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Short Description (for archive cards)',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Full Page Content',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              required: true,
            },
            ...slugField(),
          ],
        },
        {
          label: 'Hero & Intro',
          fields: [
            {
              name: 'heroSection',
              type: 'group',
              label: '1. Hero Section',
              fields: [
                { name: 'title', type: 'text', label: 'Clear Title' },
                { name: 'valueStatement', type: 'textarea', label: 'Short Value Statement' },
                { name: 'ctaText', type: 'text', label: 'CTA Button Text' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media', label: 'Section Background Image' },
              ],
            },
            {
              name: 'overviewSection',
              type: 'group',
              label: '2. Overview / Introduction',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'Offerings & Audience',
          fields: [
            {
              name: 'offerings',
              type: 'group',
              label: '3. What We Offer in This Service',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Features / Capabilities',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'audience',
              type: 'group',
              label: '4. Who This Service Is For',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'types',
                  type: 'array',
                  label: 'Business Types / Users',
                  fields: [
                    { name: 'name', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Roadmap & Tech',
          fields: [
            {
              name: 'processSection',
              type: 'group',
              label: '5. Our Approach / Process',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'roadmap',
                  type: 'array',
                  label: 'Step-by-Step Delivery (Roadmap)',
                  minRows: 3,
                  maxRows: 6,
                  fields: [
                    {
                      name: 'day',
                      type: 'text',
                      label: 'Day/Phase (e.g., Day 1, Week 2)',
                      required: true,
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Phase Title',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'What happens during this phase?',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'benefitsSection',
              type: 'group',
              label: '6. Key Benefits',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'benefits',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                  ],
                },
              ],
            },
            {
              name: 'techSection',
              type: 'group',
              label: '7. Technology',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'techStack',
                  type: 'array',
                  label: 'Bento-Box Tech Stack',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Short Description (1-2 sentences)',
                    },
                    {
                      name: 'category',
                      type: 'select',
                      options: [
                        { label: 'Frontend', value: 'frontend' },
                        { label: 'Backend', value: 'backend' },
                        { label: 'Database', value: 'database' },
                        { label: 'DevOps/Cloud', value: 'devops' },
                        { label: 'Design', value: 'design' },
                        { label: 'Security', value: 'security' },
                      ],
                    },
                    {
                      name: 'icon',
                      type: 'select',
                      options: [
                        { label: 'Next.js', value: 'SiNextdotjs' },
                        { label: 'React', value: 'FaReact' },
                        { label: 'Node.js', value: 'FaNodeJs' },
                        { label: 'Python', value: 'FaPython' },
                        { label: 'MongoDB', value: 'SiMongodb' },
                        { label: 'PostgreSQL', value: 'SiPostgresql' },
                        { label: 'FastAPI', value: 'SiFastapi' },
                        { label: 'M-Pesa/Payment', value: 'FaSearchDollar' },
                        { label: 'Security/Lock', value: 'FaLock' },
                        { label: 'Cloud/Vercel', value: 'SiVercel' },
                        { label: 'AWS', value: 'SiAmazonwebservices' },
                        { label: 'Tailwind CSS', value: 'SiTailwindcss' },
                        { label: 'Framer Motion', value: 'SiFramermotion' },
                        { label: 'TypeScript', value: 'SiTypescript' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Cases & CTA',
          fields: [
            {
              name: 'useCasesSection',
              type: 'group',
              label: '8. Sample Use Cases',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                {
                  name: 'cases',
                  type: 'array',
                  fields: [
                    { name: 'scenario', type: 'text', required: true },
                    { name: 'application', type: 'textarea', required: true },
                  ],
                },
              ],
            },
            {
              name: 'ctaSection',
              type: 'group',
              label: '9. CTA Section',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea', label: 'Optional Description' },
                { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
                { name: 'buttonText', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'kenyanContext',
              type: 'textarea',
              label: 'Kenya Market Insight (SEO)',
              admin: {
                description: 'Optional: Localize this sub-service (e.g., M-Pesa API integration, Nairobi tech support). Only shows on site if filled.',
              },
            },
          ],
        },
      ],
    },
  ],
}
