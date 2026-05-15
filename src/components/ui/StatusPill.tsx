export function StatusPill({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "good" | "warn" | "bad";
}) {
  const styles = {
    neutral: "bg-slate-800 text-slate-200",
    good: "bg-emerald-500/15 text-emerald-300",
    warn: "bg-amber-500/15 text-amber-300",
    bad: "bg-red-500/15 text-red-300",
  }[tone];

  return (
    <span
      role="status"
      className={`rounded-full px-2 py-1 text-xs font-medium ${styles}`}
    >
      {label}
    </span>
  );
}
