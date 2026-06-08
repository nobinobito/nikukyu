"use client";

import { useEffect, useState } from "react";
import styles from "./FixedReservationBar.module.css";

export function FixedReservationBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${styles.wrap} ${isVisible ? styles.wrapVisible : ""}`} aria-hidden={!isVisible}>
      <a className={styles.button} href="#reservation-guide">
        <span className={styles.labelEn}>Reservation</span>
        <span className={styles.labelJa}>ご予約はこちら</span>
      </a>
    </div>
  );
}
