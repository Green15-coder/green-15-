import { SkipToContent } from "./SkipToContent";
import { TopNav } from "./TopNav";
import { SidebarNav } from "./SidebarNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SkipToContent />
      <TopNav />
      <div className="mx-auto flex max-w-[1600px]">
        <aside
          aria-label="Sidebar navigation"
          className="hidden w-72 shrink-0 border-r border-slate-800 lg:block"
        >
          <SidebarNav />
        </aside>
        <main id="main-content" className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
