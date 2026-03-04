"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import SidebarNav from "../components/SidebarNav";
import Footer from "../components/Footer";

function ToggleImage({
  images,
  alt,
  className = "",
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const touchStartX = useRef<number | null>(null);

  const go = (dir: "left" | "right") => {
    if (animating) return;
    setSlideDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setIndex(prev =>
        dir === "right"
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      );
      setAnimating(false);
    }, 260);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? "right" : "left");
    touchStartX.current = null;
  };

  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={() => go("left")}
          aria-label="Previous image"
          className="flex-shrink-0 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          className="relative flex-1 h-78 w-48 sm:h-60 md:h-80 overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: animating
                ? `translateX(${slideDir === "right" ? "-100%" : "100%"})`
                : "translateX(0%)",
              opacity: animating ? 0 : 1,
              transition: "transform 260ms ease-in-out, opacity 220ms ease-in-out",
            }}
          >
            <Image
              src={images[index]}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <button
          onClick={() => go("right")}
          aria-label="Next image"
          className="flex-shrink-0 flex items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mt-3">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === index ? "bg-gray-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="relative flex flex-col min-h-screen text-gray-900 overflow-hidden">
      {/* Background */}
      <Image
        src="/images/untitled4.jpg"
        alt=""
        fill
        className="object-cover opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-[#f6f6f4]/60" />

      {/* Mobile nav */}
      <nav className="flex gap-6 justify-center w-full py-4 md:hidden z-20 fixed top-0 bg-[#f6f6f4]/80">
        <a href="/" className="hover:underline">Home</a>
        <a href="/works" className="hover:underline">Works</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>

      
      <div className="hidden md:block">
        <SidebarNav />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 md:px-12 pt-28 md:pt-20 pb-12">

        {/* Profile image — mobile only, above the grid */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="relative w-78 h-40 overflow-hidden shadow-md">
            <Image
              src="/images/personal.JPG"
              alt="Anna Sofie Vylka Ravna"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

         

          {/* CENTER: profile image (desktop only) stacked above text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-2 md:px-4 mt-6 md:mt-0">

            {/* Profile image — desktop only */}
            <div className="hidden md:block relative w-82 h-52 overflow-hidden shadow-md">
              <Image
                src="/images/personal.JPG"
                alt="Anna Sofie Vylka Ravna"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Anna Sofie Vylka Ravna is a visual artist working with watercolor,
              acrylic and oil. Her work draws deeply from landscapes — tundra, mountains,
              coastlines — seeking to capture the atmosphere of being within nature
              rather than depicting it directly.
            </p>
            <p className="italic text-gray-600 text-sm sm:text-base">
              "Some motifs come from real places, while others emerge from fragments
              of memory and imagination."
            </p>
          </div>
           {/* LEFT IMAGE */}
          <ToggleImage
            images={["/images/2.jpeg", "/images/1.jpeg"]}
            alt="Reference photo"
            className="self-start md:-mt-8"
          />

          {/* RIGHT IMAGE */}
          <ToggleImage
            images={["/images/foto.JPG", "/images/gaia_klippet.jpg"]}
            alt="Gaia painting"
            className="self-start md:mt-8 mt-6"
          />

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-neutral-800 w-full">
        <Footer />
      </div>
    </main>
  );
}