export function LastUpdated({ value }: { value: string }) {
  return (
    <span
      className="text-xs text-slate-500"
      aria-label={`Board last updated ${value}`}
    >
      Updated {value}
    </span>
  );
}
