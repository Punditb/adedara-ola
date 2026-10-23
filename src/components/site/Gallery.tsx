import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AI_NOTE, RENDER_NOTE, imageUrl, type ProjectImage } from "@/lib/projects";

const CHIP = { render: "3D Visualisation", ai: "AI-enhanced artist’s impression" } as const;

export function Gallery({ slug, images }: { slug: string; images: ProjectImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen((current) => (current === null ? current : (current + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.file}
            type="button"
            onClick={() => setOpen(index)}
            aria-label={`Open image: ${image.alt}`}
            className={`group relative block overflow-hidden rounded-xl bg-muted ${
              index === 0 ? "col-span-2 row-span-2" : "aspect-[4/3]"
            }`}
          >
            <img
              src={imageUrl(slug, image.file, "small")}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
              {CHIP[image.kind]}
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <img
            src={imageUrl(slug, current.file, "large")}
            alt={current.alt}
            className="max-h-[76vh] max-w-[94vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 max-w-2xl text-center text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
            {current.kind === "ai" ? AI_NOTE : RENDER_NOTE}
          </p>
          <p className="mt-1 text-xs text-white/50">
            {(open ?? 0) + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}