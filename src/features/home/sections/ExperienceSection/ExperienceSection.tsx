import styles from "./ExperienceSection.module.css";

const pawIconSrc = "/home/experience/pow.svg";
const dogSrc = "/home/experience/dog.svg";

const experienceSteps = [
  {
    title: "ホームカウンセリング",
    body: [
      "ご予約時に発行されるURLから、ご自宅であらかじめお好みやお悩み、ご要望をご入力いただきます。",
      "事前に共有いただくことで、ご来店当日のカウンセリングをよりスムーズに行えます。",
      "また、入力内容をもとにAIが好みの傾向を分析し、ご提案に活かしていきます。",
    ],
  },
  {
    title: "ご来店",
    body: [
      "完全マンツーマンのプライベート空間で、周りを気にせずゆったりとお過ごしいただけます。",
    ],
  },
  {
    title: "カウンセリングと状態チェック",
    body: [
      "事前にご入力いただいた内容をもとに、AIミラーを使った顔分析やカラーシミュレーションを行いながら、なりたいイメージを一緒に共有していきます。",
      "さらに、頭皮スコープを用いて頭皮の状態を確認し、色味や毛穴汚れ、乾燥・皮脂バランス、毛の状態まで丁寧にチェックします。",
    ],
  },
  {
    title: "施術",
    body: [
      "カットやカラーなどの施術は、お一人おひとりの状態やご希望に合わせて丁寧に進めていきます。",
      "完全マンツーマンだからこそ、落ち着いた時間の中で安心してお任せいただけます。",
    ],
  },
  {
    title: "ヘッドスパ",
    body: [
      "すべてのメニューに含まれるヘッドスパで、頭皮と髪を整えながら、心までほぐれる時間をお届けします。",
      "フルフラットのシャンプー台で、ゆったりとおくつろぎください。",
    ],
  },
  {
    title: "施術後のひととき",
    body: [
      "施術後は、ほっとひと息つける時間をご用意しています。",
      "慌ただしく終わるのではなく、最後まで心地よくお過ごしいただけるよう、余韻まで大切にしています。",
    ],
  },
] as const;

export function ExperienceSection() {
  return (
    <section className={styles.experience} aria-labelledby="experience-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="experience-title" className={styles.heading}>
            <span className={styles.headingLead}>E</span>
            <span className={styles.headingRest}>xperience</span>
          </h2>
          <p className={styles.subheading}>にくきゅうでの過ごし方</p>
        </header>

        <div className={styles.timeline}>
          {experienceSteps.map((step, index) => (
            <article key={step.title} className={styles.step}>
              <div className={styles.markerColumn} aria-hidden="true">
                {/* Temporary Figma asset URLs until local files are added under public/home/experience/. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.markerIcon} src={pawIconSrc} alt="" />
                <span className={styles.markerLine}/>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <div className={styles.stepBody}>
                  {step.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.illustrationWrap} aria-hidden="true">
          <img className={styles.illustration} src={dogSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
