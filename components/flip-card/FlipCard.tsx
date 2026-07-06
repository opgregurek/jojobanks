"use client";

import { useRef, useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";
import "./flip-card.css";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const backFaceRef = useRef<HTMLDivElement>(null);

  const resetScrollPosition = () => {
    sceneRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    backFaceRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const handleFlip = (nextIsFlipped: boolean) => {
    resetScrollPosition();
    setIsFlipped(nextIsFlipped);
  };

  return (
    <div ref={sceneRef} className={`flip-scene ${isFlipped ? "is-back" : ""}`}>
      <div className={`flip-card ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flip-face flip-face--front">
          <FrontFace onFlip={() => handleFlip(true)} />
        </div>
        <div ref={backFaceRef} className="flip-face flip-face--back">
          <BackFace onFlip={() => handleFlip(false)} />
        </div>
      </div>
    </div>
  );
}
