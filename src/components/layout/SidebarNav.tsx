"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Home", href: "/" },
  { label: "Tracker", href: "/tracker" },
  { label: "Backtests", href: "/backtests" },
  { label: "Settings", href: "/settings" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="space-y-1 p-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`block rounded-md px-3 py-2 text-sm transition ${
            pathname === item.href
              ? "bg-emerald-500/10 text-emerald-300"
              : "text-slate-300 hover:bg-slate-900 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
