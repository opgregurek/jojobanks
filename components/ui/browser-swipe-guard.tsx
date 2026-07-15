"use client";

import { useEffect } from "react";

export default function BrowserSwipeGuard() {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || !event.cancelable) {
        return;
      }

      const horizontalIntent = Math.abs(event.deltaX) > 0 || (event.shiftKey && Math.abs(event.deltaY) > 0);

      if (!horizontalIntent) {
        return;
      }

      event.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, []);

  return null;
}