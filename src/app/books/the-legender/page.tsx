import DetailPageTemplate from "@/components/DetailPageTemplate";

const details = [
  { label: "Genres", value: "Fantasy, Epic Fantasy" },
  { label: "Format", value: "Ebook" },
  { label: "Series", value: "Arkosaegan Book 1" },
  { label: "Status", value: "Available Now" },
];

export default function TheLegenderPage() {
  return (
    <DetailPageTemplate
      buyHref="https://www.amazon.com/Legender-Arkosaegan-Book-1-ebook/dp/B00FFRP45Y/"
      coverAlt="The Legender cover artwork"
      coverSrc="/images/The%20Legender.jpg"
      details={details}
      eyebrow="Phoenix Forge Press Library"
      seriesLabel="Arkosaegan Book 1"
      sideDescription="The first volume of Arkosaegan now has a dedicated page ready for its synopsis, lore notes, and series framing."
      status="Available Now"
      storyHeading="A full detail page, ready for the legend behind the title."
      storyKicker="Use this page for the official synopsis, world notes, series order, and any review blurbs you want readers to see first."
      storyParagraphs={[
        "The Legender now has a matching destination page in the same editorial layout as Angel From the Rust.",
        "At the moment it is set up as a polished template so you can drop in the final story copy, series details, and any extra material when you're ready.",
      ]}
      subtitle="A dedicated series page for Arkosaegan Book 1, ready for fuller story and world-building details."
      title="The Legender"
    />
  );
}
