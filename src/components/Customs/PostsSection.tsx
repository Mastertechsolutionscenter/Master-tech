import React from 'react'
import { Card, CardPostData } from '@/components/Card'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export async function PostsSection() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      meta: true,
    },
    pagination: false,
  })

  if (!posts.docs.length) {
    return (
      <section className="py-24 bg-neutral-50 dark:bg-black">
        <div className="w-11/12 lg:w-4/5 mx-auto text-center">
          <p className="text-lg text-neutral-400">No insights published yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-neutral-50 dark:bg-black">
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#A67C00] font-bold text-sm uppercase tracking-widest mb-3">Our Blog</h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white">
              Latest Insights & Tech News
            </h3>
          </div>
          
          <Link 
            href="/posts" 
            className="group flex items-center text-sm font-bold uppercase tracking-widest text-[#A67C00] transition-all"
          >
            View All Articles
            <span className="ml-2 w-8 h-px bg-[#A67C00] transition-all group-hover:w-12" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.docs.map((post) => (
            <Card key={post.id} doc={post as CardPostData} relationTo="posts" />
          ))}
        </div>
      </div>
    </section>
  )
}
