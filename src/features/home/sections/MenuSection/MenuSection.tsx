import Image from "next/image";

import styles from "./MenuSection.module.css";

const reservationUrl = "https://rwg.kanzashi.com/l/4N01267bVsd/hair";

export function MenuSection() {
  return (
    <section id="menu" className={styles.section} aria-labelledby="menu-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="menu-title" className={styles.heading}>
            <span className={styles.headingLead}>M</span>
            <span className={styles.headingRest}>enu</span>
          </h2>
          <p className={styles.subheading}>メニューについて</p>
        </header>

        <article className={styles.message}>

          <div className={styles.body}>
            <p>にくきゅうでは、髪を美しく保つためには、カットやカラーだけではなく、土台となる頭皮を健やかな状態に保つことが大切と考えています。</p>
            <p>一時的な手触りや見た目を整えるのではなく、これから生えてくる髪まで見据えた、本質的な髪質改善をするために、すべてのメニューにヘッドスパをご用意しています。</p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              className={styles.menuImage}
              src="/home/menu/menu.webp"
              alt="ヘッドスパのイメージ"
              width={343}
              height={344}
              sizes="(max-width: 430px) calc(100vw - 40px), 390px"
              unoptimized
            />
          </div>

          <div className={styles.body}>
            <p>なお、パーマ・縮毛矯正などの薬剤施術は、2回目以降にご来店いただくお客様を対象としております。</p>
            <p>初回は、お客様の髪や頭皮の状態、髪質、お悩みをしっかりと確認したうえで、最適な施術をご提案したいと考えています。大切な髪を長く健やかに保つための方針として、ご理解いただけますと幸いです。</p>
          </div>
        </article>

        <div className={styles.reservationGuide}>
          <p>具体的なメニュー内容・料金・施術時間につきましては、下記の予約ページよりご確認ください。</p>
          <a className={styles.reservationLink} href={reservationUrl} target="_blank" rel="noreferrer">
            予約ページで詳細を見る
          </a>
        </div>
      </div>
    </section>
  );
}
