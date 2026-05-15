"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FocusTrap } from "@/components/ui/FocusTrap";
import { useKeyboardEscape } from "@/hooks/useKeyboardEscape";

type Props = { open: boolean; onClose: () => void };

export function SettingsDrawer({ open, onClose }: Props) {
  useKeyboardEscape(onClose, open);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <FocusTrap active={open}>
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Settings"
              className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Settings</div>
                <button onClick={onClose} className="text-sm text-slate-400">Close</button>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Settings will appear here once auth is connected.
              </p>
            </motion.aside>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
}
