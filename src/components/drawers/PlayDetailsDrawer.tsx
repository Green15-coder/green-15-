"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Play } from "@prisma/client";
import { FocusTrap } from "@/components/ui/FocusTrap";
import { useKeyboardEscape } from "@/hooks/useKeyboardEscape";
import { WhyRanked } from "@/components/help/WhyRanked";
import { SaveTrackerButton } from "@/components/ui/SaveTrackerButton";
import { CompareOddsPanel } from "./CompareOddsPanel";

type Props = {
  play: Play | null;
  open: boolean;
  onClose: () => void;
};

export function PlayDetailsDrawer({ play, open, onClose }: Props) {
  useKeyboardEscape(onClose, open);

  return (
    <AnimatePresence>
      {open && play && (
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
              aria-label={`Play details: ${play.subject}`}
              className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{play.subject}</div>
                <button
                  onClick={onClose}
                  aria-label="Close play details"
                  className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-2 text-sm text-slate-500">
                {play.sport} · {play.market}
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <div className="text-xs text-slate-500">Grade</div>
                      <div className="font-semibold text-emerald-300">{play.grade}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">EV</div>
                      <div className="font-semibold">{play.ev.toFixed(1)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">CLV</div>
                      <div className="font-semibold">{play.clv.toFixed(1)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Rank Score</div>
                      <div className="font-semibold">{play.rankScore.toFixed(1)}</div>
                    </div>
                  </div>
                </div>

                <CompareOddsPanel
                  best={{ book: play.book, odds: play.odds }}
                  alts={Array.isArray(play.altLines)
                    ? (play.altLines as { book: string; odds: number }[])
                    : []}
                />

                <WhyRanked reason={play.whyRanked} />

                <div className="flex gap-3 pt-2">
                  <SaveTrackerButton playId={play.id} />
                  <button className="rounded-md border border-slate-700 px-4 py-2 text-sm transition hover:border-slate-500">
                    Compare Odds
                  </button>
                </div>
              </div>
            </motion.aside>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
}
