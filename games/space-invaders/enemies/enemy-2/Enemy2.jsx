// src/Enemy.jsx
import React from "react";
import { useState, useEffect } from "react";
import "../../../../style.css";
import "../../spaceInvader.css";
import "../enemy-2/enemy-2.css";
import Enemy from "../Enemy";

export default function Enemy2() {
  const [frame, setFrame] = useState(1); // tracks which blink class to show

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev === 1 ? 2 : 1)); // toggle between 1 and 2
    }, 500);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`ennemy ennemy-2 blink-${frame}`}>
      <Enemy/>
    </div>
  );
}
