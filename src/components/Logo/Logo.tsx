import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Master Tech Solutions Center Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('h-16 w-16 rounded-full object-cover', className)}
      src="/logo.jpeg"
    />
  )
}
