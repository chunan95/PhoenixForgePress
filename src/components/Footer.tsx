import Link from "next/link";

export default function Footer() {
  return (
    <footer className="tonal-shift w-full rounded-none border-t-4 border-[#0d4f5f] bg-[#22140f] text-[#fff7ec]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-16 px-8 py-20 md:grid-cols-2 md:px-12 md:py-24">
        <div className="flex flex-col justify-between">
          <div>
            <span className="mb-8 block font-headline text-5xl text-[#fff7ec] opacity-10 md:text-6xl">
              Phoenix Forge Press
            </span>
            <p className="max-w-sm font-body text-[10px] uppercase tracking-[0.2em] leading-loose text-[#d6c7ba]">
              Curating the intersection of industrial craft and imaginative
              depth. Every piece is an heirloom forged for eternity.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#d6c7ba]">
              © Phoenix Forge Press. All rights reserved.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-[#f0b37b]">
              Inquiries
            </h4>
            <Link
              className="font-body text-[10px] uppercase tracking-[0.2em] text-[#d6c7ba] transition-all hover:text-[#cf7422] hover:underline underline-offset-8"
              href="/about"
            >
              Contact
            </Link>
            <Link
              className="font-body text-[10px] uppercase tracking-[0.2em] text-[#d6c7ba] transition-all hover:text-[#cf7422] hover:underline underline-offset-8"
              href="/about"
            >
              Philosophy
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-[#f0b37b]">
              Registry
            </h4>
            <a
              className="font-body text-[10px] uppercase tracking-[0.2em] text-[#d6c7ba] transition-all hover:text-[#cf7422] hover:underline underline-offset-8"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="font-body text-[10px] uppercase tracking-[0.2em] text-[#d6c7ba] transition-all hover:text-[#cf7422] hover:underline underline-offset-8"
              href="mailto:hello@phoenixforgepress.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
