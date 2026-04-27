import DetailPageTemplate from "@/components/DetailPageTemplate";

const details = [
  { label: "Genres", value: "Fantasy" },
  { label: "Format", value: "In Development" },
  { label: "Status", value: "Cover and details coming soon" },
  { label: "Publisher", value: "Phoenix Forge Press" },
];

export default function BestiaryPage() {
  return (
    <DetailPageTemplate
      coverAlt="Bestiary cover coming soon"
      coverPlaceholderLabel="Bestiary"
      coverSrc={null}
      details={details}
      eyebrow="Phoenix Forge Press Library"
      seriesLabel="Upcoming Title"
      sideDescription="A placeholder detail page ready for the eventual synopsis, artwork, and collector information for Bestiary."
      status="Coming Soon"
      storyHeading="A clean template waiting for the creatures, myths, and details."
      storyKicker="This page is ready for the book's premise, format information, and any world-specific notes once the project is further along."
      storyParagraphs={[
        "Bestiary now has a dedicated page in the catalog so it can grow into a full release page later.",
        "When you have the real copy, this layout is already prepared for story text, metadata, and any audience-facing extras you want to add.",
      ]}
      subtitle="An upcoming Phoenix Forge Press title with its own place in the catalog from day one."
      title="Bestiary"
    />
  );
}
