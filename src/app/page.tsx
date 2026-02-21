"use client";
import Image from "next/image"
import Link from "next/link"
import Footer from "./components/Footer"
import SidebarNav from "./components/SidebarNav"


export default function Home() {
  return (
    <main className="relative flex flex-col min-h-[180vh] text-gray-900 overflow-hidden">
      <Image
        src="/images/stille2.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 flex-1 w-full">
        <div className="flex flex-col gap-12 md:flex-row">
          <aside className="md:w-56 md:shrink-0 space-y-6">
            <div>
              <SidebarNav/>
            </div>
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