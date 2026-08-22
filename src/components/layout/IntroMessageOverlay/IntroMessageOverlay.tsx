"use client";

import { useEffect, useState } from "react";
import { useHomePageContext } from "@/features/home/HomePageProvider";
import styles from "./IntroMessageOverlay.module.css";

const DISPLAY_DURATION_MS = 3000;
const FADE_DURATION_MS = 700;

const introLines = [
  "１席だけの",
  "貸し切りヘアサロン",
  "にんげんのびようしつです",
] as const;

export function IntroMessageOverlay() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");
  const { completeIntro } = useHomePageContext();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = phase === "hidden" ? previousOverflow : "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  useEffect(() => {
    const fadeTimeout = window.setTimeout(() => {
      setPhase("fading");
    }, DISPLAY_DURATION_MS);

    const hideTimeout = window.setTimeout(() => {
      completeIntro();
      setPhase("hidden");
    }, DISPLAY_DURATION_MS + FADE_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimeout);
      window.clearTimeout(hideTimeout);
    };
  }, [completeIntro]);

  if (phase === "hidden") return null;

  return (
    <div className={`${styles.overlay} ${phase === "fading" ? styles.overlayFading : ""}`}>
      <div className={styles.inner}>
        {introLines.map((line, index) => (
          <p
            key={line}
            className={styles.line}
            style={{ animationDelay: `${index * 420}ms` }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
