import InteriorHero from "@/components/InteriorHero";

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        eyebrow="About The Press"
        title="Old-world craft with a futuristic editorial soul."
        description="Phoenix Forge Press publishes tactile stories, design-forward editions, and imaginative experiences built to feel timeless."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-8 md:grid-cols-2">
          <article className="glass-card border border-outline-variant/20 p-8">
            <h2 className="font-headline text-3xl text-on-surface">
              What We Value
            </h2>
            <p className="mt-4 leading-8 text-on-surface-variant">
              Deliberate pacing, collectible design, and stories that reward
              attention. We create books and tabletop works that feel crafted,
              not churned out.
            </p>
          </article>
          <article className="glass-card border border-outline-variant/20 p-8">
            <h2 className="font-headline text-3xl text-on-surface">
              How We Work
            </h2>
            <p className="mt-4 leading-8 text-on-surface-variant">
              Each release moves through concept, material study, editorial
              shaping, and collectible presentation so the final piece feels
              worthy of a long shelf life.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
