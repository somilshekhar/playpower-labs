import React, { useState } from "react";
import { MapPin, Search, Plus, Minus, Navigation } from "lucide-react";

export default function MapSection() {
  const [zoomLevel, setZoomLevel] = useState(14);

  return (
    <section className="py-8 border-b border-neutral-200">
      <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">Where you'll be</h3>
      <p className="text-sm font-medium text-neutral-700 mb-4 flex items-center gap-1.5">
        <MapPin size={16} className="text-rose-500" /> Candolim, Goa, India
      </p>

      {/* Styled Vector Map Box */}
      <div className="relative bg-gradient-to-tr from-emerald-100 via-teal-50 to-blue-100 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-inner border border-neutral-200 group">
        {/* Map Roads & Beach Water Visual Styling */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Goa Beach Coastline Line */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-blue-200/60 backdrop-blur-xs border-r-2 border-blue-300/80 flex items-center justify-center text-[10px] font-bold text-blue-700 uppercase tracking-widest -rotate-90">
          Arabian Sea · Candolim Beach
        </div>

        {/* Location Marker Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <div className="w-14 h-14 bg-rose-500/20 rounded-full animate-ping absolute inset-0" />
            <div className="w-12 h-12 bg-[#FF385C] text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
              <MapPin size={22} className="fill-current" />
            </div>
          </div>
          <span className="mt-2 bg-neutral-900/90 text-white font-semibold text-xs px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
            Amor De Goa · Candolim
          </span>
        </div>

        {/* Area Search Floating Button */}
        <button
          aria-label="Search this area"
          className="absolute top-4 left-4 bg-white hover:bg-neutral-50 text-neutral-800 rounded-full p-2.5 shadow-md border border-neutral-200 transition-transform hover:scale-105"
        >
          <Search size={16} />
        </button>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md border border-neutral-200 flex flex-col divide-y divide-neutral-200 overflow-hidden">
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 1, 18))}
            aria-label="Zoom in"
            className="p-2.5 hover:bg-neutral-100 transition-colors text-neutral-800"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 1, 10))}
            aria-label="Zoom out"
            className="p-2.5 hover:bg-neutral-100 transition-colors text-neutral-800"
          >
            <Minus size={16} />
          </button>
        </div>

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-semibold text-neutral-600 shadow-sm border border-neutral-200">
          Zoom level: {zoomLevel}x
        </div>
      </div>

      <p className="text-xs text-neutral-500 mt-3 font-medium">Exact location will be provided after booking.</p>

      <div className="mt-6 space-y-2">
        <h4 className="font-bold text-neutral-900 text-base">Neighbourhood highlights</h4>
        <p className="text-sm text-neutral-700 leading-relaxed max-w-3xl">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, popular cafes (Fisherman's Wharf, Calamari Beach Shack), and vibrant nightlife.
        </p>
        <button className="text-xs font-semibold underline text-neutral-900 hover:text-black">
          Show more
        </button>
      </div>
    </section>
  );
}
