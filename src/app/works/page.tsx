"use client";
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import ArtworkImage from "../components/ArtrworkImage"



export default function Works() {
  return (
    <main className="min-h-screen bg-[#f6f6f4] text-gray-900">

      <div className="mx-auto max-w-7xl px-6 py-10">

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
        <div className="flex flex-col gap-12 md:flex-row">

          <aside className="md:w-56 md:shrink-0 space-y-6">
            <div>
              <h1 className="text-xl leading-tight">
                Anna S. Vylka Ravna
                <br />
                <span className="italic text-gray-500">paintings</span>
              </h1>
            </div>
            <nav className="text-base text-gray-600">
              <ul className="flex gap-6 md:flex-col md:gap-2">
                <li><Link href="/works" className="hover:underline hover:underline-offset-4 underline underline-offset-4  ">works</Link></li>
                <li><Link href="/about" className="hover:underline hover:underline-offset-4">about</Link></li>
                <li><Link href="/contact" className="hover:underline hover:underline-offset-4">contact</Link></li>
              </ul>
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <section className="flex-1 space-y-16">

            {/* FEATURED ARTWORK */}
            <div className="mx-auto w-full max-w-3xl">
              <ArtworkImage
                src="/images/image1.jpg"
                alt="Painting"
                title="Mørke skyer over fjorden"
                subtitle="Aquarelle · 2026"
                priority
              />
            </div>

            {/* ARTWORK GRID */}
            <div className="grid gap-10 sm:grid-cols-2">
              <ArtworkImage
                src="/images/stille2.jpg"
                alt="Painting"
                title="Stille"
                subtitle="Aquarelle · 2026"
              />
               <ArtworkImage
                src="/images/Untitled3.jpg"
                alt="Painting"
                title="Čáhci"
                subtitle="Acrylic on canvas· 2020"
              />
              <ArtworkImage
                src="/images/frontpage2.jpg"
                alt="Shimmer painting"
                title="Yttersia"
                subtitle="Acrylic on canvas · 2020"
              />
              <div className="max-w-sm">
                <ArtworkImage
                  src="/images/untitled4.JPG"
                  alt="Painting"
                  title="Blomstring"
                  subtitle="Oil on canvas · 2022"
                />
              </div>
              <ArtworkImage
                src="/images/entropy.jpg"
                alt="Painting"
                title="Entropi"
                subtitle="Acrylic on canvas · 2020"
              />
              <ArtworkImage
                src="/images/bohcuid.jpg"
                alt="Landscape painting"
                title="Vinterbeite"
                subtitle="Acrylic on canvas · 2020"
              />
              <ArtworkImage
                src="/images/deatnu2.jpg"
                alt="Painting"
                title="Rødberget"
                subtitle="Acrylic on canvas · 2022"
              />
              <ArtworkImage
                src="/images/gaia_klippet.jpg"
                alt="Painting"
                title="Gaia"
                subtitle="Acrylic on canvas · 2022"
              />
              <ArtworkImage
                src="/images/Untitled1.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
               <ArtworkImage
                src="/images/birkelunden_redigert.jpg"
                alt="Painting"
                title="Birkelunden"
                subtitle="Oil on canvas · 2024"
              />
              <ArtworkImage
                src="/images/untitled0.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
              <ArtworkImage
                src="/images/Untitled2.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
            </div>
          </section>
        </div>
      </div>

      <Footer />

    </main>
  )
}