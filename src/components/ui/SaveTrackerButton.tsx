"use client";

import { useState } from "react";

export function SaveTrackerButton({ playId }: { playId: string }) {
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setSaved(true);
    setLoading(false);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <button
      onClick={handleSave}
      disabled={loading || saved}
      aria-label={saved ? "Added to tracker" : "Add to tracker"}
      className={`rounded-md px-4 py-2 text-sm font-medium transition active:scale-[0.98] ${
        saved
          ? "bg-emerald-700 text-white"
          : "bg-emerald-500 text-black hover:bg-emerald-400"
      }`}
    >
      {loading ? "Saving…" : saved ? "Saved ✓" : "Add to Tracker"}
    </button>
  );
}
