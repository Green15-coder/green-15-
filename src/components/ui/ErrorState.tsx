export function ErrorState({
  title = "Something went wrong",
  description = "Please try again.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6"
    >
      <div className="font-semibold text-red-200">{title}</div>
      <p className="mt-2 text-sm text-red-100/80">{description}</p>
      {onRetry ? (
        <button
          onClick={onRetry}
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-400 active:scale-[0.98]"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
