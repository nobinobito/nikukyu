import Image from "next/image";

import styles from "./HeroSection.module.css";

const heroMainSrc = "/home/hero/hero_main.png";

export function Hero() {
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
        <span className={`${styles.scissorSound} ${styles.soundLeftLower}`}>
          チョキ
        </span>
        <span className={`${styles.scissorSound} ${styles.soundLeftUpper}`}>
          チョキ
        </span>
        <span className={`${styles.scissorSound} ${styles.soundRightLower}`}>
          チョキ
        </span>
        <span className={`${styles.scissorSound} ${styles.soundRightUpper}`}>
          チョキ
        </span>
      </div>
    </div>
  );
}
