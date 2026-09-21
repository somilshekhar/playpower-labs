import React, { useState } from "react";
import { X, Search } from "lucide-react";
import { ALL_50_AMENITIES } from "../data/listingData";

export default function AmenitiesModal({ onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = ALL_50_AMENITIES.map((cat) => {
    const matchingItems = cat.items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X size={18} />
          </button>
          <h3 className="font-bold text-lg text-neutral-900">What this place offers</h3>
          <div className="w-8"></div>
        </div>

        {/* Search Bar */}
        <div className="p-6 border-b border-neutral-100">
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search amenities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
            />
          </div>
        </div>

        {/* Scrollable List */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {filteredCategories.length === 0 ? (
            <p className="text-center text-neutral-500 py-8">No amenities found matching "{searchQuery}"</p>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.category} className="border-b border-neutral-100 pb-6 last:border-b-0">
                <h4 className="font-bold text-base text-neutral-900 mb-4">{cat.category}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-1.5 text-sm text-neutral-800">
                      <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
