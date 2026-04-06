"use client";

import { useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";
import "./flip-card.css";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-scene">
      <div className={`flip-card ${isFlipped ? "is-flipped" : ""}`}>
        <div className="flip-face flip-face--front">
          <FrontFace onFlip={() => setIsFlipped(true)} />
        </div>
        <div className="flip-face flip-face--back">
          <BackFace onFlip={() => setIsFlipped(false)} />
        </div>
      </div>
    </div>
  );
}
