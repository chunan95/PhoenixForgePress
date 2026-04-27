"use client";

import { useEffect, useState, type TouchEvent } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  title: string;
};

const AUTO_ADVANCE_MS = 15000;
const SWIPE_THRESHOLD = 40;

export default function ImageCarousel({
  images,
  title,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [images.length]);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }

    setTouchStartX(null);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div
        className="relative overflow-hidden border border-[#87a7ae]/25 bg-[#f8fbfa] shadow-[0_20px_40px_rgba(18,61,72,0.08)]"
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            alt={images[activeIndex].alt}
            className="h-full w-full object-cover"
            fill
            priority={activeIndex === 0}
            src={images[activeIndex].src}
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        {images.length > 1 ? (
          <>
            <button
              aria-label={`Show previous ${title} image`}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-[#f7ead8]/70 bg-[#1a100c]/70 text-[#fffaf3] backdrop-blur-sm transition hover:bg-[#1a100c]/88"
              onClick={showPrevious}
              type="button"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ‹
              </span>
            </button>

            <button
              aria-label={`Show next ${title} image`}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-[#f7ead8]/70 bg-[#1a100c]/70 text-[#fffaf3] backdrop-blur-sm transition hover:bg-[#1a100c]/88"
              onClick={showNext}
              type="button"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ›
              </span>
            </button>


          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={`${image.src}-thumb`}
              aria-label={`View ${title} image ${index + 1}`}
              className={[
                "relative aspect-square w-20 shrink-0 overflow-hidden border bg-[#d8e6e2] transition",
                activeIndex === index
                  ? "border-[#cf7422] shadow-[0_8px_18px_rgba(207,116,34,0.18)]"
                  : "border-[#87a7ae]/25 hover:border-[#0d4f5f]/40",
              ].join(" ")}
              onClick={() => goToIndex(index)}
              type="button"
            >
              <Image
                alt={image.alt}
                className="h-full w-full object-cover"
                fill
                src={image.src}
                sizes="88px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
