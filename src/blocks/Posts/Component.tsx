import React from 'react'
import { PostsSection } from '@/components/Customs/PostsSection'
import type { PostsBlock as PostsBlockProps } from '@/payload-types'

export const PostsBlock: React.FC<PostsBlockProps> = ({ title }) => {
  return (
    <PostsSection />
  )
}
