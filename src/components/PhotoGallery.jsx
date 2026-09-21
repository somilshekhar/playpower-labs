import React from "react";
import { Camera, Grid } from "lucide-react";
import { PHOTOS } from "../data/listingData";

export default function PhotoGallery({ onOpenTour }) {
  const mainPhoto = PHOTOS[0];
  const sidePhotos = PHOTOS.slice(1, 5);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[340px] sm:h-[420px]">
        {/* Main Hero Photo (Left 2 cols) */}
        <div
          onClick={() => onOpenTour(0)}
          className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden bg-neutral-100"
        >
          <img
            src={mainPhoto.url}
            alt={mainPhoto.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* 4 Secondary Grid Photos (Right 2 cols) */}
        {sidePhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => onOpenTour(index + 1)}
            className="hidden md:block relative group cursor-pointer overflow-hidden bg-neutral-100 h-full"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}
      </div>

      {/* Show all photos button badge */}
      <button
        onClick={() => onOpenTour(0)}
        className="absolute bottom-5 right-5 bg-white/90 hover:bg-white text-neutral-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-md border border-neutral-800/80 flex items-center gap-2 transition-all hover:scale-105 backdrop-blur-sm"
      >
        <Grid size={15} />
        <span>Show all photos</span>
      </button>
    </div>
  );
}
