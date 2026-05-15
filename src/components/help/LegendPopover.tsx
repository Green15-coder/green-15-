"use client";

import { useState } from "react";

const terms = [
  { label: "EV", definition: "Expected Value. How much value the line offers relative to true probability." },
  { label: "CLV", definition: "Closing Line Value. How much the line moved in your favor by game time." },
  { label: "Grade", definition: "Overall play quality from A+ to C based on EV, CLV, and model confidence." },
  { label: "Rank Score", definition: "Composite score used to order the Top 15 clovers on the board." },
];

export function LegendPopover() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-400 transition hover:text-white"
      >
        ? Legend
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Stats legend"
          className="absolute right-0 top-8 z-30 w-72 rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-2xl"
        >
          <div className="mb-2 text-sm font-semibold">Stats explained</div>
          <dl className="space-y-2">
            {terms.map((t) => (
              <div key={t.label}>
                <dt className="text-xs font-medium text-emerald-300">{t.label}</dt>
                <dd className="text-xs text-slate-400">{t.definition}</dd>
              </div>
            ))}
          </dl>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-xs text-slate-500 hover:text-white"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
