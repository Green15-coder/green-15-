export function WhyRanked({ reason }: { reason?: string | null }) {
  if (!reason) return null;
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-xs text-slate-400">
      <span className="font-medium text-slate-300">Why ranked: </span>
      {reason}
    </div>
  );
}
