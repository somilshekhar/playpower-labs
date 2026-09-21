import React, { useState } from "react";
import { X, Copy, Check, Facebook, Twitter, Mail, MessageSquare } from "lucide-react";

export default function ShareModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
          <h3 className="font-bold text-lg text-neutral-900">Share this place</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-neutral-100">
            <X size={18} />
          </button>
        </div>

        {/* Listing preview */}
        <div className="flex items-center gap-4 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
          <img
            src="/images/living_room_1.png"
            alt="Preview"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <p className="font-bold text-sm text-neutral-900 line-clamp-1">Romantic Jacuzzi 1BHK Candolim</p>
            <p className="text-xs text-neutral-500">★ 4.95 · 19 reviews · Candolim, Goa</p>
          </div>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="flex-1 px-3 py-2.5 rounded-xl border border-neutral-300 text-xs bg-neutral-50 text-neutral-700 select-all"
          />
          <button
            onClick={handleCopy}
            className="bg-neutral-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-4 gap-3 pt-2 text-center text-xs font-semibold">
          {[
            { label: "WhatsApp", Icon: MessageSquare, color: "bg-emerald-50 text-emerald-600" },
            { label: "Facebook", Icon: Facebook, color: "bg-blue-50 text-blue-600" },
            { label: "Twitter", Icon: Twitter, color: "bg-sky-50 text-sky-600" },
            { label: "Email", Icon: Mail, color: "bg-rose-50 text-rose-600" },
          ].map(({ label, Icon, color }) => (
            <button
              key={label}
              onClick={handleCopy}
              className={`p-3 rounded-xl flex flex-col items-center gap-2 hover:opacity-80 transition-opacity ${color}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
