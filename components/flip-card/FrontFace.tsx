"use client";

import Link from "next/link";

interface FrontFaceProps {
  onFlip: () => void;
}

const projectTiles = [
  {
    title: "Project 01",
    label: "Placeholder",
    imageSrc: "/images/img1.png",
  },
  {
    title: "Project 02",
    label: "Placeholder",
    imageSrc: "/images/img2.png",
  },
  {
    title: "Project 03",
    label: "Placeholder",
    imageSrc: "/images/img3.png",
  },
  {
    title: "Project 04",
    label: "Placeholder",
    imageSrc: "/images/img4.png",
  },
];

export default function FrontFace({ onFlip }: FrontFaceProps) {
  return (
    <div className="face-inner face-inner--front">
      <div className="front-shell">
        <div className="front-frame front-frame--info">
          <p className="front-wordmark">JOJO BANKS</p>

          <div className="front-contact">
            <p className="mono-body">HELLOJOJOBANKS@GMAIL.COM</p>
            <p className="mono-body">INSTAGRAM.COM/JOJOBANKSI</p>
          </div>
        </div>

        <div className="front-frame front-frame--content">
          <div className="front-content-top">
            <p className="mono-body front-intro">
              A CURATED SELECTION OF BRAND, DIGITAL, AND VISUAL WORK
              SHAPED THROUGH STORYTELLING, IMAGE-MAKING, AND CREATIVE
              DIRECTION.
            </p>

            <button
              type="button"
              className="mono-btn front-arrow"
              aria-label="Flip to about page"
              onClick={onFlip}
            >
              ↗
            </button>
          </div>

          <span className="front-center-dot" aria-hidden="true" />

          <div className="front-projects">
            {projectTiles.map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="front-project-tile"
              >
                <div className="front-project-image-frame">
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} placeholder thumbnail`}
                    className="front-project-image"
                  />
                </div>
                <div className="front-project-meta mono-body">
                  <span>{project.title}</span>
                  <span>{project.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}