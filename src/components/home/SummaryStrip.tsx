import type { Play } from "@prisma/client";

export function SummaryStrip({ plays }: { plays: Play[] }) {
  const avgEV = plays.length
    ? (plays.reduce((a, b) => a + b.ev, 0) / plays.length).toFixed(1)
    : "—";
  const avgCLV = plays.length
    ? (plays.reduce((a, b) => a + b.clv, 0) / plays.length).toFixed(1)
    : "—";
  const aPlus = plays.filter((p) => p.grade === "A+").length;

  const stats = [
    { label: "Plays", value: String(plays.length) },
    { label: "Avg EV", value: String(avgEV) },
    { label: "Avg CLV", value: String(avgCLV) },
    { label: "A+ Plays", value: String(aPlus) },
  ];

  return (
    <section
      aria-label="Board summary"
      className="grid grid-cols-2 gap-3 md:grid-cols-4"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
        >
          <div className="text-xs text-slate-500">{s.label}</div>
          <div className="mt-1 text-xl font-semibold">{s.value}</div>
        </div>
      ))}
    </section>
  );
}
