"use client";

import { useEffect, useState } from "react";

export default function SiteCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const handleMediaChange = () => {
      const enabled = mediaQuery.matches;
      setShowCustomCursor(enabled);
      if (!enabled) {
        setCursor((prev) => ({ ...prev, visible: false }));
      }
    };

    const hideCursor = () => {
      setCursor((prev) => ({ ...prev, visible: false }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!mediaQuery.matches) return;
      if (
        event.clientX < 0 ||
        event.clientY < 0 ||
        event.clientX > window.innerWidth ||
        event.clientY > window.innerHeight
      ) {
        hideCursor();
        return;
      }

      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleMouseLeave = () => {
      hideCursor();
    };

    const handleMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        hideCursor();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    handleMediaChange();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (!showCustomCursor || !cursor.visible) return null;

  return (
    <div
      className="site-cursor"
      aria-hidden="true"
      style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
    />
  );
}
