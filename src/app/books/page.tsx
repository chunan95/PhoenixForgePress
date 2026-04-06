import InteriorHero from "@/components/InteriorHero";

export default function BooksPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Books"
        title="Bound worlds for readers who love material beauty."
        description="Our book list is built around collectible fiction, elegant design systems, and print decisions that make the reading experience feel ceremonial."
      />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="border border-outline-variant/20 bg-surface-container-high p-8">
              <h2 className="font-headline text-3xl text-on-surface">
                Hardcover Series
              </h2>
              <p className="mt-4 leading-8 text-on-surface-variant">
                Designed for display, rereading, and long-term collection with
                paper stocks and finish details chosen to age well.
              </p>
            </article>
            <article className="border border-outline-variant/20 bg-surface-container-high p-8">
              <h2 className="font-headline text-3xl text-on-surface">
                Limited Objects
              </h2>
              <p className="mt-4 leading-8 text-on-surface-variant">
                Special runs with signed plates, custom cases, and visual extras
                for readers who want the definitive edition.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
