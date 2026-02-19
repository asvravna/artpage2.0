"use client";
import Image from "next/image"
import Link from "next/link"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-[120vh] text-gray-900 overflow-hidden">

      {/* Background painting */}
      <Image
        src="\images\image1.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Softening overlay */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 flex-1 w-full">
        <div className="flex flex-col gap-12 md:flex-row">
          <aside className="md:w-56 md:shrink-0 space-y-6">
            <div>
               <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src="/logo_background.webp"
                  alt="Anna Ravna logo"
                  width={90}
                  height={90}
                  className="object-contain"
                  priority
                />
              </Link>
              <h1 className="text-2xl leading-tight">
                Anna S. Vylka Ravna
                <br />
                <span className="italic text-gray-600">paintings</span>
              </h1>
            </div>
            <nav className="text-base text-gray-700 ">
              <ul className="flex gap-6 md:flex-col md:gap-3">
                <li><Link href="/works" className="hover:underline hover:underline-offset-4">works</Link></li>
                <li><Link href="/about" className="hover:underline hover:underline-offset-4">about</Link></li>
                <li><Link href="/contact" className="hover:underline hover:underline-offset-4">contact</Link></li>
              </ul>
            </nav>
          </aside>
          <section className="flex-1 space-y-16">
          </section>
        </div>
      </div>

      <div className="relative z-10 bg-neutral-800">
        <Footer />
      </div>

    </main>
  )
}