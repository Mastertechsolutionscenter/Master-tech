import type { Block } from 'payload'

export const Posts: Block = {
  slug: 'postsBlock',
  interfaceName: 'PostsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Latest from our Blog',
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
    },
  ],
}
