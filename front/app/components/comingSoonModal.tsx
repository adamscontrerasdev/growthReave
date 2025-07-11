"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PlanComingSoonModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PlanComingSoonModal({
  open,
  onClose,
}: PlanComingSoonModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-neutral-900 text-foreground w-full max-w-md rounded-xl shadow-lg p-6 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl font-semibold mb-3 text-center">
                Coming Soon
              </h2>
              <p className="text-sm text-center mb-6">
                This plan is not available yet. We&lsquo;re working hard to make
                it ready soon.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white transition cursor-pointer"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
