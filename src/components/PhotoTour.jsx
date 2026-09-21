import React from "react";
import { ChevronLeft, Share, Heart } from "lucide-react";

const TOUR_SECTIONS = [
  {
    id: "living-room-1",
    title: "Living room 1",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
    photos: [{ url: "/images/living_room_1.png", index: 0 }],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    subtitle: "Ceiling fan · Hot tub · Coffee table",
    photos: [{ url: "/images/living_room_2.png", index: 1 }],
  },
  {
    id: "full-kitchen",
    title: "Full kitchen",
    subtitle: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave",
    photos: [{ url: "/images/kitchen.png", index: 2 }],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    subtitle: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage",
    photos: [{ url: "/images/bedroom.png", index: 3 }],
  },
  {
    id: "full-bathroom",
    title: "Full bathroom",
    subtitle: "Shower · Hot water · Hair dryer · Towels · Cleaning products",
    photos: [{ url: "/images/bathroom.png", index: 4 }],
  },
  {
    id: "gym",
    title: "Gym",
    subtitle: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    photos: [{ url: "/images/deck.png", index: 5 }],
  },
  {
    id: "exterior",
    title: "Exterior",
    subtitle: "Building facade · Architecture · Garden grounds",
    photos: [{ url: "/images/exterior.png", index: 7 }],
  },
  {
    id: "pool",
    title: "Pool",
    subtitle: "Outdoor swimming pool · Resort view",
    photos: [{ url: "/images/balcony.png", index: 8 }],
  },
  {
    id: "additional-photos",
    title: "Additional photos",
    subtitle: "Private Jacuzzi deck · Outdoor lounge",
    photos: [{ url: "/images/jacuzzi.png", index: 6 }],
  },
];

export default function PhotoTour({ onClose, onOpenLightbox }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-in fade-in duration-200">
      {/* Top Sticky Bar: Header + Category Thumbnails Grid */}
      <div className="sticky top-0 z-40 bg-white border-b border-neutral-200 shadow-2xs">
        {/* Top Header */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <button
            onClick={onClose}
            aria-label="Back to listing"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronLeft size={22} className="text-neutral-900" />
          </button>

          <h1 className="text-base font-bold text-neutral-900">Photo tour</h1>

          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-800" aria-label="Share">
              <Share size={18} />
            </button>
            <button className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-800" aria-label="Save">
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Category Thumbnails Strip */}
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pb-4 pt-1 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-4 min-w-max">
            {TOUR_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="flex flex-col items-start text-left group shrink-0"
              >
                <div className="w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 group-hover:border-neutral-900 transition-colors">
                  <img
                    src={sec.photos[0]?.url}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-semibold text-neutral-800 mt-1.5 truncate max-w-[112px]">
                  {sec.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Stream with Sticky Side Titles */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 space-y-16">
        {TOUR_SECTIONS.map((sec) => (
          <div
            key={sec.id}
            id={sec.id}
            className="flex flex-col md:flex-row gap-8 lg:gap-16 pt-4 scroll-mt-48"
          >
            {/* Left Column: Sticky Title & Subtitle */}
            <div className="w-full md:w-72 lg:w-80 shrink-0">
              <div className="sticky top-52 space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">{sec.title}</h2>
                {sec.subtitle && (
                  <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                    {sec.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Room Photos */}
            <div className="flex-1 space-y-6">
              {sec.photos.map((photo, i) => (
                <div
                  key={i}
                  onClick={() => onOpenLightbox(photo.index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 relative aspect-[16/10] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <img
                    src={photo.url}
                    alt={sec.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
