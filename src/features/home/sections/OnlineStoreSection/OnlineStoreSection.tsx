import styles from "./OnlineStoreSection.module.css";

const catOnPcSrc = "/home/online_store/cat_on_pc.svg";

export function OnlineStoreSection() {
  return (
    <section id="online-store" className={styles.section} aria-labelledby="online-store-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="online-store-title" className={styles.heading}>
            <span className={styles.headingLead}>O</span>
            <span className={styles.headingRest}>nline </span>
            <span className={styles.headingLead}>S</span>
            <span className={styles.headingRest}>tore</span>
          </h2>
          <p className={styles.subheading}>オンラインショップ</p>
        </header>

        <div className={styles.visualWrap} aria-hidden="true">
          <img className={styles.visual} src={catOnPcSrc} alt="" />
        </div>

        <div className={styles.body}>
          <p>サロンで使用しているこだわりのホームケア商品を、Online Storeでご購入いただけるよう準備中です。</p>
          <p>公開まで、どうぞ楽しみにお待ちください。</p>
        </div>
      </div>
    </section>
  );
}
