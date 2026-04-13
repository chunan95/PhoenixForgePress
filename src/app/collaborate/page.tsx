import InteriorHero from "@/components/InteriorHero";

const collaborationTracks = [
  {
    title: "Editorial Partnerships",
    description:
      "Work with us on limited editions, illustrated fiction, and tactile publishing concepts that deserve a more intentional release.",
  },
  {
    title: "Tabletop Development",
    description:
      "Bring narrative-first board games, deluxe components, and collector-minded packaging into a sharper production plan.",
  },
  {
    title: "Creative Commissions",
    description:
      "We also collaborate on brand worlds, lore systems, launch storytelling, and other special projects that benefit from a strong narrative point of view.",
  },
];

export default function CollaboratePage() {
  return (
    <>
      <InteriorHero
        eyebrow="Collaborate"
        title="Let&apos;s build tactile, story-rich releases together."
        description="Phoenix Forge Press partners with writers, designers, and imaginative studios to shape projects that feel lasting, collectible, and deeply considered."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {collaborationTracks.map((track) => (
              <article
                key={track.title}
                className="glass-card border border-outline-variant/20 p-8"
              >
                <h2 className="font-headline text-3xl text-on-surface">
                  {track.title}
                </h2>
                <p className="mt-4 leading-8 text-on-surface-variant">
                  {track.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 border border-outline-variant/20 bg-surface-container-high p-8">
            <h2 className="font-headline text-3xl text-on-surface">
              Start a Conversation
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-on-surface-variant">
              Tell us about your manuscript, game concept, or world-building
              brief, and we&apos;ll explore whether it fits the Phoenix Forge
              Press approach.
            </p>
            <a
              className="mt-6 inline-block bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-on-primary"
              href="mailto:hello@phoenixforgepress.com"
            >
              hello@phoenixforgepress.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
