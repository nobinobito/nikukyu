"use client";

import { useEffect, useState } from "react";
import styles from "./DesktopFamilyGallery.module.css";

const samplePhotos = [
  { src: "/home/about/about-bg.jpg", alt: "sample dog 1", className: "dogCard" },
  { src: "/home/hero/cat.svg", alt: "sample cat 1", className: "catCard" },
  { src: "/home/online_store/cat_on_pc.svg", alt: "sample cat 2", className: "pcCatCard" },
  { src: "/home/about/about-bg.jpg", alt: "sample dog 2", className: "dogCardSoft" },
  { src: "/home/hero/cat.svg", alt: "sample cat 3", className: "catCardWarm" },
  { src: "/home/online_store/cat_on_pc.svg", alt: "sample cat 4", className: "pcCatCardSoft" },
  { src: "/home/about/about-bg.jpg", alt: "sample dog 3", className: "dogCardWarm" },
  { src: "/home/hero/cat.svg", alt: "sample cat 5", className: "catCardSoft" },
] as const;

const hashtags = [
  "#にくきゅう",
  "#貸し切りヘアサロン",
  "#森下美容室",
  "#マンツーマンサロン",
  "#ヘッドスパ",
  "#愛犬と愛猫",
] as const;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getInitialVisibleIndices() {
  const indices = samplePhotos.map((_, index) => index);

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const randomIndex = getRandomInt(index + 1);
    const current = indices[index];
    indices[index] = indices[randomIndex];
    indices[randomIndex] = current;
  }

  return indices.slice(0, 4);
}

export function DesktopFamilyGallery() {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const randomize = () => {
      setVisibleIndices(getInitialVisibleIndices());
    };

    const initialTimeout = window.setTimeout(randomize, 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        window.clearTimeout(initialTimeout);
      };
    }

    const interval = window.setInterval(() => {
      setVisibleIndices((current) => {
        const slotIndex = getRandomInt(current.length);
        const remainingIndices = samplePhotos
          .map((_, index) => index)
          .filter((index) => !current.includes(index));

        if (remainingIndices.length === 0) return current;

        const nextPhotoIndex = remainingIndices[getRandomInt(remainingIndices.length)];
        const updated = [...current];
        updated[slotIndex] = nextPhotoIndex;
        return updated;
      });
    }, 7000);

    return () => {
      window.clearTimeout(initialTimeout);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <aside className={styles.wrap} aria-label="Family gallery sample">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our family</p>
          <p className={styles.copy}>わが家の愛犬と愛猫をご紹介</p>
        </div>

        <div className={styles.grid}>
          {visibleIndices.map((photoIndex, index) => {
            const photo = samplePhotos[photoIndex];

            return (
              <figure
                key={`slot-${index}`}
                className={`${styles.card} ${styles[photo.className]}`}
              >
                <img
                  key={`${photo.alt}-${photoIndex}`}
                  className={`${styles.image} ${styles.imageFade}`}
                  src={photo.src}
                  alt={photo.alt}
                />
              </figure>
            );
          })}
        </div>
      </aside>
      <div className={styles.hashtagRail} aria-hidden="true">
        <div className={styles.hashtagTrack}>
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className={styles.hashtagGroup}>
              {hashtags.map((tag) => (
                <span key={`${copyIndex}-${tag}`} className={styles.hashtag}>
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
