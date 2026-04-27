import Image from "next/image";
import Link from "next/link";
import InteriorHero from "@/components/InteriorHero";

const books = [
  {
    title: "Angel From the Rust",
    status: "Available Now",
    imageSrc: "/images/Angel%20from%20the%20Rust%20-%20Jason%20Link.jpg",
    imageAlt: "Angel From the Rust cover artwork by Jason Link",
    description:
      "A distant-future fantasy where advanced technology is mistaken for magic, and one young musician must challenge a false god.",
    buyHref: "https://www.amazon.com/dp/B0BPJTRVR2",
    learnMoreHref: "/books/angel-from-the-rust",
  },
  {
    title: "Desert of the Beast",
    status: "Coming Soon",
    imageSrc: null,
    imageAlt: "",
    description:
      "Placeholder entry ready for cover art, description, and purchase links as this title comes together.",
    buyHref: "#",
    learnMoreHref: "/books/desert-of-the-beast",
  },
  {
    title: "The Legender",
    status: "Available Now",
    imageSrc: "/images/The%20Legender.jpg",
    imageAlt: "The Legender cover artwork",
    description:
      "Placeholder entry ready for cover art, description, and purchase links as this title comes together.",
    buyHref: "https://www.amazon.com/Legender-Arkosaegan-Book-1-ebook/dp/B00FFRP45Y/",
    learnMoreHref: "/books/the-legender",
  },
  {
    title: "Bestiary",
    status: "Coming Soon",
    imageSrc: null,
    imageAlt: "",
    description:
      "Placeholder entry ready for cover art, description, and purchase links as this title comes together.",
    buyHref: "#",
    learnMoreHref: "/books/bestiary",
  },
];

export default function BooksPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Books"
        title="Bound worlds for readers who love material beauty."
        description="Our book list is built around collectible fiction, elegant design systems, and print decisions that make the reading experience feel ceremonial."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                Collection List
              </p>
              <h2 className="mt-3 font-headline text-4xl text-on-surface">
                Current Books
              </h2>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-on-surface/60">
              {books.length} title{books.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="space-y-8">
            {books.map((book) => (
              <article
                key={book.title}
                className="grid overflow-hidden border border-outline-variant/20 bg-surface-container-high md:grid-cols-[320px_1fr]"
              >
                <div className="relative min-h-[260px] bg-[#d2dfdc] p-5">
                  {book.imageSrc ? (
                    <div className="relative h-full min-h-[220px] overflow-hidden border border-[#87a7ae]/20 bg-[#e7efec] shadow-[0_20px_40px_rgba(18,61,72,0.08)]">
                      <Image
                        alt={book.imageAlt}
                        className="object-contain p-4"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        src={book.imageSrc}
                      />
                    </div>
                  ) : (
                    <div className="flex h-full min-h-[220px] items-center justify-center border border-[#87a7ae]/20 bg-[#e7efec] px-8 text-center shadow-[0_20px_40px_rgba(18,61,72,0.08)]">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                          Cover Coming Soon
                        </p>
                        <p className="mt-4 font-headline text-2xl text-[#123d48]">
                          {book.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                  <div>
                    <span className="inline-block border border-[#cf7422]/20 bg-[#cf7422]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#cf7422]">
                      {book.status}
                    </span>
                    <h3 className="mt-4 font-headline text-3xl text-on-surface">
                      {book.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface/75">
                      {book.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      className="inline-flex items-center gap-2 bg-[#cf7422] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition duration-150 hover:bg-[#de8a3c]"
                      href={book.buyHref}
                      target="_blank"
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 object-contain"
                        height={16}
                        src="/icons/icons8-amazon-color/icons8-amazon-480.png"
                        width={16}
                      />
                      <span>Buy Now</span>
                    </Link>
                    <Link
                      className="inline-flex items-center border border-[#0d4f5f]/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0d4f5f] transition duration-150 hover:border-[#0d4f5f] hover:bg-[#0d4f5f]/5"
                      href={book.learnMoreHref}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
