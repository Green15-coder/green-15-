"use client";

type OddsLine = { book: string; odds: number };

type Props = {
  best: OddsLine;
  alts: OddsLine[];
};

export function CompareOddsPanel({ best, alts }: Props) {
  const all = [best, ...alts].sort((a, b) => {
    const toDecimal = (o: number) =>
      o > 0 ? o / 100 + 1 : 100 / Math.abs(o) + 1;
    return toDecimal(b.odds) - toDecimal(a.odds);
  });

  return (
    <div className="rounded-xl border border-slate-800 p-4">
      <div className="mb-2 text-xs font-medium text-slate-400">Compare Odds</div>
      <div className="space-y-2">
        {all.map((line, i) => (
          <div
            key={line.book}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
              i === 0
                ? "border border-emerald-500/30 bg-emerald-500/10"
                : "bg-slate-900"
            }`}
          >
            <span className={i === 0 ? "text-emerald-300" : "text-slate-400"}>
              {line.book}
            </span>
            <span className={i === 0 ? "font-semibold text-emerald-300" : "text-slate-300"}>
              {line.odds > 0 ? `+${line.odds}` : line.odds}
            </span>
            {i === 0 && (
              <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                Best
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
