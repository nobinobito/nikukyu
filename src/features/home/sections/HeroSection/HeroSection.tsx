import styles from "./HeroSection.module.css";

const catSrc = "/home/hero/cat.svg";

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.logo}>
          <span className={styles.logoSub}>hair salon</span>
          <span className={styles.logoMain}>にくきゅう</span>
        </h1>

        <div className={styles.visualArea} aria-hidden="true">
          <img className={`${styles.cat} ${styles.catRight}`} src={catSrc} alt="" />
          <img className={`${styles.cat} ${styles.catLeft}`} src={catSrc} alt="" />
        </div>

        <p className={styles.copy}>
          <span>1席だけの</span>
          <span>貸し切りヘアサロン</span>
        </p>

        <div className={styles.scrollGuide} aria-hidden="true">
          <span className={styles.scrollText}>Scroll</span>
          <span className={styles.scrollLine}/>
        </div>
      </div>
    </section>
  );
}
