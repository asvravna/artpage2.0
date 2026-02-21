"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();
  return (
    <aside className="fixed top-20 left-4 md:left-20 w-56 space-y-6 z-20">
  {/* Logo + name */}
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

  {/* Navigation */}
  <nav className="text-base text-gray-700">
    <ul className="space-y-2">
      <li>
        <Link
          href="/works"
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/works" ? "underline underline-offset-4" : ""
          }`}
        >
          works
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/about" ? "underline underline-offset-4" : ""
          }`}
        >
          about
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={`hover:underline hover:underline-offset-4 ${
            pathname === "/contact" ? "underline underline-offset-4" : ""
          }`}
        >
          contact
        </Link>
      </li>
    </ul>
  </nav>
</aside>
  );
}
