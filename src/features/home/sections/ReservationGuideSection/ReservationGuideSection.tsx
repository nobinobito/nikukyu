import styles from "./ReservationGuideSection.module.css";

const reservationLinks = [
  { label: "LINE予約", href: "#" },
  { label: "Instagram予約", href: "#" },
  { label: "Google予約", href: "#" },
] as const;

export function ReservationGuideSection() {
  return (
    <section id="reservation-guide" className={styles.section} aria-labelledby="reservation-guide-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="reservation-guide-title" className={styles.heading}>
            <span className={styles.headingLead}>R</span>
            <span className={styles.headingRest}>eservation </span>
            <span className={styles.headingLead}>G</span>
            <span className={styles.headingRest}>uide</span>
          </h2>
          <p className={styles.subheading}>予約案内</p>
        </header>

        <p className={styles.catchCopy}>ご予約はオンラインにて</p>

        <div className={styles.body}>
          <p>ご予約はオンラインにて承っております。</p>
          <p>LINE・Instagram・Googleより、ご都合のよい方法でご予約ください。</p>
          <p>お客様だけのゆったりとした時間をご用意して、お待ちしております。</p>
        </div>

        <div className={styles.buttons}>
          {reservationLinks.map((link) => (
            <a key={link.label} className={styles.button} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
