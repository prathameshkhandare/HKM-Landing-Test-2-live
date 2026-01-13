'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <p className="text-gray-600 mb-8">
                A critical error occurred. Please try refreshing the page.
            </p>
            <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#ea580c] text-white rounded-full font-bold hover:bg-[#c2410c] transition-colors"
            >
            Try again
            </button>
        </div>
      </body>
    </html>
  )
}
