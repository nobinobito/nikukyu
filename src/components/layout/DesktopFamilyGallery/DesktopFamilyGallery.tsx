"use client";

import { useEffect, useState } from "react";
import styles from "./DesktopFamilyGallery.module.css";

const photos = [
  { src: "/home/gallery/d1.jpg", alt: "dog 1", className: "dogCard" },
  { src: "/home/gallery/d2.jpg", alt: "dog 2", className: "dogCard" },
  { src: "/home/gallery/d3.jpg", alt: "dog 3", className: "dogCard" },
  { src: "/home/gallery/d4.jpg", alt: "dog 4", className: "dogCard" },
  { src: "/home/gallery/d5.jpg", alt: "dog 5", className: "dogCard" },
  { src: "/home/gallery/d6.jpg", alt: "dog 6", className: "dogCard" },
  { src: "/home/gallery/d7.jpg", alt: "dog 7", className: "dogCard" },
  { src: "/home/gallery/d8.jpg", alt: "dog 8", className: "dogCard" },
  { src: "/home/gallery/d9.jpg", alt: "dog 9", className: "dogCard" },
  { src: "/home/gallery/c1.jpg", alt: "cat 1", className: "catCard" },
  { src: "/home/gallery/c2.jpg", alt: "cat 2", className: "catCard" },
  { src: "/home/gallery/c3.jpg", alt: "cat 3", className: "catCard" },
  { src: "/home/gallery/c4.jpg", alt: "cat 4", className: "catCard" },
  { src: "/home/gallery/c5.jpg", alt: "cat 5", className: "catCard" },
  { src: "/home/gallery/c6.jpg", alt: "cat 6", className: "catCard" },
  { src: "/home/gallery/c7.jpg", alt: "cat 7", className: "catCard" },
  { src: "/home/gallery/c8.jpg", alt: "cat 8", className: "catCard" },
  { src: "/home/gallery/c9.jpg", alt: "cat 9", className: "catCard" },
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
  const indices = photos.map((_, index) => index);

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
        const remainingIndices = photos
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
            const photo = photos[photoIndex];

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
