"use client";

import { useEffect } from "react";

export function useKeyboardEscape(onEscape: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onEscape, enabled]);
}
