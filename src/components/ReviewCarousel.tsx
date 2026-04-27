"use client";

import { useEffect, useState } from "react";

type Review = {
  quote: string;
  source: string;
};

type ReviewCarouselProps = {
  reviews: Review[];
};

export default function ReviewCarousel({
  reviews,
}: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (reviews.length === 0) {
    return null;
  }

  const activeReview = reviews[activeIndex];

  function goToIndex(index: number) {
    setIsVisible(false);

    window.setTimeout(() => {
      setActiveIndex(index);
      setIsVisible(true);
    }, 220);
  }

  function showPrevious() {
    goToIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
  }

  function showNext() {
    goToIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsVisible(false);

      window.setTimeout(() => {
        setActiveIndex((current) =>
          current === reviews.length - 1 ? 0 : current + 1,
        );
        setIsVisible(true);
      }, 220);
    }, 15000);

    return () => window.clearInterval(timer);
  }, [reviews.length]);

  return (
    <article className="glass-card border border-outline-variant/20 bg-[linear-gradient(180deg,rgba(252,250,245,0.96),rgba(240,244,240,0.82))] p-8 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cf7422]">
            Reviews
          </p>
          <h2 className="mt-3 font-headline text-4xl text-on-surface">
            What readers are saying
          </h2>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0d4f5f]/15 bg-white/55 text-lg text-[#0d4f5f] transition duration-200 hover:border-[#0d4f5f]/40 hover:bg-white/80"
            onClick={showPrevious}
            type="button"
          >
            &lt;
          </button>
          <button
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0d4f5f]/15 bg-white/55 text-lg text-[#0d4f5f] transition duration-200 hover:border-[#0d4f5f]/40 hover:bg-white/80"
            onClick={showNext}
            type="button"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden border border-[#87a7ae]/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),rgba(248,247,242,0.92)_48%,rgba(231,239,236,0.9)_100%)] p-8 md:p-10">
        <div
          className={[
            "flex min-h-[220px] flex-col items-center justify-center text-center transition-all duration-500 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0",
          ].join(" ")}
        >
          <p className="max-w-5xl font-headline text-3xl leading-tight text-[#123d48] md:text-[2.6rem]">
            "{activeReview.quote}"
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#4c6e77]">
            {activeReview.source}
          </p>
          <div className="mt-8 h-px w-24 bg-[#cf7422]/50" />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.source}
              aria-label={`Go to review ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={[
                "h-2.5 w-10 transition duration-200",
                index === activeIndex
                  ? "bg-[#cf7422]"
                  : "bg-[#87a7ae]/35 hover:bg-[#87a7ae]/55",
              ].join(" ")}
              onClick={() => goToIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
