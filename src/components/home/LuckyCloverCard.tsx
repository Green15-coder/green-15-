 "use client";

import { motion } from "framer-motion";
import type { Play } from "@prisma/client";

type Props = {
  play: Play;
  onOpen: () => void;
};

export function LuckyCloverCard({ play, onOpen }: Props) {
  return (
    <motion.button
      onClick={onOpen}
      aria-label={`View Lucky Clover: ${play.subject}`}
      className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-left"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      <div className="text-xs uppercase tracking-[0.3em] text-emerald-300">
        Lucky Clover
      </div>
      <div className="mt-2 text-2xl font-semibold">{play.subject}</div>
      <div className="mt-1 text-sm text-slate-400">
        {play.sport} · {play.market}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        <span className="text-emerald-400">Grade {play.grade}</span>
        <span className="text-slate-300">EV {play.ev.toFixed(1)}</span>
        <span className="text-slate-300">CLV {play.clv.toFixed(1)}</span>
        <span className="text-slate-300">
          {play.odds > 0 ? `+${play.odds}` : play.odds}
        </span>
        <span className="text-slate-500">{play.book}</span>
      </div>
    </motion.button>
  );
}
