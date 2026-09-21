import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import ListingHeader from "./components/ListingHeader";
import PhotoGallery from "./components/PhotoGallery";
import PhotoTour from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";
import BookingCard from "./components/BookingCard";
import CalendarPicker from "./components/CalendarPicker";
import AmenitiesModal from "./components/AmenitiesModal";
import ReviewsSection from "./components/ReviewsSection";
import MapSection from "./components/MapSection";
import HostSection from "./components/HostSection";
import ShareModal from "./components/ShareModal";
import ArchitectureModal from "./components/ArchitectureModal";

import { LISTING_INFO, AMENITIES, NEARBY, PHOTOS } from "./data/listingData";
import { Medal, ChevronDown, ChevronLeft, ChevronRight, FileText, Home, ShieldCheck } from "lucide-react";

export default function App() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [architectureModalOpen, setArchitectureModalOpen] = useState(false);
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");
  const [descExpanded, setDescExpanded] = useState(false);
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null, nights: 5 });

  // Scroll listener for secondary sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowSecondaryNav(true);
      } else {
        setShowSecondaryNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when any modal overlay is open
  useEffect(() => {
    if (tourOpen || lightboxIndex !== null || amenitiesModalOpen || shareModalOpen || architectureModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [tourOpen, lightboxIndex, amenitiesModalOpen, shareModalOpen, architectureModalOpen]);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const nextLightbox = useCallback(
    () => setLightboxIndex((i) => (i + 1) % PHOTOS.length),
    []
  );
  const prevLightbox = useCallback(
    () => setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length),
    []
  );

  return (
    <div className="bg-white text-neutral-900 font-sans min-h-screen selection:bg-[#FF385C] selection:text-white">
      {/* Header Bar */}
      <Header />

      <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-6">
        {/* Listing Title & Share/Save */}
        <ListingHeader
          title={LISTING_INFO.title}
          onOpenShare={() => setShareModalOpen(true)}
        />

        {/* 5-Photo Hero Gallery */}
        <PhotoGallery onOpenTour={(index) => { setTourOpen(true); }} />

        {/* 2-Column Main Content & Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-8">
          {/* Left Column */}
          <div className="flex-1 max-w-[760px]">
            {/* Property Subheader Banner */}
            <div className="pb-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-[22px] font-semibold text-neutral-900">
                  {LISTING_INFO.type}
                </h2>
                <p className="text-sm text-neutral-600 mt-1 font-normal">
                  {LISTING_INFO.guests} guests · {LISTING_INFO.bedrooms} bedroom · {LISTING_INFO.beds} bed · {LISTING_INFO.bathrooms} bathroom
                </p>
              </div>

              {/* Promo Banner Box */}
              <div className="border border-neutral-200 rounded-xl px-4 py-3 bg-white flex items-center justify-between gap-6 text-xs text-neutral-700 shadow-2xs shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-base text-emerald-600">🏷️</span>
                  <div>
                    <p className="font-medium text-neutral-800">Get 10% off your next stay.</p>
                    <button className="underline font-semibold text-neutral-900">Terms apply</button>
                  </div>
                </div>
                <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold px-4 py-2 rounded-lg text-xs transition-colors">
                  Claim
                </button>
              </div>
            </div>

            {/* Guest Favourite Medal Banner */}
            <div className="border border-neutral-200 rounded-2xl p-6 flex items-center justify-between shadow-2xs my-6 bg-white">
              <div className="flex items-center gap-4">
                <Medal size={36} className="text-neutral-900 shrink-0" />
                <div>
                  <p className="font-extrabold text-base text-neutral-900">Guest favourite</p>
                  <p className="text-xs text-neutral-600 mt-0.5 max-w-xs">
                    One of the most loved homes on Airbnb, according to guests
                  </p>
                </div>
              </div>
              <div className="border-l border-neutral-200 pl-6 text-center shrink-0">
                <p className="text-lg font-extrabold text-neutral-900">4.95 ★★★★★</p>
                <p className="text-xs font-bold underline text-neutral-700 mt-0.5 cursor-pointer">19 Reviews</p>
              </div>
            </div>

            {/* Host Snippet */}
            <div className="flex items-center gap-4 py-6 border-b border-neutral-200">
              <img
                src={LISTING_INFO.host.avatar}
                alt={LISTING_INFO.host.name}
                className="w-12 h-12 rounded-full object-cover border border-neutral-200 shadow-2xs shrink-0"
              />
              <div>
                <p className="font-bold text-base text-neutral-900">Hosted by {LISTING_INFO.host.name}</p>
                <p className="text-xs text-neutral-500 font-medium">{LISTING_INFO.host.yearsHosting} years hosting</p>
              </div>
            </div>

            {/* Highlights List */}
            <div className="py-6 border-b border-neutral-200 space-y-6">
              {LISTING_INFO.highlights.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <IconComponent size={24} className="shrink-0 text-neutral-800 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-neutral-900">{h.title}</p>
                      <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Auto Translate Banner */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 mt-6 text-xs sm:text-sm flex items-center justify-between">
              <span className="text-neutral-700 font-medium">Some info has been automatically translated.</span>
              <button className="underline font-bold text-neutral-900 shrink-0 ml-4">Show original</button>
            </div>

            {/* Description Section */}
            <div className="py-6 border-b border-neutral-200 text-sm sm:text-base leading-relaxed text-neutral-800">
              <p className={!descExpanded ? "line-clamp-4" : ""}>
                {LISTING_INFO.description}
              </p>
              <button
                onClick={() => setDescExpanded(!descExpanded)}
                className="underline font-bold text-neutral-900 inline-flex items-center gap-1 mt-2 hover:text-black"
              >
                <span>{descExpanded ? "Show less" : "Show more"}</span>
                <ChevronRight size={16} className={`transition-transform ${descExpanded ? "rotate-90" : ""}`} />
              </button>
            </div>

            {/* Where You'll Sleep */}
            <section className="py-8 border-b border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Where you'll sleep</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LISTING_INFO.sleepingArrangements.map((item) => (
                  <div key={item.room} className="border border-neutral-200 rounded-2xl p-4 bg-white shadow-2xs">
                    <div className="h-44 rounded-xl overflow-hidden mb-3 bg-neutral-100">
                      <img src={item.image} alt={item.room} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-base text-neutral-900">{item.room}</p>
                    <p className="text-xs text-neutral-500 font-medium mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities Grid & Modal Trigger */}
            <section id="amenities" className="py-8 border-b border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AMENITIES.slice(0, 10).map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3.5 text-sm text-neutral-800 font-medium">
                    <Icon size={22} className="text-neutral-700" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setAmenitiesModalOpen(true)}
                className="mt-8 border border-neutral-900 hover:bg-neutral-50 text-neutral-900 rounded-xl px-6 py-3.5 text-sm font-bold transition-colors shadow-sm"
              >
                Show all 50 amenities
              </button>
            </section>

            {/* Interactive Calendar Picker ("5 nights in Candolim") */}
            <CalendarPicker onDateChange={(range) => setDateRange(range)} />
          </div>

          {/* Right Column (Sticky Booking Sidebar - STOPS sticky scroll after Calendar section) */}
          <BookingCard dateRange={dateRange} />
        </div>

        {/* Remaining Sections Below Calendar (Full Width of Container) */}
        <div className="w-full">
          {/* Reviews Section */}
          <ReviewsSection />

          {/* Map & Location */}
          <MapSection />

          {/* Host Section */}
          <HostSection />

          {/* Things to Know */}
          <section className="py-8 border-b border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">Things to know</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <FileText size={22} className="mb-3 text-neutral-800" />
                <p className="font-bold text-neutral-900 mb-2">Cancellation policy</p>
                <p className="text-neutral-600 mb-1 leading-relaxed">Free cancellation before 17 October.</p>
                <p className="text-neutral-600 mb-2 leading-relaxed">Cancel before check-in on 18 October for a partial refund.</p>
                <button className="underline font-bold text-neutral-900 text-xs">Learn more</button>
              </div>

              <div>
                <Home size={22} className="mb-3 text-neutral-800" />
                <p className="font-bold text-neutral-900 mb-2">House rules</p>
                <p className="text-neutral-600 mb-1">Check-in after 2:00 pm</p>
                <p className="text-neutral-600 mb-1">Checkout before 11:00 am</p>
                <p className="text-neutral-600 mb-2">3 guests maximum</p>
                <button className="underline font-bold text-neutral-900 text-xs">Learn more</button>
              </div>

              <div>
                <ShieldCheck size={22} className="mb-3 text-neutral-800" />
                <p className="font-bold text-neutral-900 mb-2">Safety & property</p>
                <p className="text-neutral-600 mb-1">Carbon monoxide alarm not reported</p>
                <p className="text-neutral-600 mb-1">Smoke alarm not reported</p>
                <p className="text-neutral-600 mb-2">Exterior security cameras on property</p>
                <button className="underline font-bold text-neutral-900 text-xs">Learn more</button>
              </div>
            </div>
          </section>
        </div>

        {/* More Stays Nearby */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-neutral-900">More stays nearby</h3>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-neutral-500">1 / 2</span>
              <button aria-label="Previous listings" className="p-2 rounded-full border border-neutral-300 hover:border-neutral-800">
                <ChevronLeft size={14} />
              </button>
              <button aria-label="Next listings" className="p-2 rounded-full border border-neutral-300 hover:border-neutral-800">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))] gap-4">
            {NEARBY.map((n) => (
              <div key={n.title} className="group cursor-pointer">
                <div className="h-36 rounded-xl overflow-hidden mb-2 bg-neutral-100">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-xs font-bold text-neutral-900 truncate">{n.title}</p>
                <p className="text-xs text-neutral-600 mt-0.5">{n.price} · ★ {n.rating}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modals & Overlays */}
      {tourOpen && (
        <PhotoTour
          onClose={() => setTourOpen(false)}
          onOpenLightbox={(i) => {
            setTourOpen(false);
            openLightbox(i);
          }}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={nextLightbox}
          onPrev={prevLightbox}
        />
      )}

      {amenitiesModalOpen && (
        <AmenitiesModal onClose={() => setAmenitiesModalOpen(false)} />
      )}

      {shareModalOpen && (
        <ShareModal onClose={() => setShareModalOpen(false)} />
      )}

      {architectureModalOpen && (
        <ArchitectureModal onClose={() => setArchitectureModalOpen(false)} />
      )}
    </div>
  );
}
