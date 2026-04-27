"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/board-games", label: "Board Games" },
  { href: "/books", label: "Books" },
  { href: "/collaborate", label: "Collaborate" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="tonal-shift fixed top-0 z-50 w-full rounded-none border-b border-[#5a3d2b]/45 bg-[#1a100c]/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <Link
          className="flex min-w-0 items-center gap-2 text-[#fff7ec] transition-transform hover:scale-[1.02]"
          href="/"
          onClick={closeMobileMenu}
        >
          <Image
            alt="Phoenix Forge Press logo"
            aria-hidden="true"
            className="h-9 w-9 shrink-0 object-contain"
            height={36}
            priority
            src="/images/Phoenix%20Forge%20Press%20Shirt%20Design%20-%201.png"
            width={36}
          />
          <span className="font-headline text-xl leading-none sm:text-2xl">
            Phoenix Forge Press
          </span>
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
          className="hidden bg-[#cf7422] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition duration-100 hover:bg-[#de8a3c] active:scale-95 md:inline-block md:px-6"
          href="/collaborate"
        >
          Collaborate
        </Link>

        <button
          aria-controls="mobile-site-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#f0b37b]/55 bg-[#211611] text-[#fffaf3] transition hover:bg-[#2b1c15] md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={[
                "block h-0.5 w-full bg-current transition-transform duration-200",
                isMobileMenuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-full bg-current transition-opacity duration-200",
                isMobileMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-full bg-current transition-transform duration-200",
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          className="border-t border-[#5a3d2b]/45 bg-[#1a100c]/98 px-5 pb-5 md:hidden"
          id="mobile-site-menu"
        >
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  className={[
                    "border px-4 py-3 font-body text-sm uppercase tracking-[0.22em] transition-colors duration-300",
                    isActive
                      ? "border-[#f0b37b] bg-[#2d1c15] text-[#fffaf3]"
                      : "border-[#5a3d2b]/45 text-[#f6eadc] hover:border-[#f0b37b]/70 hover:text-[#f0b37b]",
                  ].join(" ")}
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
