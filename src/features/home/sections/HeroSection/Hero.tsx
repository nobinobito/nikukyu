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
        decoding="sync"
      />
    </div>
  );
}
