"use client";

import { useEffect, useState } from "react";

interface FrontFaceProps {
  onFlip: () => void;
}

const PROJECT_MEDIA = [
  { src: "/images/project-1.mp4", poster: "/images/img1.png" },
  { src: "/images/project-2.mp4", poster: "/images/img2.png" },
  { src: "/images/project-3.mp4", poster: "/images/img3.png" },
  { src: "/images/project-4.mp4", poster: "/images/img4.png" },
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

  const mediaItems = isTouchViewport ? [...PROJECT_MEDIA, ...PROJECT_MEDIA] : PROJECT_MEDIA;

  return (
    <div className="face-inner">
      {/* Background */}
      <div className="face-bg">
        <img src="/images/background.png" alt="Digital portfolio by Jojo Banks" />
      </div>

      {/* ── Page border wrapper ── */}
      <div className="front-border">
        <div className="landing-info-frame">
          <p className="front-meta-text front-name white">JOJO BANKS</p>
          <div className="front-contact">
            <a
              className="front-meta-text white front-contact-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className="front-meta-text white front-contact-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
            <br></br>
            <p className="front-meta-text front-contact white">hellojojobanks@gmail.com</p>
          </div>
        </div>

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
            <span className="gap" />Jojo Banks (Josephine Nguyen) is a multidisciplinary digital designer based in Tokyo.
            This spaces showcases her work and style spanning several years in the creative space.
          </p>

          <div className="project-strip" aria-label="Selected work preview">
            {mediaItems.map((item, index) => (
              <video
                key={`${item.src}-${index}`}
                src={item.src}
                poster={item.poster}
                className="project-strip-image"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`Portfolio placeholder ${index + 1}`}
              />
            ))}
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
