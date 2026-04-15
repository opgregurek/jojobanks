"use client";

interface FrontFaceProps {
  onFlip: () => void;
}

export default function FrontFace({ onFlip }: FrontFaceProps) {
  return (
    <div className="face-inner">

      {/* Background */}
      <div className="face-bg">
        <img src="/images/front-landing.png" alt="" />
      </div>

      {/* ── Page border wrapper ── */}
      <div className="front-border">

        {/* Top Left — Bio */}
        <div className="intro">
          <p className="mono-body white">
            <span className="gap" />
            A showcase of the evolving body of work of 
            <span className="gap" />Jojo Banks
            <span className="gap" />Spanning several years
            <span className="gap" />
            in the creative space.
            Take a look at her{" "}
            <span className="dot" />
            <span className="work-link">WORK</span>
            {" "} <span className="gap" />for insights into her craft and style.
          </p>
        </div>

        {/* Top Center — Contact */}
        <div className="front-contact">
          <p className="mono-body white">Contact details</p>
          <p className="mono-body white"><span className="gap" />hellojojobanks@gmail.com</p>
        </div>

        {/* Top Right — Read More (desktop) */}
        <div className="front-top-bar">
          <button className="mono-btn white" onClick={onFlip}>
            READ MORE
          </button>
        </div>

        {/* Bottom Right — Read More (mobile only, pinned above border) */}
        <button className="mono-btn read-more-mobile" onClick={onFlip}>
          READ MORE
        </button>

      </div>
    </div>
  );
}