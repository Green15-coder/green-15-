export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-lg bg-slate-800/70 motion-safe:animate-pulse motion-reduce:animate-none ${className}`}
    />
  );
}
