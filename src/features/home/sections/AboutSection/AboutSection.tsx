import styles from "./AboutSection.module.css";

const aboutBackgroundSrc = "/home/about/about-bg.jpg";

export function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.background} aria-hidden="true">
        {/* Temporary Figma asset URL until a local file is added under public/home/about/. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.backgroundImage} src={aboutBackgroundSrc} alt="" />
        <div className={styles.overlay}/>
      </div>

      <div className={styles.content}>
        <h2 id="about-title" className={styles.heading}>
          <span className={styles.headingLead}>A</span>
          <span className={styles.headingRest}>bout</span>
        </h2>

        <p className={styles.catchCopy}>“寄り添う癒し”を込めて</p>

        <div className={styles.body}>
          <p>犬や猫の肉球は、触れるだけでどこかほっとして、温かく、安心できる存在です。</p>
          <p>言葉がなくても自然と寄り添い、心をやさしくほぐしてくれる。</p>
          <p>にくきゅうも、お客さまにとってそんな場所でありたいと考えています。</p>
          <p>お一人おひとりの気持ちにそっと寄り添い、穏やかで安心できる時間を過ごしていただくこと。</p>
          <p>髪を整えることはもちろん、心までふっと軽くなるようなひとときをお届けしたい。</p>
          <p>「にくきゅう」という名前には、そんな願いを込めています。</p>
        </div>
      </div>
    </section>
  );
}
