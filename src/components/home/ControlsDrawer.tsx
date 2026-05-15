"use client";

type Props = {
  onOpenFilters: () => void;
  onOpenSettings: () => void;
  onOpenSavedViews: () => void;
};

export function ControlsDrawer({
  onOpenFilters,
  onOpenSettings,
  onOpenSavedViews,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onOpenFilters}
        className="rounded-xl border border-slate-700 px-4 py-2 text-sm transition hover:border-slate-500"
      >
        Filters
      </button>
      <button
        onClick={onOpenSavedViews}
        className="rounded-xl border border-slate-700 px-4 py-2 text-sm transition hover:border-slate-500"
      >
        Saved Views
      </button>
      <button
        onClick={onOpenSettings}
        className="rounded-xl border border-slate-700 px-4 py-2 text-sm transition hover:border-slate-500"
      >
        Settings
      </button>
    </div>
  );
}
