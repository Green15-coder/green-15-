"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FocusTrap } from "@/components/ui/FocusTrap";
import { useKeyboardEscape } from "@/hooks/useKeyboardEscape";

const sports = ["All", "NBA", "NFL", "MLB", "NHL", "Soccer", "NCAAB"];
const markets = ["All", "Player Props", "Team Props", "Moneyline", "Totals", "Spreads"];
const grades = ["All", "A+", "A", "B+", "B"];

type Filters = { sport: string; market: string; grade: string };
type Props = { open: boolean; onClose: () => void; onApply: (f: Filters) => void };

export function FiltersDrawer({ open, onClose, onApply }: Props) {
  const [sport, setSport] = useState("All");
  const [market, setMarket] = useState("All");
  const [grade, setGrade] = useState("All");

  useKeyboardEscape(onClose, open);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <FocusTrap active={open}>
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Filters"
              className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Filters</div>
                <button onClick={onClose} className="text-sm text-slate-400">Close</button>
              </div>

              <div className="mt-5 space-y-5">
                {[
                  { label: "Sport", items: sports, value: sport, set: setSport },
                  { label: "Market", items: markets, value: market, set: setMarket },
                  { label: "Grade", items: grades, value: grade, set: setGrade },
                ].map(({ label, items, value, set }) => (
                  <div key={label}>
                    <div className="mb-2 text-xs font-medium text-slate-400">{label}</div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <button
                          key={item}
                          onClick={() => set(item)}
                          className={`rounded-full px-3 py-1 text-xs ${
                            value === item
                              ? "bg-emerald-500 text-black"
                              : "border border-slate-700 text-slate-300"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => { setSport("All"); setMarket("All"); setGrade("All"); onApply({ sport: "", market: "", grade: "" }); }}
                  className="flex-1 rounded-xl border border-slate-700 px-4 py-3 text-sm"
                >
                  Reset
                </button>
                <button
                  onClick={() => { onApply({ sport: sport === "All" ? "" : sport, market: market === "All" ? "" : market, grade: grade === "All" ? "" : grade }); onClose(); }}
                  className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-medium text-black"
                >
                  Apply
                </button>
              </div>
            </motion.aside>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
}
