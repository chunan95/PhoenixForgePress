"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/board-games", label: "Board Games" },
  { href: "/books", label: "Books" },
  { href: "/collaborate", label: "Collaborate" },
];

function FireIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-[#f0b37b]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 2.5c.3 2.1-.5 3.8-1.6 5.2-1 1.2-2.2 2.3-2.8 3.8-.6 1.3-.6 3 .1 4.3.8 1.6 2.4 2.7 4.2 2.7 2.8 0 5.1-2.2 5.1-5 0-3.2-2.1-5.1-3.4-7-.7-1-1.3-2.3-1.6-4Zm-3 11.3c1 1 1.4 1.9 1.4 2.9 0 1.4-1 2.3-2.3 2.3-1.4 0-2.5-1.2-2.5-2.7 0-1.8 1.5-3 3.4-4.7Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="tonal-shift fixed top-0 z-50 w-full rounded-none border-b border-[#5a3d2b]/45 bg-[#1a100c]/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-5 sm:px-8">
        <Link
          className="flex items-center gap-2 text-2xl font-bold text-[#fff7ec] transition-transform hover:scale-[1.02]"
          href="/"
        >
          <FireIcon />
          <span className="font-headline">Phoenix Forge Press</span>
        </Link>

        <div className="hidden items-center space-x-10 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={[
                  "font-body text-sm uppercase tracking-[0.22em] transition-colors duration-300",
                  isActive
                    ? "border-b-2 border-[#f0b37b] pb-1 text-[#fffaf3]"
                    : "text-[#f6eadc] hover:text-[#f0b37b]",
                ].join(" ")}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          className="bg-[#cf7422] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition duration-100 hover:bg-[#de8a3c] active:scale-95 sm:px-6"
          href="/collaborate"
        >
          Collaborate
        </Link>
      </div>
    </nav>
  );
}
