import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />

      <main className={styles.card}>
        <div className={styles.header}>
          <div className={styles.logo} aria-hidden="true">
            <span className={styles.logoDot} />
            <span className={styles.logoRing} />
          </div>
          <div className={styles.brand}>
            <div className={styles.company}>nobinobito株式会社</div>
            <div className={styles.tagline}>のびのびと、準備中。</div>
          </div>
        </div>

        <div className={styles.badge} aria-label="Coming soon">
          COMING SOON
        </div>

        <h1 className={styles.title}>準備中</h1>
        <p className={styles.subtitle}>
          コーポレートサイトを制作しています。公開まで今しばらくお待ちください。
        </p>

        <div className={styles.footerNote}>
          <span className={styles.footerItem}>© nobinobito Inc.</span>
        </div>
      </main>
    </div>
  );
}