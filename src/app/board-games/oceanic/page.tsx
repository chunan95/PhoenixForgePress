import Image from "next/image";
import DetailPageTemplate from "@/components/DetailPageTemplate";

const details = [
  { label: "Genres", value: "Board Game, Strategy" },
  { label: "Players", value: "2-5 players" },
  { label: "Ages", value: "12+" },
  { label: "Play Time", value: "60-90 minutes" },
];

const coverGallery = [
  {
    src: "/Oceanic/OceanicBoxandBackground3-1-1.jpg",
    alt: "Oceanic box set staged with an ocean backdrop",
  },
  {
    src: "/Oceanic/GameComponentsonsand1.jpg",
    alt: "Oceanic game components displayed on sand",
  },
  {
    src: "/Oceanic/CardsImage.png",
    alt: "Oceanic marine life cards spread across a tabletop",
  },
  {
    src: "/Oceanic/HexonSand.jpg",
    alt: "Oceanic biome hex placed on sand",
  },
  {
    src: "/Oceanic/GyrewithSand.jpg",
    alt: "Oceanic gyre board surrounded by sand",
  },
  {
    src: "/Oceanic/GameSpecsImage-1.jpg",
    alt: "Oceanic game specifications image",
  },
];

const featureSections = [
  {
    eyebrow: "Card Ecosystem",
    title: "A biodiversity of cards that keeps every game fresh.",
    description:
      "Every session is packed with new combinations of marine life, forces of nature, and strategic possibilities. It is replayable the way the ocean does it: abundant, surprising, and full of new interactions surfacing every time you play.",
    imageSrc: "/Oceanic/CardsImage.png",
    imageAlt: "Oceanic marine life cards spread across a tabletop",
  },
  {
    eyebrow: "Biome Control",
    title: "Five-sided biomes that make influence easy to see.",
    description:
      "Oceanic uses biome hexes with five color-coded edges that make placement intuitive and thematic. Each player connects to the ocean through their unique edge of each hex, so you can clearly see where your influence touches the ecosystem.",
    imageSrc: "/Oceanic/HexonSand.jpg",
    imageAlt: "Oceanic biome hex placed on sand",
  },
  {
    eyebrow: "Shared System",
    title: "Shared food chain, shared consequences.",
    description:
      "Food tokens are shared, not personal. Place food on a hex and anyone can use it, just like a real ecosystem where your helpful plankton bloom might become someone else's perfectly timed feast. The strategy comes from timing, forecasting opponents' needs, and deciding when to feed the ocean now versus setting yourself up for later.",
    imageSrc: "/Oceanic/GameComponentsonsand1.jpg",
    imageAlt: "Oceanic components displayed on sand",
  },
  {
    eyebrow: "Ocean Gyre",
    title: "Ride the ocean gyre, gain resources, claim biomes.",
    description:
      "As you advance around the ocean gyre, you gain more food resources and unlock claim opportunities on biomes. Every round becomes a balancing act between patience and ambition: move now for momentum, or stay put and perfect your ecosystem before the current carries someone else into your favorite spot.",
    imageSrc: "/Oceanic/GyrewithSand.jpg",
    imageAlt: "Oceanic gyre board surrounded by sand",
  },
];

const includes = [
  "180+ marine species cards",
  "25+ environment cards",
  "25+ objective cards",
  "15+ tropical fish cards",
];

export default function OceanicPage() {
  return (
    <DetailPageTemplate
      coverAlt="Oceanic box set staged in front of an ocean backdrop"
      coverSrc="/Oceanic/OceanicBoxandBackground3-1-1.jpg"
      coverGallery={coverGallery}
      details={details}
      eyebrow="Phoenix Forge Press Tabletop"
      seriesLabel="Board Game"
      sideDescription="A cozy strategy game about the living sea, built for 2-5 players ages 12 and up and designed to unfold over 60-90 minutes of shared ecosystem tension."
      status="Available Now"
      storyHeading="A cozy strategy game about the living sea."
      storyKicker=""
      storyParagraphs={[
        "Oceanic is a cozy-but-crunchy Euro-style tabletop game about exploring and preserving the underwater world. You collect and play marine life cards, build habitats across biomes like the Coral Reef and the Abyss, and adapt to an ocean where every choice ripples through a shared ecosystem.",
        "Its strategy has range without losing warmth. You are not just optimizing a personal engine. You are reading currents, watching the needs of the table, and shaping an environment where your choices can help you now, or quietly hand an opportunity to someone else later.",
      ]}
      subtitle="A Euro-style board game of marine strategy, habitat-building, and shared ecological tension set in a living, communal sea."
      title="Oceanic"
    >
      <section className="grid gap-6">
        <div className="border border-[#87a7ae]/30 bg-[#f8f7f2]/90 p-8 shadow-[0_16px_36px_rgba(18,61,72,0.06)]">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#cf7422]">
            In The Box
          </p>
          <h2 className="mt-3 font-headline text-4xl text-[#123d48]">
            Built for replayability.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#355964]">
            Every session brings a new mix of marine life, environmental
            pressure, and tactical possibilities, with enough variety in the
            deck to keep the sea feeling abundant and unpredictable.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-[#87a7ae]/20 bg-[#87a7ae]/20 sm:grid-cols-2">
            {includes.map((item) => (
              <div
                key={item}
                className="bg-[#ecf3f1] px-5 py-5 text-sm font-medium uppercase tracking-[0.18em] text-[#123d48]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        {featureSections.map((section, index) => (
          <article
            key={section.title}
            className="grid items-center gap-8 border border-[#87a7ae]/30 bg-[linear-gradient(180deg,rgba(248,247,242,0.94),rgba(231,239,236,0.88))] p-6 shadow-[0_16px_36px_rgba(18,61,72,0.05)] md:grid-cols-2 md:p-8"
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 font-headline text-4xl leading-tight text-[#123d48]">
                {section.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#355964]">
                {section.description}
              </p>
            </div>

            <div
              className={[
                "overflow-hidden border border-[#87a7ae]/25 bg-[#d8e6e2] shadow-[0_18px_32px_rgba(18,61,72,0.08)]",
                index % 2 === 1 ? "md:order-1" : "",
              ].join(" ")}
            >
              <Image
                alt={section.imageAlt}
                className="h-full w-full object-cover"
                height={900}
                src={section.imageSrc}
                width={1200}
              />
            </div>
          </article>
        ))}
      </section>

    </DetailPageTemplate>
  );
}
