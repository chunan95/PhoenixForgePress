"use client";

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

  return (
    <nav className="tonal-shift fixed top-0 z-50 w-full rounded-none border-b border-[#5a3d2b]/45 bg-[#1a100c]/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 py-5 sm:px-8">
        <Link
          className="flex items-center gap-2 text-2xl font-bold text-[#fff7ec] transition-transform hover:scale-[1.02]"
          href="/"
        >
          <Image
            alt="Phoenix Forge Press logo"
            aria-hidden="true"
            className="h-9 w-9 object-contain"
            height={36}
            priority
            src="/images/Phoenix%20Forge%20Press%20Shirt%20Design%20-%201.png"
            width={36}
          />
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
