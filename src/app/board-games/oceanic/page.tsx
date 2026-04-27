import DetailPageTemplate from "@/components/DetailPageTemplate";

const details = [
  { label: "Genres", value: "Board Game, Strategy" },
  { label: "Players", value: "Details coming soon" },
  { label: "Status", value: "Available Now" },
  { label: "Publisher", value: "Phoenix Forge Press" },
];

export default function OceanicPage() {
  return (
    <DetailPageTemplate
      coverAlt="Oceanic board game artwork"
      coverSrc="/images/S2%20(1).png"
      details={details}
      eyebrow="Phoenix Forge Press Tabletop"
      seriesLabel="Board Game"
      sideDescription="A detail page for Oceanic, ready for player counts, play time, mechanics, component callouts, and release information."
      status="Available Now"
      storyHeading="A strategy game shaped by exploration and an evolving sea."
      storyKicker="Use this page for the full game pitch, system overview, player information, and what makes the table experience distinct."
      storyParagraphs={[
        "Oceanic is a cozy-but-crunchy Euro-style tabletop game about exploring and preserving the underwater world.",
        "Players collect and play marine life cards, build habitats across distinct biomes, and adapt to an ecosystem where every decision ripples across the shared sea.",
      ]}
      subtitle="A collectible board game page for a world of marine strategy, habitat-building, and shared ecological tension."
      title="Oceanic"
    />
  );
}
