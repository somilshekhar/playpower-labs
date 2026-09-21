import React, { useState } from "react";
import { Flag, ChevronDown, Plus, Minus, CheckCircle, ShieldCheck } from "lucide-react";
import { LISTING_INFO } from "../data/listingData";

export default function BookingCard({ dateRange, onClearDates }) {
  const [guests, setGuests] = useState({ adults: 2, children: 0, infants: 0, pets: 0 });
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [reservedModalOpen, setReservedModalOpen] = useState(false);

  const totalGuestsCount = guests.adults + guests.children;
  const nights = dateRange?.nights || LISTING_INFO.nightsDefault;
  const basePricePerNight = LISTING_INFO.basePricePerNight;
  const rawSubtotal = basePricePerNight * nights;
  const discountAmount = Math.round(rawSubtotal * (LISTING_INFO.discountPercent / 100));
  const cleaningFee = 1200;
  const serviceFee = 2100;
  const totalPrice = rawSubtotal - discountAmount + cleaningFee + serviceFee;

  const updateGuest = (type, delta) => {
    setGuests((prev) => {
      const current = prev[type];
      const next = Math.max(type === "adults" ? 1 : 0, current + delta);
      return { ...prev, [type]: next };
    });
  };

  return (
    <aside className="w-full lg:w-[380px] shrink-0">
      <div className="sticky top-28 border border-neutral-200 rounded-2xl shadow-card p-6 bg-white transition-all">
        {/* Discount Promo Banner */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 mb-5 text-xs sm:text-sm flex items-center justify-between gap-2">
          <span className="text-neutral-800 font-medium">
            Get 10% off your next stay. <span className="underline cursor-pointer font-bold text-rose-600">Terms apply</span>
          </span>
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg px-3 py-1.5 text-xs shrink-0 transition-colors">
            Claim
          </button>
        </div>

        {/* Pricing Summary */}
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-neutral-900">₹{totalPrice.toLocaleString('en-IN')}</span>
            <span className="text-sm font-normal text-neutral-600"> for {nights} nights</span>
          </div>
          <div className="text-xs font-semibold text-neutral-500 line-through">
            ₹{(rawSubtotal + cleaningFee + serviceFee).toLocaleString('en-IN')}
          </div>
        </div>

        {/* Date & Guest Input Matrix */}
        <div className="border border-neutral-300 rounded-xl overflow-hidden mb-4">
          <div className="grid grid-cols-2 divide-x divide-neutral-300 border-b border-neutral-300 bg-neutral-50/50">
            <div className="p-3">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">Check-in</p>
              <p className="text-xs font-semibold text-neutral-900 mt-0.5">
                {dateRange?.startDate ? dateRange.startDate.toLocaleDateString() : "10/18/2026"}
              </p>
            </div>
            <div className="p-3">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">Checkout</p>
              <p className="text-xs font-semibold text-neutral-900 mt-0.5">
                {dateRange?.endDate ? dateRange.endDate.toLocaleDateString() : "10/23/2026"}
              </p>
            </div>
          </div>

          {/* Guests Selector Trigger */}
          <div className="relative">
            <button
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              className="w-full p-3 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
            >
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-700">Guests</p>
                <p className="text-xs font-semibold text-neutral-900 mt-0.5">
                  {totalGuestsCount} {totalGuestsCount === 1 ? "guest" : "guests"}
                  {guests.infants > 0 ? `, ${guests.infants} infant` : ""}
                  {guests.pets > 0 ? `, ${guests.pets} pet` : ""}
                </p>
              </div>
              <ChevronDown size={16} className={`text-neutral-600 transition-transform ${guestDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Guests Popover */}
            {guestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-300 rounded-xl shadow-modal p-4 z-30 space-y-4 animate-in fade-in">
                {[
                  { label: "Adults", desc: "Age 13+", key: "adults", min: 1 },
                  { label: "Children", desc: "Ages 2–12", key: "children", min: 0 },
                  { label: "Infants", desc: "Under 2", key: "infants", min: 0 },
                  { label: "Pets", desc: "Service animals welcome", key: "pets", min: 0 },
                ].map(({ label, desc, key, min }) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neutral-900">{label}</p>
                      <p className="text-[11px] text-neutral-500">{desc}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateGuest(key, -1)}
                        disabled={guests[key] <= min}
                        className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800 disabled:opacity-30 disabled:hover:border-neutral-300"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-semibold w-4 text-center">{guests[key]}</span>
                      <button
                        onClick={() => updateGuest(key, 1)}
                        className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setGuestDropdownOpen(false)}
                  className="w-full text-right text-xs font-bold underline text-neutral-800 pt-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-neutral-600 mb-4">
          Free cancellation before <span className="font-semibold text-neutral-900 underline">17 October</span>
        </p>

        {/* Action Button */}
        <button
          onClick={() => setReservedModalOpen(true)}
          className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white font-bold text-base rounded-xl py-3.5 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
        >
          Reserve
        </button>

        <p className="text-center text-xs text-neutral-500 mt-3 font-medium">You won't be charged yet</p>

        {/* Price Itemized Breakdown */}
        <div className="mt-5 pt-5 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-600">
          <div className="flex justify-between">
            <span className="underline">₹{basePricePerNight.toLocaleString('en-IN')} x {nights} nights</span>
            <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-green-600 font-medium">
            <span>Special promo discount (10%)</span>
            <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>₹{serviceFee.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between pt-3 border-t border-neutral-200 text-sm font-bold text-neutral-900">
            <span>Total before taxes</span>
            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <p className="text-center text-xs underline font-semibold text-neutral-600 mt-5 flex items-center justify-center gap-1.5 cursor-pointer hover:text-neutral-900">
          <Flag size={12} /> Report this listing
        </p>
      </div>

      {/* Reservation Success Dialog */}
      {reservedModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center shadow-2xl space-y-4">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">Reservation Inquiry Initiated</h3>
            <p className="text-sm text-neutral-600">
              You selected <span className="font-semibold text-neutral-900">{nights} nights</span> for <span className="font-semibold text-neutral-900">{totalGuestsCount} guests</span>.
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-left space-y-1 text-neutral-700">
              <p><span className="font-semibold">Listing:</span> Romantic Jacuzzi 1BHK Candolim</p>
              <p><span className="font-semibold">Host:</span> Mirashya Homes</p>
              <p><span className="font-semibold">Total Price:</span> ₹{totalPrice.toLocaleString('en-IN')}</p>
            </div>
            <button
              onClick={() => setReservedModalOpen(false)}
              className="w-full bg-neutral-900 hover:bg-black text-white font-semibold rounded-xl py-3 text-sm transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
