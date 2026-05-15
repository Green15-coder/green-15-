"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FocusTrap } from "@/components/ui/FocusTrap";
import { useKeyboardEscape } from "@/hooks/useKeyboardEscape";
import { saveView, removeView } from "@/actions/saved-views";

type SavedView = { id: string; name: string; filters: object };
type Props = { open: boolean; onClose: () => void; views?: SavedView[] };

export function SavedViewsDrawer({ open, onClose, views = [] }: Props) {
  const [list, setList] = useState<SavedView[]>(views);
  const [name, setName] = useState("");

  useKeyboardEscape(onClose, open);

  const handleSave = async () => {
    if (!name.trim()) return;
    const view = await saveView(name, {});
    setList((v) => [...v, view as SavedView]);
    setName("");
  };

  const handleDelete = async (id: string) => {
    await removeView(id);
    setList((v) => v.filter((x) => x.id !== id));
  };

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
              aria-label="Saved Views"
              className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-slate-800 bg-slate-950 p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Saved Views</div>
                <button onClick={onClose} className="text-sm text-slate-400">Close</button>
              </div>

              <div className="mt-5 flex gap-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="View name"
                  className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
                />
                <button
                  onClick={handleSave}
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-black"
                >
                  Save
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {list.length === 0 ? (
                  <p className="text-sm text-slate-500">No saved views yet.</p>
                ) : (
                  list.map((v) => (
                    <div
                      key={v.id}
                      className="flex items-center justify-between rounded-xl border border-slate-800 p-3"
                    >
                      <span className="text-sm">{v.name}</span>
                      <button
                        onClick={() => handleDelete(v.id)}
                        className="text-xs text-slate-500 hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </motion.aside>
          </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
}
