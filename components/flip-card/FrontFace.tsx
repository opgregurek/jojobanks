"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { HOME_PAGE_PROJECT_PREVIEWS } from "@/app/(main)/projects/project-previews";

interface FrontFaceProps {
  onFlip: () => void;
}

// Repeat the previews so the carousel track always overflows the viewport. With only
// four base items they fit on any wide screen, leaving nothing to scroll — and Embla
// only loops when the slides exceed the viewport width. Tripling guarantees overflow,
// so the strip is always draggable.
const STRIP_ITEMS = [
  ...HOME_PAGE_PROJECT_PREVIEWS,
  ...HOME_PAGE_PROJECT_PREVIEWS,
];

export default function FrontFace({ onFlip }: FrontFaceProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: false,
  });

  return (
    <div className="face-inner">
      {/* Background */}
      <div className="face-bg">
        <Image src="/images/general/background.png" alt="Digital portfolio by Jojo Banks" fill priority sizes="100vw" />
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
            This is a showcase of her work and style spanning several years in the creative space.
          </p>

          <div className="project-strip" ref={emblaRef} aria-label="Selected work preview">
            <div className="project-strip-track">
              {STRIP_ITEMS.map(({ media, projectSlug }, index) => {
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
                    <Image
                      src={media.src}
                      alt={media.alt}
                      className="project-strip-image"
                      width={222}
                      height={277}
                      sizes="(max-width: 768px) min(60vw, 240px), 222px"
                      draggable={false}
                      priority={index < HOME_PAGE_PROJECT_PREVIEWS.length}
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
                    draggable={false}
                  >
                    {mediaElement}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
