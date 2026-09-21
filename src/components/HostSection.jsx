import React, { useState } from "react";
import { Star, Cake, GraduationCap, ShieldCheck, MessageCircle, X, Send } from "lucide-react";
import { LISTING_INFO } from "../data/listingData";

export default function HostSection() {
  const { host } = LISTING_INFO;
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setMessageModalOpen(false);
      setMessageText("");
    }, 2000);
  };

  return (
    <section className="py-10 border-b border-neutral-200" id="host">
      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-8">Meet your host</h3>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Host Badge Card */}
        <div className="border border-neutral-200 rounded-3xl shadow-card p-8 w-full lg:w-72 text-center shrink-0 bg-white">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-neutral-200 shadow-sm">
            <img src={host.avatar} alt={host.name} className="w-full h-full object-cover" />
          </div>
          <p className="font-extrabold text-xl text-neutral-900">{host.name}</p>
          <p className="text-xs font-semibold text-neutral-500 mt-0.5">{host.role}</p>

          <hr className="my-5 border-neutral-200" />

          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-neutral-200">
            <div>
              <p className="font-extrabold text-base text-neutral-900">{host.reviewsCount}</p>
              <p className="text-[10px] font-semibold text-neutral-500 uppercase">Reviews</p>
            </div>
            <div>
              <p className="font-extrabold text-base text-neutral-900 flex items-center justify-center gap-1">
                <Star size={13} className="fill-current text-neutral-900" /> {host.rating}
              </p>
              <p className="text-[10px] font-semibold text-neutral-500 uppercase">Rating</p>
            </div>
            <div>
              <p className="font-extrabold text-base text-neutral-900">{host.yearsHosting}</p>
              <p className="text-[10px] font-semibold text-neutral-500 uppercase">Years</p>
            </div>
          </div>
        </div>

        {/* Co-hosts & Details */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="font-bold text-base text-neutral-900 mb-3">Co-Hosts</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {host.coHosts.map((cohost) => (
                <div key={cohost.name} className="flex items-center gap-2.5">
                  <img
                    src={cohost.avatar}
                    alt={cohost.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                  />
                  <span className="text-xs font-semibold text-neutral-800 truncate">{cohost.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-6 space-y-2">
            <p className="font-bold text-base text-neutral-900 mb-1">Host details</p>
            <p className="text-sm text-neutral-700">Response rate: <span className="font-semibold text-neutral-900">{host.responseRate}</span></p>
            <p className="text-sm text-neutral-700">Responds {host.responseTime}</p>
          </div>

          <div className="text-sm space-y-2 text-neutral-700">
            <p className="flex items-center gap-2 font-medium"><Cake size={16} className="text-neutral-500" /> {host.bornDecade}</p>
            <p className="flex items-center gap-2 font-medium"><GraduationCap size={16} className="text-neutral-500" /> Where I went to school: {host.school}</p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setMessageModalOpen(true)}
              className="border border-neutral-900 rounded-xl px-6 py-3.5 text-sm font-bold text-neutral-900 hover:bg-neutral-50 transition-colors shadow-sm flex items-center gap-2"
            >
              <MessageCircle size={16} /> Message host
            </button>
            <p className="text-xs text-neutral-500 mt-3 flex items-center gap-1.5 font-medium">
              <ShieldCheck size={16} className="text-rose-500" />
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>

      {/* Message Host Modal */}
      {messageModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <h3 className="font-bold text-lg text-neutral-900">Message Mirashya Homes</h3>
              <button onClick={() => setMessageModalOpen(false)} className="p-1 rounded-full hover:bg-neutral-100">
                <X size={18} />
              </button>
            </div>

            {sentMessage ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Send size={20} />
                </div>
                <p className="font-bold text-base text-neutral-900">Message Sent to Host!</p>
                <p className="text-xs text-neutral-500">Mirashya Homes typically responds within an hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your message</label>
                  <textarea
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Hi Mirashya, I'm interested in booking your Candolim apartment..."
                    className="w-full p-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white font-bold py-3 rounded-xl text-sm transition-colors shadow"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
