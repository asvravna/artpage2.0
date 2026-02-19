import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-gray-900 p-6 text-center overflow-hidden">
      
      {/* Background painting */}
      <Image
        src="/images/stille.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Overlay to soften it */}
      <div className="absolute inset-0 bg-[#f6f6f4]/50" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          This page does not exist.
        </p>
        <Link
          href="/"
          className="border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition"
        >
          Back to home
        </Link>
      </div>

    </main>
  )
}