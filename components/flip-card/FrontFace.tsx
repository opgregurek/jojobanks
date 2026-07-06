"use client";

import { useEffect, useState, type WheelEvent } from "react";

interface FrontFaceProps {
  onFlip: () => void;
}

const PROJECT_MEDIA = [
  { poster: "/images/jojo-banks-pic.jpg" },
  { src: "/images/jojo-banks-moribana.mp4", poster: "/images/jojo-banks-pic.jpg" },
  { poster: "/images/jojo-banks-objects.jpg" },
  { src: "/images/jojo-banks-apas-port-harvest-hall-reel.mp4", poster: "/images/jojo-banks-objects.jpg" },
];

export default function FrontFace({ onFlip }: FrontFaceProps) {
  const [isTouchViewport, setIsTouchViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const handleMediaChange = () => setIsTouchViewport(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const mediaItems = isTouchViewport ? [...PROJECT_MEDIA, ...PROJECT_MEDIA] : PROJECT_MEDIA;

  const handleProjectStripWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (isTouchViewport) return;
    if (event.deltaY === 0) return;

    event.currentTarget.scrollLeft += event.deltaY;
    event.preventDefault();
  };

  return (
    <div className="face-inner">
      {/* Background */}
      <div className="face-bg">
        <img src="/images/background.png" alt="Digital portfolio by Jojo Banks" />
      </div>

      <div className="front-border">
        <div className="landing-info-frame">
          <p className="front-meta-text front-name white">JOJO BANKS</p>
          <div className="front-contact">
            <a
              className="front-meta-text white front-contact-link"
              href="https://www.linkedin.com/in/jojobanks/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className="front-meta-text white front-contact-link"
              href="https://www.instagram.com/jojobanksi"
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

          <div
            className="project-strip"
            aria-label="Selected work preview"
            onWheel={handleProjectStripWheel}
          >
            {mediaItems.map((item, index) => (
              item.src ? (
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
              ) : (
                <img
                  key={`${item.poster}-${index}`}
                  src={item.poster}
                  alt={`Portfolio placeholder ${index + 1}`}
                  className="project-strip-image"
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
