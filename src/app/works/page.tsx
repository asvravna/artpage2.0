"use client";
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import ArtworkImage from "../components/ArtrworkImage"


export default function Works() {
  return (
    <main className="min-h-screen bg-[#f6f6f4] text-gray-900">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* LOGO */}
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

        {/* FLEX WRAPPER */}
        <div className="flex flex-col gap-12 md:flex-row">

          {/* SIDEBAR */}
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
                <li><Link href="/works" className="hover:underline hover:underline-offset-4">works</Link></li>
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
                subtitle="Aquarelle · 2022"
                priority
              />
            </div>

            {/* ARTWORK GRID */}
            <div className="grid gap-10 sm:grid-cols-2">
              <ArtworkImage
                src="/images/stille.jpg"
                alt="Painting"
                title="Stille"
                subtitle="Aquarelle · 2022"
              />
               <ArtworkImage
                src="/images/Untitled3.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic · 2020"
              />
              <ArtworkImage
                src="/images/frontpage2.jpg"
                alt="Shimmer painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2020"
              />
              <ArtworkImage
                src="/images/untitled4.jpg"
                alt="Painting"
                title="Blomstring"
                subtitle="Oil on canvas · 2022"
              />
              <ArtworkImage
                src="/images/bohcuid.jpg"
                alt="Landscape painting"
                title="Bohccuid"
                subtitle="Acrylic on canvas · 2020"
              />
              <ArtworkImage
                src="/images/deatnu.jpg"
                alt="Painting"
                title="Rødberget"
                subtitle="Acrylic on canvas · 2022"
              />
              <ArtworkImage
                src="/images/redigert_gaia.jpg"
                alt="Painting"
                title="Gaia"
                subtitle="Acrylic on canvas · 2022"
              />
              <ArtworkImage
                src="/images/untitled1.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
              <ArtworkImage
                src="/images/untitled0.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
              <ArtworkImage
                src="/images/untitled2.jpg"
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