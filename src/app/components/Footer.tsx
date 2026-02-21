"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-200 px-8 py-12 text-neutral-500">
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-between gap-8 md:gap-6">
        <div className="w-full text-center md:w-auto md:text-left">
          {/* <h4 className="mb-4 text-lg font-semibold">Works</h4> */}
          <ul className="space-y-2">
            <li>
              <a
                href="/works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
              Works
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center md:w-auto md:text-left">
          {/* <h4 className="mb-4 text-lg font-semibold">About</h4> */}
            <ul className="space-y-2">
            <li>
              <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
              About
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full text-center md:w-auto md:text-left">
          {/* <h4 className="mb-4 text-lg font-semibold">Contact</h4> */}
            <ul className="space-y-2">
            <li>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition hover:text-neutral-900"
              >
              Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-screen-xl  pt-4 text-center">
        <p className="text-sm text-grey">
          &copy; {new Date().getFullYear()} Anna Ravna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
