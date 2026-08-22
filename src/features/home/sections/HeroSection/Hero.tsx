"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useHomePageContext } from "@/features/home/HomePageProvider";
import styles from "./HeroSection.module.css";

const heroMainSrc = "/home/hero/hero_main.png";
const soundCount = 4;

export function Hero() {
  const { isIntroComplete } = useHomePageContext();
  const [visibleSounds, setVisibleSounds] = useState<boolean[]>(() =>
    Array.from({ length: soundCount }, () => false),
  );

  useEffect(() => {
    if (!isIntroComplete) {
      return;
    }

    const timeoutIds = new Map<number, number>();
    const firstSoundIndex = Math.floor(Math.random() * soundCount);

    const scheduleSound = (index: number, isVisible: boolean, skipDelay = false) => {
      const delay = skipDelay
        ? 0
        : isVisible
        ? 1400 + Math.random() * 1_400
        : 900 + Math.random() * 2_000;

      timeoutIds.set(
        index,
        window.setTimeout(() => {
          const nextIsVisible = !isVisible;

          setVisibleSounds((current) =>
            current.map((visible, soundIndex) =>
              soundIndex === index ? nextIsVisible : visible,
            ),
          );
          scheduleSound(index, nextIsVisible);
        }, delay),
      );
    };

    for (let index = 0; index < soundCount; index += 1) {
      scheduleSound(index, false, index === firstSoundIndex);
    }

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [isIntroComplete]);

  return (
    <div className={styles.visualArea}>
      <Image
        className={styles.illustration}
        src={heroMainSrc}
        alt="犬と猫のいる美容室のイラスト"
        width="863"
        height="1424"
        sizes="200px"
        preload
        fetchPriority="high"
        decoding="sync"
      />

      <div className={styles.scissorSounds} aria-hidden="true">
        <span
          className={`${styles.scissorSound} ${styles.soundLeftLower}`}
          data-visible={visibleSounds[0]}
        >
          チョキ
        </span>
        <span
          className={`${styles.scissorSound} ${styles.soundLeftUpper}`}
          data-visible={visibleSounds[1]}
        >
          チョキ
        </span>
        <span
          className={`${styles.scissorSound} ${styles.soundRightLower}`}
          data-visible={visibleSounds[2]}
        >
          チョキ
        </span>
        <span
          className={`${styles.scissorSound} ${styles.soundRightUpper}`}
          data-visible={visibleSounds[3]}
        >
          チョキ
        </span>
      </div>
    </div>
  );
}
