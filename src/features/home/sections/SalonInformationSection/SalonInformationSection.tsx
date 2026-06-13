import styles from "./SalonInformationSection.module.css";
import {
  addressLocality,
  addressRegion,
  streetAddress,
} from "@/app/siteMetadata";

const backgroundImgSrc = "/home/salon_information/background.JPG";
const googleMapUrl =
  "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A2%A8%E7%94%B0%E5%8C%BA%E7%AB%8B%E5%B7%9D1-14-2-102";

export function SalonInformationSection() {
  return (
    <section id="salon-information" className={styles.section} aria-labelledby="salon-information-title">
      <div className={styles.imageWrap} aria-hidden="true">
        <img className={styles.image} src={backgroundImgSrc} alt="" />
      </div>

      <div className={styles.card}>
        <header className={styles.header}>
          <h2 id="salon-information-title" className={styles.heading}>
            <span className={styles.headingLead}>S</span>
            <span className={styles.headingRest}>alon </span>
            <span className={styles.headingLead}>I</span>
            <span className={styles.headingRest}>nformation</span>
          </h2>
          <p className={styles.subheading}>サロン情報</p>
        </header>

        <div className={styles.infoBlock}>
          <p className={styles.salonName}>hair salon にくきゅう</p>
          <address className={styles.address}>
            <span>{`${addressRegion}${addressLocality}`}</span>
            <span>{streetAddress}</span>
          </address>
          <a className={styles.mapLink} href={googleMapUrl} target="_blank" rel="noreferrer">
            GoogleMapで見る
          </a>
        </div>

        <dl className={styles.metaList}>
          <div className={styles.metaRow}>
            <dt className={styles.metaLabel}>営業時間</dt>
            <dd className={styles.metaValue}>9：00〜18：00</dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaLabel}>定休日</dt>
            <dd className={styles.metaValue}>不定休</dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaLabel}>交通手段</dt>
            <dd className={styles.metaValue}>都営大江戸線「森下駅」より徒歩約4分</dd>
            <dd className={styles.metaValue}>都営新宿線「森下駅」より徒歩約4分</dd>
            <dd className={styles.metaValue}>都営大江戸線「両国」より徒歩約10分</dd>
            <dd className={styles.metaValue}>都営新宿線「菊川駅」より徒歩約11分</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
