"use client";

import { useEffect, useState } from "react";

import styles from "./DesktopFamilyGallery.module.css";

type Photo = {
  alt: string;
  src: string;
};

type DesktopFamilyGalleryClientProps = {
  photos: Photo[];
};

const hashtags = [
  "#にくきゅう",
  "#貸し切りヘアサロン",
  "#森下美容室",
  "#マンツーマンサロン",
  "#ヘッドスパ",
  "#お子様歓迎",
  "#多目的トイレ",
  "#フルフラット床",
] as const;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomVisibleIndices(photos: Photo[]) {
  const indices = photos.map((_, index) => index);

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const randomIndex = getRandomInt(index + 1);
    const current = indices[index];
    indices[index] = indices[randomIndex];
    indices[randomIndex] = current;
  }

  return indices.slice(0, Math.min(4, indices.length));
}

export function DesktopFamilyGalleryClient({ photos }: DesktopFamilyGalleryClientProps) {
  const [visibleIndices, setVisibleIndices] = useState(() =>
    photos.slice(0, 4).map((_, index) => index),
  );

  useEffect(() => {
    if (photos.length <= 4) {
      return;
    }

    const randomize = () => {
      setVisibleIndices(getRandomVisibleIndices(photos));
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

        if (remainingIndices.length === 0) {
          return current;
        }

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
  }, [photos]);

  if (photos.length === 0) {
    return null;
  }

  return (
    <>
      <aside className={styles.wrap} aria-label="Family gallery">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our family</p>
          <p className={styles.copy}>わが家の愛犬と愛猫をご紹介</p>
        </div>

        <div className={styles.grid}>
          {visibleIndices.map((photoIndex, index) => {
            const photo = photos[photoIndex];

            return (
              <figure key={`slot-${index}`} className={styles.card}>
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
