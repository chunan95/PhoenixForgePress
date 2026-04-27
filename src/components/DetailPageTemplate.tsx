import Image from "next/image";
import Link from "next/link";
import ReviewCarousel from "@/components/ReviewCarousel";

type DetailItem = {
  label: string;
  value: string;
};

type Review = {
  quote: string;
  source: string;
};

type DetailPageTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  status: string;
  seriesLabel?: string;
  coverSrc: string | null;
  coverAlt: string;
  coverPlaceholderLabel?: string;
  sideDescription: string;
  buyHref?: string;
  buyLabel?: string;
  details: DetailItem[];
  storyHeading: string;
  storyKicker: string;
  storyParagraphs: string[];
  reviews?: Review[];
};

export default function DetailPageTemplate({
  eyebrow,
  title,
  subtitle,
  status,
  seriesLabel,
  coverSrc,
  coverAlt,
  coverPlaceholderLabel,
  sideDescription,
  buyHref,
  buyLabel = "Buy Now",
  details,
  storyHeading,
  storyKicker,
  storyParagraphs,
  reviews,
}: DetailPageTemplateProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#d7e7e4_0%,#e7efec_24%,#f6f3ea_58%,#fcfaf5_100%)] pb-24 pt-32">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-[#87a7ae]/30 bg-[linear-gradient(180deg,#d2dfdc_0%,#eef4f1_100%)] p-6 shadow-[0_24px_60px_rgba(18,61,72,0.12)]">
              {coverSrc ? (
                <div className="relative overflow-hidden border border-[#87a7ae]/25 bg-[#f8fbfa] shadow-[0_20px_40px_rgba(18,61,72,0.08)]">
                  <Image
                    alt={coverAlt}
                    className="h-auto w-full object-contain"
                    height={1200}
                    priority
                    src={coverSrc}
                    width={900}
                  />
                </div>
              ) : (
                <div className="flex min-h-[520px] items-center justify-center border border-[#87a7ae]/25 bg-[#f8fbfa] px-10 text-center shadow-[0_20px_40px_rgba(18,61,72,0.08)]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
                      Cover Coming Soon
                    </p>
                    <p className="mt-4 font-headline text-3xl text-[#123d48]">
                      {coverPlaceholderLabel ?? title}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex border border-[#cf7422]/20 bg-[#cf7422]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#cf7422]">
                    {status}
                  </span>
                  {seriesLabel ? (
                    <span className="text-xs uppercase tracking-[0.24em] text-[#4c6e77]">
                      {seriesLabel}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-7 text-[#4c6e77]">
                  {sideDescription}
                </p>

                {buyHref ? (
                  <Link
                    className="inline-flex items-center gap-2 bg-[#cf7422] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#fffaf3] transition duration-150 hover:bg-[#de8a3c]"
                    href={buyHref}
                    target="_blank"
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                      height={16}
                      src="/icons/icons8-amazon-color/icons8-amazon-480.png"
                      width={16}
                    />
                    <span>{buyLabel}</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            <section className="border-b border-[#87a7ae]/25 pb-10">
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#0d4f5f]">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl font-headline text-5xl leading-[1.02] text-[#123d48] md:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#4c6e77]">
                {subtitle}
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-[#87a7ae]/20 bg-[#87a7ae]/20 sm:grid-cols-2 xl:grid-cols-4">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="bg-[#f8f7f2]/88 px-5 py-5 backdrop-blur-sm"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0d4f5f]">
                      {detail.label}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#123d48]">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <article className="border border-[#87a7ae]/30 bg-[linear-gradient(180deg,rgba(215,231,228,0.74),rgba(248,247,242,0.96))] p-8 shadow-[0_18px_40px_rgba(18,61,72,0.06)] md:p-10">
              <div className="flex flex-col gap-6 border-b border-[#87a7ae]/25 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#cf7422]">
                    Story
                  </p>
                  <h2 className="mt-3 font-headline text-4xl text-[#123d48]">
                    {storyHeading}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-7 text-[#4c6e77]">
                  {storyKicker}
                </p>
              </div>

              <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[#355964]">
                {storyParagraphs.map((paragraph, index) => (
                  <p key={`${title}-story-${index}`}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>

        {reviews && reviews.length > 0 ? (
          <div className="mt-14">
            <ReviewCarousel reviews={reviews} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
