import Link from "next/link";

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="tonal-shift w-full rounded-none border-t-4 border-[#1C1B1B] bg-[#0E0E0E]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-16 px-8 py-20 md:grid-cols-2 md:px-12 md:py-24">
        <div className="flex flex-col justify-between">
          <div>
            <span className="mb-8 block font-headline text-5xl text-on-surface opacity-10 md:text-6xl">
              Phoenix Forge Press
            </span>
            <p className="max-w-sm font-body text-[10px] uppercase tracking-[0.2em] leading-loose text-on-surface-variant">
              Curating the intersection of industrial craft and imaginative
              depth. Every piece is an heirloom forged for eternity.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              © Phoenix Forge Press. All rights reserved.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              Inquiries
            </h4>
            <Link
              className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-primary hover:underline underline-offset-8"
              href="/about"
            >
              Contact
            </Link>
            <Link
              className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-primary hover:underline underline-offset-8"
              href="/about"
            >
              Philosophy
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-body text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
              Registry
            </h4>
            <a
              className="font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-primary hover:underline underline-offset-8"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-all hover:text-primary hover:underline underline-offset-8"
              href="mailto:hello@phoenixforgepress.com"
            >
              <MailIcon />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
