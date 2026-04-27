import Image from "next/image";
import Link from "next/link";
import InteriorHero from "@/components/InteriorHero";

const boardGames = [
  {
    title: "Oceanic",
    status: "Available Now",
    imageSrc: "/images/S2%20(1).png",
    imageAlt: "Oceanic board game artwork",
    description:
      "A cozy-but-crunchy Euro-style tabletop game about exploring and preserving the underwater world.",
    amazonHref: "#",
    learnMoreHref: "#",
  },
];

export default function BoardGamesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Board Games"
        title="Strategy objects designed as heirlooms."
        description="From intimate two-player duels to atmospheric campaign sets, our tabletop line blends premium materials with story-rich systems."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                Collection List
              </p>
              <h2 className="mt-3 font-headline text-4xl text-on-surface">
                Current Board Games
              </h2>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-on-surface/60">
              {boardGames.length} title{boardGames.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="space-y-8">
            {boardGames.map((game) => (
              <article
                key={game.title}
                className="grid overflow-hidden border border-outline-variant/20 bg-surface-container-high md:grid-cols-[320px_1fr]"
              >
                <div className="relative min-h-[260px] bg-[#d2dfdc]">
                  <Image
                    alt={game.imageAlt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    src={game.imageSrc}
                  />
                </div>

                <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                  <div>
                    <span className="inline-block border border-[#cf7422]/20 bg-[#cf7422]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#cf7422]">
                      {game.status}
                    </span>
                    <h3 className="mt-4 font-headline text-3xl text-on-surface">
                      {game.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface/75">
                      {game.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      className="inline-flex items-center gap-2 bg-[#cf7422] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition duration-150 hover:bg-[#de8a3c]"
                      href={game.amazonHref}
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
                      href={game.learnMoreHref}
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
