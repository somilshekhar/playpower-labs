import React, { useState } from "react";
import { Share, Heart } from "lucide-react";

export default function ListingHeader({ title, onOpenShare }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pt-2">
      <h1 className="text-2xl sm:text-[26px] font-semibold text-neutral-900 tracking-tight leading-snug">
        {title}
      </h1>

      <div className="flex items-center gap-4 text-sm font-medium shrink-0">
        <button
          onClick={onOpenShare}
          className="flex items-center gap-1.5 hover:bg-neutral-100 px-2 py-1 rounded-md transition-colors underline font-medium text-neutral-900"
        >
          <Share size={16} /> <span>Share</span>
        </button>

        <button
          onClick={() => setIsSaved(!isSaved)}
          className="flex items-center gap-1.5 hover:bg-neutral-100 px-2 py-1 rounded-md transition-colors underline font-medium text-neutral-900"
        >
          <Heart
            size={16}
            className={isSaved ? "fill-rose-500 text-rose-500 transition-transform scale-110" : "text-neutral-900"}
          />
          <span>{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>
    </div>
  );
}

