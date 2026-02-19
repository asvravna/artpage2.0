"use client";

import Link from "next/link"
import Footer from "../components/Footer"
import Grainient from "../components/Grainient"

export default function Contact() {
    const email = "ansvravna" + "@" + "gmail.com"
// <a href={`mailto:${email}`}>{email}</a>
  return (
    <main className="relative flex flex-col min-h-[200vh] text-gray-900 overflow-hidden">

      <div className="fixed inset-0 -z-10">
        <Grainient
          color1="#a8300f"
          color2="#201796"
          color3="#ca9d4f"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-white/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 flex-1 w-full">
        <div className="flex flex-col gap-12 md:flex-row">

          {/* Sidebar */}
          <aside className="md:w-56 md:shrink-0 space-y-6">
            <div>
              <h1 className="text-xl leading-tight">
                Anna Ravna
                <br />
                <span className="italic text-gray-700">paintings</span>
              </h1>
            </div>
            <nav className="text-sm text-gray-700">
              <ul className="flex gap-6 md:flex-col md:gap-2">
                <li><Link href="/works" className="hover:text-black">works</Link></li>
                <li><Link href="/about" className="hover:text-black">about</Link></li>
                <li><Link href="/contact" className="hover:text-black text-black underline underline-offset-4">contact</Link></li>
              </ul>
            </nav>
          </aside>

          {/* Contact content */}
          <section className="flex-1 space-y-12 pt-1 text-black">
            <div className="space-y-1">
              <h2 className="text-3xl font-light tracking-tight">contact:</h2>
              <div className="w-10 h-px mt-2" />
            </div>

            <div className="space-y-8 text-sm max-w-sm space-y-1 ">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest">email</p>
                <p className="text-base ">
                  ansvravna [at] gmail [dot] com
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest ">location</p>
                <p className="text-base ">Oslo, Norway</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}