"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: StaticImageData | string;
  alt: string;
};

type LightboxGalleryProps = {
  images: GalleryImage[];
  gridClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
};

export default function LightboxGallery({
  images,
  gridClassName = "grid gap-4 md:grid-cols-3",
  itemClassName = "relative aspect-[4/3] w-full overflow-hidden",
  imageClassName = "object-cover",
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (images.length === 0) {
      return;
    }

    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    if (images.length === 0) {
      return;
    }

    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [activeIndex, close, showNext, showPrevious]);

  return (
    <>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <button
            key={`gallery-thumb-${index}`}
            type="button"
            className={`${itemClassName} group cursor-zoom-in`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image ${index + 1} of ${images.length}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`${imageClassName} transition-transform duration-300 group-hover:scale-[1.03]`}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={close}
            aria-label="Close expanded image"
          />

          <div className="relative z-[1] w-full max-w-6xl">
            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center bg-white/90 text-[30px] leading-none text-[#2f241d] transition hover:bg-white"
              onClick={close}
              aria-label="Close expanded image"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            {images.length > 1 ? (
              <>
                <button
                  type="button"
                  className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-[40px] leading-none text-[#2f241d] transition hover:bg-white"
                  onClick={showPrevious}
                  aria-label="View previous image"
                >
                  <span aria-hidden="true">&#8249;</span>
                </button>

                <button
                  type="button"
                  className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-[40px] leading-none text-[#2f241d] transition hover:bg-white"
                  onClick={showNext}
                  aria-label="View next image"
                >
                  <span aria-hidden="true">&#8250;</span>
                </button>
              </>
            ) : null}

            <div className="relative h-[72vh] w-full overflow-hidden bg-transparent shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <p className="mt-3 text-center text-sm font-body text-white/90">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
