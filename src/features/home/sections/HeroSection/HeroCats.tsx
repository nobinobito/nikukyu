"use client";

import { useEffect, useState } from "react";

import styles from "./HeroSection.module.css";

const catSrc = "/home/hero/cat.svg";

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
      <div className={`${styles.catWrap} ${styles.catRightButton}`}>
        <img
          className={`${styles.cat} ${styles.catRight}`}
          src={catSrc}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
        <button
          type="button"
          className={styles.catButton}
          onClick={handleRightCatClick}
          aria-label="右の猫がにゃーと鳴く"
        />
      </div>
      <div className={`${styles.catWrap} ${styles.catLeftButton}`}>
        <img
          className={`${styles.cat} ${styles.catLeft}`}
          src={catSrc}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="sync"
        />
        <button
          type="button"
          className={styles.catButton}
          onClick={handleLeftCatClick}
          aria-label="左の猫がにゃーと鳴く"
        />
      </div>
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
