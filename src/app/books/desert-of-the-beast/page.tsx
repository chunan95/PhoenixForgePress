import DetailPageTemplate from "@/components/DetailPageTemplate";

const details = [
  { label: "Genres", value: "Fantasy" },
  { label: "Format", value: "In Development" },
  { label: "Status", value: "Cover and details coming soon" },
  { label: "Publisher", value: "Phoenix Forge Press" },
];

export default function DesertOfTheBeastPage() {
  return (
    <DetailPageTemplate
      coverAlt="Desert of the Beast cover coming soon"
      coverPlaceholderLabel="Desert of the Beast"
      coverSrc={null}
      details={details}
      eyebrow="Phoenix Forge Press Library"
      seriesLabel="Upcoming Title"
      sideDescription="A placeholder detail page ready for your synopsis, edition information, and launch materials as this book develops."
      status="Coming Soon"
      storyHeading="A page ready for the next world you want to reveal."
      storyKicker="Use this template to shape the voice, mythology, and release details of the book as they come into focus."
      storyParagraphs={[
        "Desert of the Beast now has its own page in the same house style as the rest of the catalog.",
        "This is a good place for the jacket synopsis, a one-line hook, series context, character notes, or publication details once you have them ready.",
      ]}
      subtitle="An upcoming Phoenix Forge Press title with room for its full mythology, synopsis, and edition notes."
      title="Desert of the Beast"
    />
  );
}
