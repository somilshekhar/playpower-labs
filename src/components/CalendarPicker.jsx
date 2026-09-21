import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

export default function CalendarPicker({ onDateChange }) {
  const [selectedRange, setSelectedRange] = useState({ start: 18, end: 23 });

  const handleDayClick = (day) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: day, end: null });
    } else if (day > selectedRange.start) {
      const newRange = { start: selectedRange.start, end: day };
      setSelectedRange(newRange);
      const nights = day - selectedRange.start;
      if (onDateChange) {
        onDateChange({
          startDate: new Date(2026, 9, selectedRange.start),
          endDate: new Date(2026, 9, day),
          nights,
        });
      }
    } else {
      setSelectedRange({ start: day, end: null });
    }
  };

  const handleClear = () => {
    setSelectedRange({ start: null, end: null });
    if (onDateChange) {
      onDateChange({ startDate: null, endDate: null, nights: 5 });
    }
  };

  return (
    <section className="py-8 border-b border-neutral-200">
      <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-1">
        {selectedRange.start && selectedRange.end
          ? `${selectedRange.end - selectedRange.start} nights in Candolim`
          : "Select check-in date"}
      </h3>
      <p className="text-sm text-neutral-500 mb-6">
        {selectedRange.start && selectedRange.end
          ? `${selectedRange.start} Oct 2026 – ${selectedRange.end} Oct 2026`
          : "Minimum stay: 2 nights"}
      </p>

      {/* Calendar Navigation Buttons */}
      <div className="flex items-center justify-between mb-4 px-2">
        <button
          aria-label="Previous month"
          className="p-2 rounded-full border border-neutral-300 hover:border-neutral-800 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          aria-label="Next month"
          className="p-2 rounded-full border border-neutral-300 hover:border-neutral-800 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Two Month Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <MiniCalendar
          month="October 2026"
          startDay={4}
          rangeStart={selectedRange.start}
          rangeEnd={selectedRange.end}
          onSelectDay={handleDayClick}
        />
        <MiniCalendar
          month="November 2026"
          startDay={0}
          onSelectDay={() => {}}
        />
      </div>

      <div className="flex items-center justify-between mt-6 pt-2">
        <button
          aria-label="Open date picker"
          className="p-2.5 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-colors"
        >
          <CalendarDays size={18} />
        </button>
        <button
          onClick={handleClear}
          className="text-xs sm:text-sm font-semibold underline text-neutral-800 hover:text-black"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}

function MiniCalendar({ month, startDay = 0, rangeStart, rangeEnd, daysInMonth = 31, onSelectDay }) {
  const cells = [
    ...Array.from({ length: startDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <p className="font-semibold text-sm mb-4 text-center text-neutral-900">{month}</p>
      <div className="grid grid-cols-7 text-center text-xs font-semibold text-neutral-400 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-xs font-medium gap-y-1">
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />;

          const inRange = rangeStart && rangeEnd && day > rangeStart && day < rangeEnd;
          const isStart = day === rangeStart;
          const isEnd = day === rangeEnd;
          const isSelected = isStart || isEnd;

          return (
            <div
              key={i}
              onClick={() => onSelectDay(day)}
              className={`relative py-1 cursor-pointer transition-colors ${
                inRange ? "bg-neutral-100" : ""
              } ${isStart ? "rounded-l-full bg-neutral-100" : ""} ${
                isEnd ? "rounded-r-full bg-neutral-100" : ""
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold transition-transform ${
                  isSelected
                    ? "bg-neutral-900 text-white font-bold scale-105"
                    : "hover:border hover:border-neutral-900 text-neutral-800"
                }`}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
