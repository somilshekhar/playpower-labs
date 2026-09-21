import React, { useState } from "react";
import {
  Medal, Sparkles, CheckCircle2, KeyRound, MessageCircle, MapPin, Tag,
  Smile, Wrench, HeartHandshake, Package, Search, X
} from "lucide-react";
import { REVIEWS } from "../data/listingData";

export default function ReviewsSection() {
  const [activeTag, setActiveTag] = useState(null);
  const [allReviewsModalOpen, setAllReviewsModalOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredReviews = REVIEWS.filter((r) => {
    const matchesSearch = r.text.toLowerCase().includes(searchFilter.toLowerCase()) || r.name.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesSearch;
  });

  return (
    <section className="py-10 border-b border-neutral-200">
      {/* Hero Guest Favourite Banner */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4">
          <Medal size={40} className="scale-x-[-1] text-neutral-800" />
          <p className="text-5xl font-extrabold text-neutral-900 tracking-tight">4.95</p>
          <Medal size={40} className="text-neutral-800" />
        </div>
        <p className="mt-2 font-bold text-lg text-neutral-900">Guest favourite</p>
        <p className="text-sm text-neutral-500 mt-1 max-w-sm mx-auto leading-relaxed">
          This home is a guest favourite based on ratings, reviews, and reliability.
        </p>
        <button className="text-xs font-semibold underline text-neutral-800 hover:text-black mt-2">
          How reviews work
        </button>
      </div>

      {/* Ratings Matrix Grid */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-10 pb-6 border-b border-neutral-100">
        <RatingBar label="Overall rating" value={5} />
        <RatingStat label="Cleanliness" value="5.0" Icon={Sparkles} />
        <RatingStat label="Accuracy" value="5.0" Icon={CheckCircle2} />
        <RatingStat label="Check-in" value="5.0" Icon={KeyRound} />
        <RatingStat label="Communication" value="4.8" Icon={MessageCircle} />
        <RatingStat label="Location" value="4.8" Icon={MapPin} />
        <RatingStat label="Value" value="4.8" Icon={Tag} />
      </div>

      {/* Review Tag Pills */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {[
          ["Comfort", 6, Smile], ["Accuracy", 6, CheckCircle2], ["Hot tub", 5, Sparkles],
          ["Condition", 4, Wrench], ["Hospitality", 8, HeartHandshake],
          ["Cleanliness", 4, Sparkles], ["Amenities", 2, Package],
        ].map(([label, count, Icon]) => (
          <button
            key={label}
            onClick={() => setActiveTag(activeTag === label ? null : label)}
            className={`border rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTag === label
                ? "border-neutral-900 bg-neutral-900 text-white shadow-sm"
                : "border-neutral-300 hover:border-neutral-800 text-neutral-800 bg-white"
            }`}
          >
            <Icon size={14} /> {label} <span className={activeTag === label ? "text-neutral-300" : "text-neutral-500"}>{count}</span>
          </button>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {filteredReviews.slice(0, 6).map((r) => (
          <ReviewCard key={r.id} {...r} />
        ))}
      </div>

      {/* Show All Reviews Button */}
      <button
        onClick={() => setAllReviewsModalOpen(true)}
        className="mt-10 border border-neutral-900 rounded-xl px-6 py-3.5 text-sm font-bold text-neutral-900 hover:bg-neutral-50 transition-colors shadow-sm"
      >
        Show all {REVIEWS.length} reviews
      </button>

      {/* All Reviews Modal */}
      {allReviewsModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <button
                onClick={() => setAllReviewsModalOpen(false)}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X size={18} />
              </button>
              <h3 className="font-bold text-lg text-neutral-900">★ 4.95 · {REVIEWS.length} Reviews</h3>
              <div className="w-8"></div>
            </div>

            <div className="p-6 border-b border-neutral-100">
              <div className="relative flex items-center">
                <Search size={16} className="absolute left-3.5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                />
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              {filteredReviews.map((r) => (
                <ReviewCard key={r.id} {...r} truncated={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function RatingBar({ label, value }) {
  return (
    <div className="col-span-1">
      <p className="text-xs font-semibold text-neutral-800 mb-2">{label}</p>
      {[5, 4, 3, 2, 1].map((n) => (
        <div key={n} className="flex items-center gap-2 text-[10px] text-neutral-500 mb-0.5">
          <span className="w-2">{n}</span>
          <div className="flex-1 h-[3px] bg-neutral-200 rounded overflow-hidden">
            <div className="h-full bg-neutral-900" style={{ width: n === value ? "100%" : "4%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function RatingStat({ label, value, Icon }) {
  return (
    <div className="col-span-1 flex flex-col items-center text-center">
      <Icon size={18} className="mb-2 text-neutral-800" />
      <p className="font-bold text-sm text-neutral-900">{value}</p>
      <p className="text-[11px] text-neutral-600 font-medium">{label}</p>
    </div>
  );
}

function ReviewCard({ name, avatar, meta, time, text, truncated }) {
  const [expanded, setExpanded] = useState(!truncated);

  return (
    <div className="bg-white">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border border-neutral-200"
        />
        <div>
          <p className="font-bold text-sm text-neutral-900">{name}</p>
          <p className="text-xs text-neutral-500">{meta}</p>
        </div>
      </div>
      <p className="text-xs text-neutral-700 font-medium mb-2">
        ★★★★★ <span className="text-neutral-400">· {time}</span>
      </p>
      <p className={`text-sm text-neutral-800 leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
        {text}
      </p>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="text-xs underline font-bold text-neutral-900 mt-1 block hover:text-black"
        >
          Show more
        </button>
      )}
    </div>
  );
}
