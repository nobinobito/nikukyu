"use client";

import { useEffect, useState } from "react";

import styles from "./HeroSection.module.css";

const catSrc = "/home/hero/cat.svg";

export function HeroSection() {
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
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.logo}>
          <span className={styles.logoSub}>hair salon</span>
          <span className={styles.logoMain}>にくきゅう</span>
        </h1>

        <div className={styles.visualArea}>
          <button type="button" className={`${styles.catButton} ${styles.catRightButton}`} onClick={handleRightCatClick} aria-label="右の猫がにゃーと鳴く">
            <img className={`${styles.cat} ${styles.catRight}`} src={catSrc} alt="" aria-hidden="true" />
          </button>
          <button type="button" className={`${styles.catButton} ${styles.catLeftButton}`} onClick={handleLeftCatClick} aria-label="左の猫がにゃーと鳴く">
            <img className={`${styles.cat} ${styles.catLeft}`} src={catSrc} alt="" aria-hidden="true" />
          </button>
          <span aria-hidden="true" className={`${styles.meow} ${styles.meowRight}`}>にゃ〜</span>
          <span aria-hidden="true" className={`${styles.meow} ${styles.meowLeft}`}>にゃ〜</span>
          {showRightMeow ? (
            <span key={rightMeowSeed} aria-hidden="true" className={`${styles.meow} ${styles.meowRight} ${styles.meowInteractive}`}>にゃ〜</span>
          ) : null}
          {showLeftMeow ? (
            <span key={leftMeowSeed} aria-hidden="true" className={`${styles.meow} ${styles.meowLeft} ${styles.meowInteractive}`}>にゃ〜</span>
          ) : null}
        </div>

        <p className={styles.copy}>
          <span>1席だけの</span>
          <span>貸し切りヘアサロン</span>
          <span>にんげんのびようしつです</span>
        </p>

        <div className={styles.scrollGuide} aria-hidden="true">
          <span className={styles.scrollText}>Scroll</span>
          <span className={styles.scrollLine}/>
        </div>
      </div>
    </section>
  );
}
