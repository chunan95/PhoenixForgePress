function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" />
      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="relative flex min-h-[870px] items-center overflow-hidden bg-[#d7e7e4] pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-12">
          <div className="z-10 md:col-span-7">
            <span className="mb-6 block font-label text-sm uppercase tracking-[0.4em] text-[#0d4f5f]">
              Est. 2024 • Industrial Refinement
            </span>
            <h1 className="mb-8 font-headline text-6xl leading-[1.1] tracking-tight text-[#123d48] md:text-8xl">
              Forging Worlds, <br />
              <i className="font-headline italic text-[#cf7422]">One Page</i>{" "}
              at a Time
            </h1>
            <p className="mb-10 max-w-xl font-body text-xl leading-relaxed text-[#4c6e77]">
              A boutique publishing house dedicated to the tactile beauty of
              storytelling. From linen-bound chronicles to intricate tabletop
              adventures, we curate experiences for the modern connoisseur.
            </p>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <button className="bg-[#0d4f5f] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#fffaf3] transition-transform hover:scale-[1.02]">
                Explore the Collection
              </button>
              <a
                className="gold-thread py-1 text-xs font-bold uppercase tracking-widest text-[#cf7422]"
                href="#about"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#87a7ae]/30 bg-[#7ea0a6] shadow-2xl">
              <img
                alt="Phoenix Forge Press horizontal logo"
                className="h-full w-full object-contain p-8 opacity-90 transition-all duration-700"
                src="/images/Phoenix%20Forge%20Press%20horizontal%20(1).png"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 border-l border-[#87a7ae]/20 bg-[#bdd1cd]" />
      </header>

      <section className="bg-[#fcfaf5] py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <h2 className="mb-4 font-headline text-5xl text-[#123d48]">
                The Flagships
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                Forging the current season
              </p>
            </div>
            <div className="mb-4 hidden h-px flex-grow bg-[#87a7ae] opacity-30 md:block" />
            <a
              className="gold-thread mb-2 text-xs font-bold uppercase tracking-widest text-[#0d4f5f]"
              href="#"
            >
              Full Catalogue
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="group md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#87a7ae]/20 bg-[#d2dfdc]">
                <img
                  alt="Phoenix Forge Press board game photographed in front of an ocean backdrop"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src="/images/Game%20in%20front%20of%20Ocean%202%20(3).jpg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0d4f5f]/85 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex items-center gap-2 bg-[#cf7422] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#fffaf3]">
                    Inspect Detail
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <span className="mb-3 inline-block border border-[#cf7422]/20 bg-[#cf7422]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#cf7422]">
                    Launching Soon
                  </span>
                  <h3 className="mb-2 font-headline text-3xl text-[#123d48]">
                    Oceanic
                  </h3>
                  <p className="max-w-md text-[#4c6e77]">
                    Oceanic is a cozy-but-crunchy Euro-style tabletop game about exploring and preserving the 
                    underwater world. You will collect and play marine life cards, build habitats across biomes 
                    like the Coral Reef and the Abyss, and adapt to an ocean where every choice ripples through a shared ecosystem.
                  </p>
                  <div className="mt-6">
                    <a
                      className="gold-thread text-xs font-bold uppercase tracking-widest text-[#0d4f5f]"
                      href="/board-games/oceanic"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <span className="font-headline text-2xl text-[#cf7422]">
                  $145
                </span>
          
              </div>
            </div>

            <div className="group md:col-span-5 md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#87a7ae]/20 bg-[#d2dfdc]">
                <img
                  alt="Angel from the Rust artwork by Jason Link"
                  className="h-full w-full object-contain p-4 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src="/images/Angel%20from%20the%20Rust%20-%20Jason%20Link.jpg"
                />
                <div className="absolute right-4 top-4">
                </div>
              </div>

              <div className="mt-6">
                <span className="mb-3 inline-block border border-[#cf7422]/20 bg-[#cf7422]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#cf7422]">
                  Hardcover Series
                </span>
                <h3 className="mb-2 font-headline text-3xl text-[#123d48]">
                  Angel from the Rust
                </h3>
                <p className="text-[#4c6e77]">
                  In a distant future Earth, society has turned medieval, and modern technology is seen as 
                  illegal "magic." In this apocalyptic society, a young musician fleeing the law 
                  realizes her impossible fate: To dethrone a killer who has manipulated a whole city 
                  into believing he is a god. 
                </p>
                <div className="mt-6">
                  <a
                    className="gold-thread text-xs font-bold uppercase tracking-widest text-[#0d4f5f]"
                    href="/books/angel-from-the-rust"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#87a7ae]/20 bg-[#d2dfdc] py-32">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="mb-12 text-center font-headline text-4xl text-[#123d48]">
            Recent Forge Entries
          </h2>

          <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
            <div className="group relative flex flex-col justify-between overflow-hidden border border-[#87a7ae]/15 bg-[#fcfaf5] p-8 md:col-span-2 md:row-span-2">
              <div className="z-10">
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                  Design Concept
                </h4>
                <h3 className="font-headline text-2xl text-[#123d48]">
                  The Obsidian Deck
                </h3>
              </div>
              <img
                alt="Abstract macro shot of textured black playing cards with silver foil patterns"
                className="absolute inset-0 h-full w-full object-cover opacity-5 grayscale transition-opacity group-hover:opacity-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWk0ArsbXbDuzpQtYXprATAvIsQkRpX7buuahIE78BfUBrxNErOZpmzjYCb57kmzZ_Z7JIJ6k9V1bXYGI2jVVwhJf0g4dvYOAEqVpSB4cGIT5XCjOAUAKD897cQFjS4-UAs2aMxUcbMNhjb-6aDvhf6HP0Gsrz1TV2jV9obLG64Zx3CRgPhZkfo0O5OMum04AhHoxf0dIEUqDX1MMKrZT1-7x2COlZDpqPONTrzj6sfZ1DBD9wZCucr9OuDYf8aCdzsvTJ5Vrd7Q"
              />
              <p className="z-10 font-body text-sm text-[#4c6e77]">
                Refining the haptic feedback of high-grammage card stock for
                our upcoming lunar-themed expansion.
              </p>
            </div>

            <div className="group flex items-center justify-between border border-[#87a7ae]/15 bg-[#eef4f1] p-8 md:col-span-2">
              <div>
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                  Workshop Update
                </h4>
                <h3 className="font-headline text-xl text-[#123d48]">
                  Artisan Sourcing
                </h3>
                <p className="mt-2 font-body text-sm text-[#4c6e77]">
                  Partnering with family-run mills in Italy for bespoke
                  parchment.
                </p>
              </div>
              <div className="text-[#64858d] opacity-40 transition-colors group-hover:text-[#0d4f5f]">
                <GearIcon />
              </div>
            </div>

            <div className="border border-[#87a7ae]/20 bg-[#c8dad6] p-6">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                The Registry
              </h4>
              <h3 className="font-headline text-lg leading-tight text-[#123d48]">
                The Ethics of World-Building
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-center bg-[#0d4f5f] p-6 text-center text-[#fffaf3] transition-colors">
              <div className="mb-2">
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
              </div>
              <h3 className="font-headline text-lg">Join the Forge</h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-70">
                Weekly Insights
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
