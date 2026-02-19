import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center text-gray-900 p-6 text-center overflow-hidden">
      
      <Image
        src="/images/image1.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />

      <div className="absolute inset-0 bg-[#f6f6f4]/50" />

      <div className="relative z-10">
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          
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