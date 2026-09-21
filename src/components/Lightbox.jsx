import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PHOTOS } from "../data/listingData";

export default function Lightbox({ index, onClose, onNext, onPrev }) {
  const currentPhoto = PHOTOS[index];

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  if (index === null || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${PHOTOS.length}: ${currentPhoto.title}`}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-in fade-in duration-200 select-none"
    >
      {/* Top Header Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
        >
          <X size={22} />
        </button>
        <span className="text-white text-sm font-semibold tracking-wide bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {index + 1} / {PHOTOS.length} — {currentPhoto.title}
        </span>
        <div className="w-10"></div>
      </div>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        aria-label="Previous photo"
        className="absolute left-6 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all hover:scale-110 z-10 backdrop-blur-sm"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Main High-Res Image Display */}
      <div className="relative max-w-[85vw] max-h-[80vh] flex flex-col items-center justify-center">
        <img
          src={currentPhoto.url}
          alt={currentPhoto.title}
          className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl transition-all duration-300"
        />
        <p className="text-neutral-300 text-sm mt-4 font-medium">{currentPhoto.title}</p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-6 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all hover:scale-110 z-10 backdrop-blur-sm"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
