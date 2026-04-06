function FireBadgeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 2.5c.3 2.1-.5 3.8-1.6 5.2-1 1.2-2.2 2.3-2.8 3.8-.6 1.3-.6 3 .1 4.3.8 1.6 2.4 2.7 4.2 2.7 2.8 0 5.1-2.2 5.1-5 0-3.2-2.1-5.1-3.4-7-.7-1-1.3-2.3-1.6-4Zm-3 11.3c1 1 1.4 1.9 1.4 2.9 0 1.4-1 2.3-2.3 2.3-1.4 0-2.5-1.2-2.5-2.7 0-1.8 1.5-3 3.4-4.7Z" />
    </svg>
  );
}

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

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-[870px] items-center overflow-hidden pt-28">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-12">
          <div className="z-10 md:col-span-7">
            <span className="mb-6 block font-label text-sm uppercase tracking-[0.4em] text-primary">
              Est. 2024 • Industrial Refinement
            </span>
            <h1 className="mb-8 font-headline text-6xl leading-[1.1] tracking-tight text-on-surface md:text-8xl">
              Forging Worlds, <br />
              <i className="font-headline italic text-secondary">
                One Page
              </i>{" "}
              at a Time
            </h1>
            <p className="mb-10 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">
              A boutique publishing house dedicated to the tactile beauty of
              storytelling. From linen-bound chronicles to intricate tabletop
              adventures, we curate experiences for the modern connoisseur.
            </p>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <button className="bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-transform hover:scale-[1.02]">
                Explore the Collection
              </button>
              <a
                className="gold-thread py-1 text-xs font-bold uppercase tracking-widest text-secondary"
                href="#about"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-outline-variant/30 shadow-2xl">
              <img
                alt="Close-up of a high-end designer studio with a mahogany desk, warm brass lamp, and stacks of bound books in soft golden light"
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxTkHrrVPvAAkjDyKojbPXHmfyYfnDFslhMAshOC1OVcqzyW9_13c8IetM6mTPLWced7vPHyClBD0nvidgRSAu_4fIjQZ-31bNiFOR9cb4GChrqUpkn80GZOcaOpdwXqUU-YBECo30jJaglvzkxNBIse-DrWV2Fie_7crBvvrp4ZjhD7tBO9L1cTixNlOvzNOym1Dw2ab6235QR9BWGzoUm-Qxu4L8WcdbACgCiECSJm1Fpz_H6qJoG3EjS4y-QwYcn8jN41Da2LQ"
              />
            </div>

            <div className="absolute -left-6 top-20 hidden flex-col items-center gap-2 bg-primary p-4 text-on-primary shadow-xl lg:flex">
              <FireBadgeIcon />
              <span className="[writing-mode:vertical-rl] py-4 font-label text-xs uppercase tracking-widest">
                Active Forge
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 border-l border-outline-variant/10 bg-surface-container-low" />
      </header>

      <section
        id="about"
        className="border-y border-outline-variant/10 bg-surface-container-low py-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-6 font-headline text-4xl text-on-surface">
              The Curated Intent
            </h2>
            <p className="mb-6 text-lg leading-relaxed italic text-on-surface-variant">
              "We believe the digital age deserves more physical permanence.
              Every game we design and every book we bind is an invitation to
              slow down, look closer, and inhabit a new world entirely."
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Led by a team of dedicated designers and storytellers, Phoenix
              Forge Press operates like an old-world atelier with a futuristic
              soul. We prioritize quality over volume, choosing to release only
              what we ourselves would cherish for a lifetime.
            </p>
          </div>

          <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
            <img
              alt="Stack of high-quality vintage books with textured paper and leather bindings on a clean stone surface"
              className="h-64 w-full object-cover opacity-70 grayscale transition-opacity hover:opacity-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEf925yzQ51qfdfvgsD2U9Azp6LFbWsqsi-X5Kt12wCK_WlexwbnxSqBBINNw9PumROmokCzSuL4wuewbk966a2-piE6DcL9vsOuEYH3uZDgaN3ABV0fgSvUHQWvJvfCgvg5Pi7H1UpCLSFxm-38-340AGQGo9_kdo8ZrjsDT5IdbjbzOCc3qmIgmqw1036PLyNTSjQCYelYXoLIRdSOYoPpoA6k1sv9YNgNe80cDgso3MpmBm-NvmNheC6FttSRyAFE6YFvfHUcY"
            />
            <img
              alt="Hands holding a beautifully designed board game card with gold leaf accents and intricate illustrations"
              className="h-64 w-full translate-y-8 object-cover opacity-70 grayscale transition-opacity hover:opacity-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMO7jpKFV5qH7hGQRIn_PpFqoqzbkJ_ICvJ-JVMFKVhYNEZ7lMti1Q1hzTAiQ6uGEXIKidL3L7pof-EBib_0UPLvwpHGNlON0GD91JPSGjPCgOzucEeNFWfjKrjARl8oyt-QDuk596W6uJdHbMrDS1pJCGB0MVHmlslWXONDrsBNC5h37ulQC24jsLqdmrYP-1E9r6G2jOIErAb2w9Jrq1_WtWlwXSyNS2H6Q2dtE9Dv81cu7TDFHlvQwFKI92jyLA_SqV-q78-n0"
            />
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <h2 className="mb-4 font-headline text-5xl text-on-surface">
                The Flagships
              </h2>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Forging the current season
              </p>
            </div>
            <div className="mb-4 hidden h-px flex-grow bg-outline-variant opacity-20 md:block" />
            <a
              className="gold-thread mb-2 text-xs font-bold uppercase tracking-widest text-secondary"
              href="#"
            >
              Full Catalogue
            </a>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="group md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-outline-variant/20 bg-surface-container-high">
                <img
                  alt="Overhead view of an elegant, minimalist board game with dark blue board, gold pieces, and premium cards on a white linen table"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2KmNHom6ZyGdRcOmlkdVB6nDHYnGgJJDcbGsQ6zSEflDnjPdya_5l3l635R7IJctgJMAM48ve53J5a270lftcyP-ywrsJ0tZGTnDVlR3MyeKQKlb6r0KY2caWOPlfUVX21aw3X0aTDP-nHxyAaJwlbopQKCx1mPEOtAOOwLLyrKXZ9micqgnhoA8PG5xSt8p-dGTozE6jELV2JXdQK7lMf_B5qYBGlNAOCLXoj5XcF1WcJbFhQxze3lGor0Uiy0hA5DcD7x_HDWI"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#131313]/90 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex items-center gap-2 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-primary">
                    Inspect Detail
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <span className="mb-3 inline-block border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Limited Edition
                  </span>
                  <h3 className="mb-2 font-headline text-3xl text-on-surface">
                    Midnight at the Conservatory
                  </h3>
                  <p className="max-w-md text-on-surface-variant">
                    An intricate 2-player strategy game housed in a velvet-lined
                    maple box. Discover the secrets of the forgotten gardens.
                  </p>
                </div>
                <span className="font-headline text-2xl text-secondary">
                  $145
                </span>
              </div>
            </div>

            <div className="group md:col-span-5 md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden border border-outline-variant/20 bg-surface-container-high">
                <img
                  alt="A thick, linen-bound hardcover book titled 'Aetheric Dreams' standing upright against a soft cream background with elegant serif typography"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGODjaWaY87sZpWyknt4lYWfpaixM_01RNLT1dbmEfSC9dXiiqCjFblwprjWW_bq5uAmi2weibMozPgut3PUvq1dZMoaTdTn_O7DkEWKtwm6DSD3-2d4zBd5ashrbPjZgmBBMq8red4nxJp7RuhenFt9PqjIQff6jFH9rmEDhu5QXZyNV16w5MCGDTHb_9WSoF4maRHf53sSD6l5iGWSnhocyjkuqhEqb0rz1RvjXoTzp11gil4NBFYRCcPEgmREoSUmI3UptERt4"
                />
                <div className="absolute right-4 top-4">
                  <div className="border border-outline-variant/30 bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Sold Out
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <span className="mb-3 inline-block border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  Hardcover Series
                </span>
                <h3 className="mb-2 font-headline text-3xl text-on-surface">
                  The Alchemist&apos;s Vellum
                </h3>
                <p className="text-on-surface-variant">
                  A collection of 42 short stories, printed on heavy archival
                  paper with hand-drawn marginalia. The definitive collector&apos;s
                  edition.
                </p>
                <div className="mt-6">
                  <a
                    className="gold-thread text-xs font-bold uppercase tracking-widest text-primary"
                    href="#"
                  >
                    Join Waiting List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/10 bg-surface-container py-32">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="mb-12 text-center font-headline text-4xl text-on-surface">
            Recent Forge Entries
          </h2>

          <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
            <div className="group relative flex flex-col justify-between overflow-hidden border border-outline-variant/10 bg-surface-container-lowest p-8 md:col-span-2 md:row-span-2">
              <div className="z-10">
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Design Concept
                </h4>
                <h3 className="font-headline text-2xl text-on-surface">
                  The Obsidian Deck
                </h3>
              </div>
              <img
                alt="Abstract macro shot of textured black playing cards with silver foil patterns"
                className="absolute inset-0 h-full w-full object-cover opacity-5 grayscale transition-opacity group-hover:opacity-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWk0ArsbXbDuzpQtYXprATAvIsQkRpX7buuahIE78BfUBrxNErOZpmzjYCb57kmzZ_Z7JIJ6k9V1bXYGI2jVVwhJf0g4dvYOAEqVpSB4cGIT5XCjOAUAKD897cQFjS4-UAs2aMxUcbMNhjb-6aDvhf6HP0Gsrz1TV2jV9obLG64Zx3CRgPhZkfo0O5OMum04AhHoxf0dIEUqDX1MMKrZT1-7x2COlZDpqPONTrzj6sfZ1DBD9wZCucr9OuDYf8aCdzsvTJ5Vrd7Q"
              />
              <p className="z-10 font-body text-sm text-on-surface-variant">
                Refining the haptic feedback of high-grammage card stock for
                our upcoming lunar-themed expansion.
              </p>
            </div>

            <div className="group flex items-center justify-between border border-outline-variant/10 bg-surface-container-high p-8 md:col-span-2">
              <div>
                <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Workshop Update
                </h4>
                <h3 className="font-headline text-xl text-on-surface">
                  Artisan Sourcing
                </h3>
                <p className="mt-2 font-body text-sm text-on-surface-variant">
                  Partnering with family-run mills in Italy for bespoke
                  parchment.
                </p>
              </div>
              <div className="text-outline opacity-30 transition-colors group-hover:text-primary">
                <GearIcon />
              </div>
            </div>

            <div className="border border-outline-variant/20 bg-surface-container-low p-6">
              <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                The Registry
              </h4>
              <h3 className="font-headline text-lg leading-tight text-on-surface">
                The Ethics of World-Building
              </h3>
            </div>

            <div className="group flex flex-col items-center justify-center bg-primary p-6 text-center text-on-primary transition-colors">
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
