import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f6f6f4] text-gray-900 p-6 text-center">

      <h1 className="text-4xl font-light mb-4">404</h1>

      <p className="text-gray-600 mb-8 max-w-md">
        <br />
        
      </p>

      <Link
        href="/"
        className="border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition"
      >
        Back to home
      </Link>

    </main>
  )
}
