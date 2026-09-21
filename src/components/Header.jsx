import React from "react";
import { Search, Globe, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img
            src="https://www.airbnb.com/favicon.ico"
            alt="Airbnb"
            className="w-8 h-8 object-contain"
          />
          <span className="hidden sm:inline font-extrabold text-xl tracking-tight text-[#FF385C]">airbnb</span>
        </div>

        {/* Search Pill */}
        <div className="flex items-center gap-1 border border-neutral-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium">
          <span className="text-base mr-0.5">🏡</span>
          <span className="px-2 font-semibold text-neutral-800">Anywhere</span>
          <span className="border-l border-neutral-200 h-4 mx-1"></span>
          <span className="px-2 font-semibold text-neutral-800">Anytime</span>
          <span className="border-l border-neutral-200 h-4 mx-1"></span>
          <span className="px-2 text-neutral-500 font-normal">Add guests</span>
          <button className="bg-[#FF385C] text-white rounded-full p-2 ml-1 hover:bg-[#E00B41] transition-colors" aria-label="Search">
            <Search size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Right Menu Controls */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="hidden md:block cursor-pointer hover:bg-neutral-100 px-3 py-2 rounded-full transition-colors">
            Become a host
          </span>
          <button aria-label="Language selection" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <Globe size={18} />
          </button>
          <div className="flex items-center gap-2 border border-neutral-300 rounded-full pl-3 pr-1 py-1 cursor-pointer hover:shadow-md transition-shadow">
            <Menu size={16} className="text-neutral-700" />
            <div className="w-7 h-7 rounded-full bg-neutral-500" />
          </div>
        </div>
      </div>
    </header>
  );
}

