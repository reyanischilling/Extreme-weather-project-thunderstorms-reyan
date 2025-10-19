import { useState } from "react";
import { X } from "lucide-react";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="group cursor-pointer" onClick={() => setIsOpen(true)} data-testid="figure-image">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={src}
            alt={alt}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      </figure>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setIsOpen(false)}
            data-testid="button-close-lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
