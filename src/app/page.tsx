"use client";
import Image from "next/image"
import Link from "next/link"
import Footer from "./components/Footer"
import Grainient from "./components/Grainient"
export default function Home() {
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-50 flex-1 w-full">
        <div className="flex flex-col gap-12 md:flex-row">
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
                <li><Link href="/contact" className="hover:text-black">contact</Link></li>
              </ul>
            </nav>
          </aside>
          <section className="flex-1 space-y-16">
            {/* your artworks go here */}
          </section>
        </div>
      </div>
      <Footer/>
    </main>
  )
}