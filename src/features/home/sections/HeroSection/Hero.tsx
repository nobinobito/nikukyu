"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./HeroSection.module.css";

const heroMainSrc = "/home/hero/hero_main.png";
const soundCount = 4;

export function Hero() {
  const [visibleSounds, setVisibleSounds] = useState<boolean[]>(() =>
    Array.from({ length: soundCount }, () => false),
  );

  useEffect(() => {
    const timeoutIds = new Map<number, number>();

    const scheduleSound = (index: number, isVisible: boolean) => {
      const delay = isVisible
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
      scheduleSound(index, false);
    }

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

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
