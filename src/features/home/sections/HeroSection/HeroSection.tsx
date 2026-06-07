import styles from "./HeroSection.module.css";

const catRightSrc = "https://www.figma.com/api/mcp/asset/6ac106db-e8aa-490f-83df-41e5dfed8755";
const catLeftSrc = "https://www.figma.com/api/mcp/asset/041d594e-c441-4464-857a-c6d6d8e47153";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.logo}>
          <span className={styles.logoSub}>hair salon</span>
          <span className={styles.logoMain}>にくきゅう</span>
        </h1>

        <div className={styles.visualArea} aria-hidden="true">
          {/* Temporary Figma asset URLs until local files are added under public/home/hero/. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={`${styles.cat} ${styles.catRight}`} src={catRightSrc} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={`${styles.cat} ${styles.catLeft}`} src={catLeftSrc} alt="" />
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
