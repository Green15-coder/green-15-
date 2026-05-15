import { LegendPopover } from "@/components/help/LegendPopover";
import { LastUpdated } from "@/components/ui/LastUpdated";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-3 px-4 lg:px-6">
        <div className="font-semibold text-emerald-400 text-lg">🍀 Green 15</div>
        <div className="flex-1" />
        <LastUpdated value="just now" />
        <LegendPopover />
        <button className="rounded-md border border-slate-700 px-3 py-1.5 text-sm">
          Alerts
        </button>
        <button className="rounded-md border border-slate-700 px-3 py-1.5 text-sm">
          Profile
        </button>
      </div>
    </header>
  );
}
