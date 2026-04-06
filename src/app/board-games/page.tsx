import InteriorHero from "@/components/InteriorHero";

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
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Collector editions with tactile finishes",
              "Narrative-first rulesets and campaign worlds",
              "Premium boxes, cards, inserts, and lore extras",
            ].map((item) => (
              <article
                key={item}
                className="border border-outline-variant/20 bg-surface-container-high p-8"
              >
                <h2 className="font-headline text-2xl text-on-surface">
                  {item}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
