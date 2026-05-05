'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>

      <p className="text-muted-foreground mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred while processing your request.
      </p>

      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="default">
          Try again
        </Button>

        <Button asChild variant="outline">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}