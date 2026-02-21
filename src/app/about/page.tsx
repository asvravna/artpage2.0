"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SidebarNav from "../components/SidebarNav";

export default function About() {
  const [leftImage, setLeftImage] = useState("/images/foto.JPG");
  const [rightImage, setRightImage] = useState("/images/2.jpeg");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeftImage("/images/gaia_klippet.jpg");
      setRightImage("/images/1.jpeg");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex flex-col items-center text-gray-900 p-6 overflow-hidden min-h-screen">
      {/* Background */}
      <Image
        src="/images/untitled4.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-[#f6f6f4]/60" />

      {/* Mobile horizontal nav */}
      <nav className="flex gap-6 justify-center w-full py-4 md:hidden z-20 fixed top-0 bg-[#f6f6f4]/80">
        <a href="/" className="hover:underline">Home</a>
        <a href="/works" className="hover:underline">Works</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>

      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <SidebarNav />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-12 my-28 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

          {/* LEFT IMAGE – photo */}
          <div className="flex justify-center md:justify-start self-start md:-mt-8">
            <div className="relative w-3/4 sm:w-2/3 md:w-full h-48 sm:h-60 md:h-80">
              <Image
                src={rightImage}
                alt="Reference photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-2 md:px-4 mt-6 md:mt-0">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Anna Sofie Vylka Ravna is a visual artist working with watercolor,
              acrylic and oil. Her work
              draws deeply from landscapes — tundra, mountains, coastlines —
              seeking to capture the atmosphere of being within nature rather
              than depicting it directly.
            </p>
            <p className="italic text-gray-600 text-sm sm:text-base">
              “Some motifs come from real places, while others emerge
              from fragments of memory and imagination.”
            </p>
          </div>

          {/* RIGHT IMAGE – painting */}
          <div className="flex justify-center md:justify-start self-start md:mt-8 mt-6">
            <div className="relative w-3/4 sm:w-2/3 md:w-full h-48 sm:h-60 md:h-80">
              <Image
                src={leftImage}
                alt="Gaia painting"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}