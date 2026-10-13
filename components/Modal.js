"use client";

import { useEffect, useRef } from "react";

// A modal built on the browser's native <dialog> element. The browser provides: Escape to
// close, keyboard focus kept inside the dialog, the page behind it made inert, and focus
// handed back to the button that opened it. We add: click-the-backdrop-to-close, and we
// only render the children while open, so every opening starts with a fresh, empty form.
export default function Modal({ open, onClose, titleId, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        // The dialog has no padding of its own, so a click that lands on the dialog
        // element itself is a click on the dimmed backdrop.
        if (e.target === ref.current) onClose();
      }}
    >
      {open ? children : null}
    </dialog>
  );
}
