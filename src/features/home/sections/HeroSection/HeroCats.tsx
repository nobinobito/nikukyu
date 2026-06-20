"use client";

import { useEffect, useState } from "react";

import styles from "./HeroSection.module.css";

const catSrc = "/home/hero/cat.webp";

export function HeroCats() {
  const [showRightMeow, setShowRightMeow] = useState(false);
  const [showLeftMeow, setShowLeftMeow] = useState(false);
  const [rightMeowSeed, setRightMeowSeed] = useState(0);
  const [leftMeowSeed, setLeftMeowSeed] = useState(0);

  useEffect(() => {
    if (!showRightMeow) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setShowRightMeow(false);
    }, 1100);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [showRightMeow, rightMeowSeed]);

  useEffect(() => {
    if (!showLeftMeow) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setShowLeftMeow(false);
    }, 1100);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [showLeftMeow, leftMeowSeed]);

  const handleRightCatClick = () => {
    setShowRightMeow(false);
    setRightMeowSeed((currentSeed) => currentSeed + 1);
    window.setTimeout(() => {
      setShowRightMeow(true);
    }, 0);
  };

  const handleLeftCatClick = () => {
    setShowLeftMeow(false);
    setLeftMeowSeed((currentSeed) => currentSeed + 1);
    window.setTimeout(() => {
      setShowLeftMeow(true);
    }, 0);
  };

  return (
    <div className={styles.visualArea}>
      <button
        type="button"
        className={`${styles.catButton} ${styles.catRightButton}`}
        onClick={handleRightCatClick}
        aria-label="右の猫がにゃーと鳴く"
      >
        <img
          className={`${styles.cat} ${styles.catRight}`}
          src={catSrc}
          alt=""
          aria-hidden="true"
          width="146"
          height="176"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </button>
      <button
        type="button"
        className={`${styles.catButton} ${styles.catLeftButton}`}
        onClick={handleLeftCatClick}
        aria-label="左の猫がにゃーと鳴く"
      >
        <img
          className={`${styles.cat} ${styles.catLeft}`}
          src={catSrc}
          alt=""
          aria-hidden="true"
          width="146"
          height="176"
          loading="eager"
          decoding="sync"
        />
      </button>
      <span aria-hidden="true" className={`${styles.meow} ${styles.meowRight}`}>
        にゃ〜
      </span>
      <span aria-hidden="true" className={`${styles.meow} ${styles.meowLeft}`}>
        にゃ〜
      </span>
      {showRightMeow ? (
        <span
          key={`right-${rightMeowSeed}`}
          aria-hidden="true"
          className={`${styles.meow} ${styles.meowRight} ${styles.meowInteractive}`}
        >
          にゃ〜
        </span>
      ) : null}
      {showLeftMeow ? (
        <span
          key={`left-${leftMeowSeed}`}
          aria-hidden="true"
          className={`${styles.meow} ${styles.meowLeft} ${styles.meowInteractive}`}
        >
          にゃ〜
        </span>
      ) : null}
    </div>
  );
}
