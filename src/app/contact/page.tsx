"use client";
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <main className="relative flex flex-col min-h-[120vh] text-[#3b1f0f] overflow-hidden">

      {/* Background painting */}
      <Image
        src="/images/Untitled1.jpg"
        alt=""
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Softening overlay */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 flex-1 w-full flex flex-col">
        <div className="flex flex-col gap-12 md:flex-row flex-1">

          {/* Sidebar */}
          <aside className="md:w-56 md:shrink-0 flex flex-col space-y-6">
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
            <div>
              <h1 className="text-2xl leading-tight">
                Anna Ravna
                <br />
                <span className="italic">paintings</span>
              </h1>
            </div>
            <nav className="text-base text-2xl">
              <ul className="flex gap-6 md:flex-col md:gap-2">
                <li><Link href="/works" className="hover:opacity-60">works</Link></li>
                <li><Link href="/about" className="hover:opacity-60">about</Link></li>
                <li><Link href="/contact" className="underline underline-offset-4">contact</Link></li>
              </ul>
            </nav>
          </aside>

          <section className="flex-1 flex flex-col pt-30 pb-16 space-y-8">
            <h2 className="text-3xl font-light tracking-tight">contact:</h2>
            <div className="space-y-8 max-w-sm">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest opacity-100">email</p>
                <p className="text-base">anna@ravna.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest opacity-100">location</p>
                <p className="text-base">Oslo, Norway</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <div className="relative z-10 bg-neutral-800">
        <Footer />
      </div>

    </main>
  )
}