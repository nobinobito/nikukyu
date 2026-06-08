import styles from "./Footer.module.css";

const instagramLink = "https://www.instagram.com/nikukyu.hair/";

export function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.message}>
          <span>日々のお知らせや、にくきゅうの日常</span>
          <span>SNSでお届けしています。</span>
        </p>

        <a className={styles.followLink} href={instagramLink} aria-label="Instagram">
          <span className={styles.followText}>Follow us</span>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.75" y="0.75" width="23.5" height="23.5" rx="5.25" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12.5" cy="12.5" r="4.25" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="18.2" cy="6.9" r="1.2" fill="currentColor" />
            </svg>
          </span>
        </a>

        <p className={styles.logo} aria-label="hair salon にくきゅう">
          にくきゅう
        </p>
        <p className={styles.copyright}>© 2026 hair salon にくきゅう</p>
      </div>
    </footer>
  );
}
