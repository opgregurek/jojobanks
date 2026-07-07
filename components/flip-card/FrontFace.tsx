"use client";

import Link from "next/link";
import { useEffect, useState, type WheelEvent } from "react";
import { HOME_PAGE_PROJECT_PREVIEWS } from "@/app/(main)/projects/project-previews";

interface FrontFaceProps {
  onFlip: () => void;
}

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

  const previewItems = isTouchViewport
    ? [...HOME_PAGE_PROJECT_PREVIEWS, ...HOME_PAGE_PROJECT_PREVIEWS]
    : HOME_PAGE_PROJECT_PREVIEWS;

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
        <img src="/images/general/background.png" alt="Digital portfolio by Jojo Banks" />
      </div>

      <div className="front-border">
        <div className="landing-info-frame">
          <p className="front-meta-text front-name">©Jojo Banks</p>
          <div className="front-contact">
            <a
              className="front-meta-text front-contact-link"
              href="https://www.linkedin.com/in/jojobanks/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className="front-meta-text front-contact-link"
              href="https://www.instagram.com/jojobanksi"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
            <p className="front-meta-text front-contact">hellojojobanks@gmail.com</p>
            <br></br>
            <br></br>
            <p className="front-meta-text front-contact">Reproduction, scraping, or use for AI training, model development, or generative outputs is not permitted.</p>
          </div>
        </div>

        <div className="landing-projects-frame">
          <div className="front-top-bar">
            <button
              className="front-arrow-btn"
              onClick={onFlip}
              aria-label="Open about page"
            >
              ↗
            </button>
          </div>

          <p className="front-intro-copy">
            <span className="gap" />Jojo Banks (Josephine Nguyen) is a multidisciplinary digital designer based in Tokyo.
            This spaces showcases her work and style spanning several years in the creative space. 
          </p>

          <div
            className="project-strip"
            aria-label="Selected work preview"
            onWheel={handleProjectStripWheel}
          >
            {previewItems.map(({ media, projectSlug }, index) => {
              const mediaElement =
                media.kind === "video" ? (
                  <video
                    src={media.src}
                    poster={media.poster}
                    className="project-strip-image"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={media.alt}
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="project-strip-image"
                  />
                );

              if (!projectSlug) {
                return (
                  <div key={`${media.src}-${index}`} className="project-strip-item" aria-hidden="true">
                    {mediaElement}
                  </div>
                );
              }

              return (
                <Link
                  key={`${media.src}-${index}`}
                  href={`/projects/${projectSlug}`}
                  className="project-strip-item"
                  aria-label={`Open ${projectSlug} project`}
                >
                  {mediaElement}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
