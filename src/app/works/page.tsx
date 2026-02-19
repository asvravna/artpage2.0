import Link from "next/link"
import ArtworkImage from "../components/ArtrworkImage"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f6f4] text-gray-900">

      {/* PAGE CONTAINER */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* FLEX WRAPPER */}
        <div className="flex flex-col gap-12 md:flex-row">

          {/* SIDEBAR */}
          <aside className="md:w-56 md:shrink-0 space-y-6">

            <div>
              <h1 className="text-xl leading-tight">
                Anna Ravna
                <br />
                <span className="italic text-gray-500">paintings</span>
              </h1>
            </div>


            <nav className="text-sm text-gray-600">
              <ul className="flex gap-6 md:flex-col md:gap-2">
                <li><Link href="/gallery" className="hover:text-black">works</Link></li>
                <li><Link href="/about" className="hover:text-black">about</Link></li>
                <li><Link href="/contact" className="hover:text-black">contact</Link></li>
              </ul>
            </nav>


          </aside>

          {/* MAIN CONTENT */}
          <section className="flex-1 space-y-16">

            {/* FEATURED ARTWORK */}
            <div className="mx-auto w-full max-w-3xl">
              <ArtworkImage
                src="/images/grå_skyer.jpeg"
                alt="Painting"
                title="Grey clouds over the water"
                subtitle="Aquarelle · 2022"

                
                priority
              />
            </div>

            {/* MORE ARTWORKS EXAMPLE */}
            <div className="grid gap-10 sm:grid-cols-2">
               <ArtworkImage
                src="/images/stille.jpeg"
                alt="Painting"
                title="Gaia"
                subtitle="Aquarelle · 2022"
              /> <ArtworkImage
                src="/images/frontpage2.jpg"
                alt="Shimmer painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2023"
              />
               <ArtworkImage
                src="/images/untitled4.jpg"
                alt="Painting"
                title="Rose pedals"
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
              {/* <ArtworkImage
                src="/images/untitled0.jpg"
                alt="Painting"
                title="Gaia"
                subtitle="Acrylic on canvas · 2022"
              /> */}
             
              <ArtworkImage
                src="/images/untitled2.jpg"
                alt="Painting"
                title="Untitled"
                subtitle="Acrylic on canvas · 2021"
              />
              {/* <ArtworkImage
                src="/images/untitled2.jpg"
                alt="Painting"
                title="Gaia"
                subtitle="Acrylic on canvas · 2022"
              /> */}
            </div>

          </section>

        </div>
      </div>
          
        <section id="footer">
          <Footer/>
        </section>

    </main>

  )
}
