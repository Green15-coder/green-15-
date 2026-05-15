export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center"
    >
      <div className="text-4xl">🍀</div>
      <div className="mt-3 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
