"use client";

import { useEffect, useState } from "react";
import { instagramLink, siteNavigationItems } from "../siteNavigation";
import styles from "./MobileMenu.module.css";

const menuIconSrc = "/common/menu/menu.svg";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="mobile-site-menu"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <span className={`${styles.iconWrap} ${isOpen ? styles.iconWrapOpen : ""}`}>
          <img className={styles.iconImage} src={menuIconSrc} alt="" aria-hidden="true" />
          <span className={styles.lines} aria-hidden="true">
            <span className={`${styles.line} ${isOpen ? styles.lineTopOpen : ""}`} />
            <span className={`${styles.line} ${isOpen ? styles.lineBottomOpen : ""}`} />
          </span>
        </span>
      </button>

      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`} aria-hidden={!isOpen}>
        <button
          type="button"
          className={styles.backdrop}
          tabIndex={isOpen ? 0 : -1}
          aria-label="メニューを閉じる"
          onClick={() => setIsOpen(false)}
        />

        <nav id="mobile-site-menu" className={styles.panel} aria-label="サイトメニュー">
          <p className={styles.eyebrow}>hair salon</p>
          <p className={styles.logo}>にくきゅう</p>

          <div className={styles.menuList}>
            {siteNavigationItems.map((item) => (
              <a
                key={item.href}
                className={styles.menuLink}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.menuText}>
                  <span className={styles.menuLabel}>{item.label}</span>
                  <span className={styles.menuSubLabel}>{item.sublabel}</span>
                </span>
              </a>
            ))}
          </div>

          <a
            className={styles.followLink}
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <span className={styles.followText}>Follow us</span>
            <span className={styles.followIcon} aria-hidden="true">
              <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="23.5" height="23.5" rx="5.25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12.5" cy="12.5" r="4.25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18.2" cy="6.9" r="1.2" fill="currentColor" />
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </>
  );
}
