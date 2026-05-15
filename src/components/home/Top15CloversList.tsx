"use client";

import { motion } from "framer-motion";
import type { Play } from "@prisma/client";

type Props = {
  plays: Play[];
  onOpenPlay: (play: Play) => void;
};

export function Top15CloversList({ plays, onOpenPlay }: Props) {
  return (
    <section aria-label="Top 15 Clovers">
      <div className="mb-3 text-sm font-medium text-slate-200">
        Top 15 Clovers
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {plays.map((play, i) => (
          <motion.button
            key={play.id}
            onClick={() => onOpenPlay(play)}
            aria-label={`View play: ${play.subject}`}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-left"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.987 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">#{i + 1}</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-300">
                {play.grade}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium leading-snug">
              {play.subject}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {play.sport} · {play.market}
            </div>
            <div className="mt-2 flex gap-2 text-xs text-slate-400">
              <span>EV {play.ev.toFixed(1)}</span>
              <span>CLV {play.clv.toFixed(1)}</span>
              <span>{play.odds > 0 ? `+${play.odds}` : play.odds}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
