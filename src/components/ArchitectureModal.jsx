import React from "react";
import { X, Server, Database, Cloud, Shield, Cpu, Layers, HardDrive } from "lucide-react";

export default function ArchitectureModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-900 text-white">
          <div className="flex items-center gap-2">
            <Server size={20} className="text-rose-500" />
            <h3 className="font-bold text-lg">Vacation Rental Platform — High-Level Production System Architecture</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-300">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto space-y-8 bg-neutral-50 flex-1 text-sm">
          {/* Architecture Visual Diagram */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
            <h4 className="font-extrabold text-base text-neutral-900 border-b pb-2 flex items-center gap-2">
              <Layers size={18} className="text-rose-500" /> System Architecture Overview
            </h4>

            {/* Diagram Flow Layers */}
            <div className="space-y-4">
              {/* Layer 1: Clients & Edge */}
              <div className="border border-blue-200 bg-blue-50/50 p-4 rounded-xl">
                <div className="font-bold text-blue-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cloud size={14} /> 1. Client Tier & Edge CDN (Vercel / AWS CloudFront)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 font-semibold text-neutral-800 shadow-2xs">
                    Next.js / Vite SPA Frontend (Global Edge SSR)
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 font-semibold text-neutral-800 shadow-2xs">
                    Cloudflare CDN & WAF (DDoS protection, SSL)
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-blue-100 font-semibold text-neutral-800 shadow-2xs">
                    Mobile Native Apps (iOS / Android React Native)
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-neutral-400 font-bold text-xs">↓ API Gateway & Load Balancer</div>

              {/* Layer 2: API Gateway & Microservices */}
              <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
                <div className="font-bold text-purple-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu size={14} /> 2. Microservices Tier (Kubernetes / Node.js & Go Services)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 font-medium text-neutral-800 shadow-2xs">
                    <span className="font-bold text-purple-700 block">Listing Service</span>
                    Metadata, Photos & Amenities
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 font-medium text-neutral-800 shadow-2xs">
                    <span className="font-bold text-purple-700 block">Search & Geo Index</span>
                    Elasticsearch + H3 Spatial
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 font-medium text-neutral-800 shadow-2xs">
                    <span className="font-bold text-purple-700 block">Booking & Calendar</span>
                    Distributed Locks (Redis)
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-purple-100 font-medium text-neutral-800 shadow-2xs">
                    <span className="font-bold text-purple-700 block">Reviews & Ratings</span>
                    Aggregated Metrics Service
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-center text-neutral-400 font-bold text-xs">↓ Event Streaming & Cache Layer</div>

              {/* Layer 3: Persistence & Caching */}
              <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl">
                <div className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Database size={14} /> 3. Data & Storage Infrastructure
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-neutral-800 shadow-2xs">
                    <span className="font-bold text-emerald-700 block">PostgreSQL (Primary DB)</span>
                    CockroachDB / AWS Aurora multi-region sharded.
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-neutral-800 shadow-2xs">
                    <span className="font-bold text-emerald-700 block">Redis Cluster</span>
                    Hot calendar availability & session caching.
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-neutral-800 shadow-2xs">
                    <span className="font-bold text-emerald-700 block">AWS S3 + CloudFront</span>
                    High-res optimized image asset delivery.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs space-y-2">
              <h5 className="font-bold text-neutral-900 flex items-center gap-1.5 text-sm">
                <Shield size={16} className="text-emerald-600" /> High-Availability & Consistency
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prevents double-bookings using Redis distributed locks during checkout checkout lock acquisition, backed by ACID database transaction isolation levels.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-2xs space-y-2">
              <h5 className="font-bold text-neutral-900 flex items-center gap-1.5 text-sm">
                <HardDrive size={16} className="text-indigo-600" /> Geo-Spatial Search Optimization
              </h5>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Listings indexed using Uber's H3 spatial hex index in Elasticsearch, delivering sub-50ms map filtering across millions of listings worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
