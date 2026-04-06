export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 text-foreground sm:px-10">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[10%] top-20 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] h-56 w-56 rounded-full bg-accent-strong/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.35fr_0.9fr]">
        <section className="rounded-[2rem] border border-card-border bg-card px-8 py-10 shadow-2xl shadow-black/30 backdrop-blur sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-accent-strong">
            Phoenix Forge Press
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
            Stories tempered in fire, myth, and imagination.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            A publishing home for bold fantasy worlds, luminous heroes, and
            unforgettable adventures. This starter site is ready for your
            catalog, author pages, blog, and storefront.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-accent-strong"
              href="https://github.com/chunan95/PhoenixForgePress"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
            <a
              className="rounded-full border border-card-border px-6 py-3 text-center text-sm font-semibold transition hover:border-accent hover:text-accent-strong"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
            >
              Next.js Docs
            </a>
          </div>
        </section>

        <section className="grid gap-5">
          <article className="rounded-[1.75rem] border border-card-border bg-card/90 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-strong">
              Ready To Build
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>Next.js App Router with TypeScript</li>
              <li>Tailwind CSS v4 already configured</li>
              <li>Git remote connected to your GitHub repo</li>
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-card-border bg-gradient-to-br from-[#2c160f] to-[#1a0d09] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-strong">
              Suggested Next Steps
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Replace this landing page with your brand story, add featured
              titles, and create routes for about, books, contact, and blog.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
