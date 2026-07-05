"use client";

import { useEffect, useState } from "react";

interface FrontFaceProps {
  onFlip: () => void;
}

const PROJECT_IMAGES = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
];

export default function FrontFace({ onFlip }: FrontFaceProps) {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [isTouchViewport, setIsTouchViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const handleMediaChange = () => setIsTouchViewport(mediaQuery.matches);
    handleMediaChange();

    const handleMouseMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleMouseLeave = () => {
      setCursor((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const images = isTouchViewport ? [...PROJECT_IMAGES, ...PROJECT_IMAGES] : PROJECT_IMAGES;

  return (
    <div className="face-inner">
      <div className="face-bg">
        <img src="/images/jojo-banks-portfolio.png" alt="Digital portfolio by Jojo Banks" />
      </div>

      <div className="front-border">
        <div className="landing-projects-frame">
          <div className="front-top-bar">
            <button
              className="front-arrow-btn white"
              onClick={onFlip}
              aria-label="Open about page"
            >
              ↗
            </button>
          </div>

          <p className="front-intro-copy white">
            Jojo Banks (Josephine Nguyen) is a multidisciplinary digital designer based in Tokyo.
            This is a showcase of her evolving body of work spanning several years in the creative
            space.
          </p>

          <div className="project-strip" aria-label="Selected work preview">
            {images.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt={`Portfolio placeholder ${index + 1}`}
                className="project-strip-image"
              />
            ))}
          </div>
        </div>

        <div className="landing-info-frame">
          <p className="front-meta-text white">JOJO BANKS</p>
          <div className="front-contact">
            <p className="front-meta-text white">CONTACT</p>
            <p className="front-meta-text white">hellojojobanks@gmail.com</p>
          </div>
        </div>
      </div>

      {!isTouchViewport && cursor.visible && (
        <div
          className="cursor-circle"
          aria-hidden="true"
          style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
        />
      )}
    </div>
  );
}
