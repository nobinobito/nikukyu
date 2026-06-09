"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./AboutSection.module.css";

const aboutBackgroundSrc = "/home/about/about-bg.jpg";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setIsVisible(true);
          observer.disconnect();
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.24,
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.background} aria-hidden="true">
        {/* Temporary Figma asset URL until a local file is added under public/home/about/. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.backgroundImage} src={aboutBackgroundSrc} alt="" />
        <div className={styles.overlay}/>
      </div>

      <div className={styles.content}>
        <h2 id="about-title" className={styles.heading}>
          <span className={styles.headingLead}>A</span>
          <span className={styles.headingRest}>bout</span>
        </h2>

        <p className={`${styles.catchCopy} ${isVisible ? styles.revealVisible : ""}`}>“寄り添う癒し”を込めて</p>

        <div className={styles.body}>
          <p className={isVisible ? styles.revealVisible : ""}>犬や猫の肉球は、触れるだけでどこかほっとして、温かく、安心できる存在です。</p>
          <p className={isVisible ? styles.revealVisible : ""}>言葉がなくても自然と寄り添い、心をやさしくほぐしてくれる。</p>
          <p className={isVisible ? styles.revealVisible : ""}>にくきゅうも、お客さまにとってそんな場所でありたいと考えています。</p>
          <p className={isVisible ? styles.revealVisible : ""}>お一人おひとりの気持ちにそっと寄り添い、穏やかで安心できる時間を過ごしていただくこと。</p>
          <p className={isVisible ? styles.revealVisible : ""}>髪を整えることはもちろん、心までふっと軽くなるようなひとときをお届けしたい。</p>
          <p className={isVisible ? styles.revealVisible : ""}>「にくきゅう」という名前には、そんな願いを込めています。</p>
        </div>
      </div>
    </section>
  );
}
