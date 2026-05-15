"use client";

import { useState, useTransition } from "react";
import type { Play } from "@prisma/client";
import { LuckyCloverCard } from "./LuckyCloverCard";
import { Top15CloversList } from "./Top15CloversList";
import { SummaryStrip } from "./SummaryStrip";
import { ControlsDrawer } from "./ControlsDrawer";
import { PlayDetailsDrawer } from "@/components/drawers/PlayDetailsDrawer";
import { SettingsDrawer } from "@/components/drawers/SettingsDrawer";
import { FiltersDrawer } from "@/components/drawers/FiltersDrawer";
import { SavedViewsDrawer } from "@/components/drawers/SavedViewsDrawer";
import { EmptyState } from "@/components/ui/EmptyState";

type Filters = { sport: string; market: string; grade: string };

type Props = {
  luckyClover: Play | null;
  top15: Play[];
};

export function HomeClient({ luckyClover, top15: initialTop15 }: Props) {
  const [selectedPlay, setSelectedPlay] = useState<Play | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [savedViewsOpen, setSavedViewsOpen] = useState(false);
  const [top15, setTop15] = useState<Play[]>(initialTop15);
  const [, startTransition] = useTransition();

  const handleApplyFilters = (filters: Filters) => {
    startTransition(async () => {
      const params = new URLSearchParams();
      if (filters.sport) params.set("sport", filters.sport);
      if (filters.market) params.set("market", filters.market);
      if (filters.grade) params.set("grade", filters.grade);
      const res = await fetch(`/api/plays?${params.toString()}`);
      const data = await res.json();
      setTop15(data);
    });
  };

  return (
    <main id="main-content" className="space-y-4">
      {luckyClover ? (
        <LuckyCloverCard
          play={luckyClover}
          onOpen={() => setSelectedPlay(luckyClover)}
        />
      ) : (
        <EmptyState
          title="No clovers yet"
          description="No active plays are ranked right now. Check back soon."
        />
      )}

      {top15.length > 0 ? (
        <Top15CloversList
          plays={top15}
          onOpenPlay={(play) => setSelectedPlay(play)}
        />
      ) : (
        <EmptyState
          title="No plays match your filters"
          description="Try adjusting or resetting your filters."
        />
      )}

      <SummaryStrip plays={top15} />

      <ControlsDrawer
        onOpenFilters={() => setFiltersOpen(true)}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenSavedViews={() => setSavedViewsOpen(true)}
      />

      <PlayDetailsDrawer
        play={selectedPlay}
        open={!!selectedPlay}
        onClose={() => setSelectedPlay(null)}
      />
      <SettingsDrawer open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <FiltersDrawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        onApply={handleApplyFilters}
      />
      <SavedViewsDrawer open={savedViewsOpen} onClose={() => setSavedViewsOpen(false)} />
    </main>
  );
}
