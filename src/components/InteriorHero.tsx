type InteriorHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function InteriorHero({
  eyebrow,
  title,
  description,
}: InteriorHeroProps) {
  return (
    <section className="border-b border-[#87a7ae]/20 bg-[#d7e7e4] pt-36">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <span className="mb-6 block font-label text-sm uppercase tracking-[0.4em] text-[#0d4f5f]">
          {eyebrow}
        </span>
        <h1 className="max-w-4xl font-headline text-5xl leading-[1.05] text-[#123d48] md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#4c6e77]">
          {description}
        </p>
      </div>
    </section>
  );
}
