import { instagramLink, siteNavigationItems } from "../siteNavigation";
import styles from "./DesktopMenu.module.css";

export function DesktopMenu() {
  return (
    <aside className={styles.wrap} aria-label="PC site menu">
      <nav className={styles.nav} aria-label="サイトメニュー">
        {siteNavigationItems.map((item) => (
          <a key={item.href} className={styles.link} href={item.href}>
            <span className={styles.linkLabel}>{item.label}</span>
            <span className={styles.linkSubLabel}>{item.sublabel}</span>
          </a>
        ))}
      </nav>

      <a className={styles.followLink} href={instagramLink} target="_blank" rel="noreferrer">
        <span className={styles.followText}>Follow us</span>
        <span className={styles.followIcon} aria-hidden="true">
          <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.75" y="0.75" width="23.5" height="23.5" rx="5.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12.5" cy="12.5" r="4.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18.2" cy="6.9" r="1.2" fill="currentColor" />
          </svg>
        </span>
      </a>
    </aside>
  );
}
