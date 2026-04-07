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

      {/* Top Right */}
      <div className="front-top-bar">
        <button className="mono-btn" onClick={onFlip}>
          READ MORE
        </button>
      </div>

      {/* Top Left Intro */}
      <div className="intro">
        <p className="body indent">
          Curation &amp; design is a path to self-discovery.
        </p>
        <p className="body">
          <br />
          A showcase of the evolving body of work of Jojo Banks,
          spanning over several years in design. Explore for insights into
          her creative journey.
        </p>
        <br />
        <p className="body">
          <br />
          Coming soon
        </p>
      </div>

      {/* Bottom Logo */}
      <div className="logo">
        <img src="/images/logo.png" alt="Jojobanks" />
      </div>
    </div>
  );
}