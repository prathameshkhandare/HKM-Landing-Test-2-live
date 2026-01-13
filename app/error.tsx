'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="default"
        className="bg-[#ea580c] hover:bg-[#c2410c] text-white"
      >
        Try again
      </Button>
    </div>
  )
}
