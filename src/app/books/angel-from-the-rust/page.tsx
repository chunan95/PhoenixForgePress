import DetailPageTemplate from "@/components/DetailPageTemplate";

const reviews = [
  {
    quote:
      "I devoured this book! Angel From The Rust marked all the boxes for me.",
    source: "Literature Approved",
  },
  {
    quote:
      "The writing itself was really well polished...I found myself reading faster and faster.",
    source: "Becky M, SPFBO 9 Judge",
  },
  {
    quote:
      "It is the weirdest dystopian fantasy I have ever read, and I am saying this in the most astounded tone!...[Link] got the world-building spot on!",
    source: "Rosh Reads",
  },
  {
    quote:
      "I'll definitely be looking forward to seeing what Link does next in this world.",
    source: "Red Fury Books",
  },
];

const details = [
  { label: "Genres", value: "Fantasy, Science Fiction" },
  { label: "Format", value: "Kindle Edition" },
  { label: "Length", value: "417 pages" },
  { label: "Published", value: "January 16, 2023" },
];

export default function AngelFromTheRustPage() {
  return (
    <DetailPageTemplate
      buyHref="https://www.amazon.com/dp/B0BPJTRVR2"
      coverAlt="Angel From the Rust cover artwork by Jason Link"
      coverSrc="/images/Angel%20from%20the%20Rust%20-%20Jason%20Link.jpg"
      details={details}
      eyebrow="Phoenix Forge Press Library"
      reviews={reviews}
      seriesLabel="Arkosaegan Book 1"
      sideDescription="A dystopian fantasy of buried technology, inherited power, and a young musician forced to challenge a false god."
      status="Available Now"
      storyHeading="An ancient world, a living code, and a false god."
      storyKicker="A speculative fantasy novel where lost machines have become myth and history still bites."
      storyParagraphs={[
        "They say Earth was a place of wonders, where towers pierced the clouds, cities lit up the night, and flying machines streaked across the sky. It was magic. But the magic conjured the End War. Fire fell from the sky, and metal beasts leveled the cities.",
        "That was six hundred years ago. Now the ruins of the Ancient world are buried or overgrown. And the technology of the past is feared as forbidden magic.",
        "Corvala, a young musician on the run from the law, never intended on getting mixed up with history. But when a murderer falls from the heavens and sets himself up as a god, she's driven into the wilderness and discovers the secret of her bloodline: a code of immense power embedded in her DNA. The code could save thousands or plunge her into madness.",
        "To defeat the tyrannical false god, Corvala must do something more terrifying than confront the demons of Earth's history. She must confront her own.",
      ]}
      subtitle="Six centuries after the End War, the ruins of Earth are feared as sorcery and the past refuses to stay buried."
      title="Angel From the Rust"
    />
  );
}
