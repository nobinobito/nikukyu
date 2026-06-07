"use client";

import { useEffect, useRef } from "react";
import styles from "./FeaturesSection.module.css";

const featureCards = [
  {
    number: "01",
    title: ["完全マンツーマンの", "プライベート空間"],
    imageSrc: "/home/features/private-salon-space.jpg",
    imageAlt: "プライベートサロンのセット面",
    body: [
      "サロン空間をひとり占めできる、完全マンツーマンのヘアサロンです。",
      "周りを気にすることなく、自分だけの時間をゆったりとお過ごしいただけます。",
      "シャンプー台にはフルフラット仕様を採用し、施術中も心地よくリラックスできる空間を整えています。",
    ],
  },
  {
    number: "02",
    title: ["すべてのメニューに", "ヘッドスパと炭酸泉を"],
    imageSrc: "/home/features/spa.jpg",
    imageAlt: "炭酸泉をイメージした写真",
    body: [
      "にくきゅうでは、すべてのメニューにヘッドスパと炭酸泉が含まれています。",
      "ヘッドスパの技術を学んだスタイリストが、頭皮や髪の状態に合わせて丁寧に施術いたします。",
      "使用する商材にはESTESSiMOを取り入れ、心地よさだけでなく、頭皮環境を整えるケアも大切にしています。",
    ],
  },
  {
    number: "03",
    title: ["AI診断で", "あなたに合ったご提案"],
    imageSrc: "/home/features/ai.jpg",
    imageAlt: "スマートミラーによるAI診断の画面",
    body: [
      "スマートミラーを活用したAI診断により、頭皮や髪の状態を可視化します。",
      "感覚だけに頼るのではなく、状態を一緒に確認しながら、一人ひとりに合った施術やケアをご提案します。",
    ],
  },
] as const;

export function FeaturesSection() {
  const visualRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;

      visualRefs.current.forEach((node) => {
        if (!node) return;

        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = cardCenter - viewportCenter;
        const normalized = Math.max(-1, Math.min(1, distanceFromCenter / window.innerHeight));
        const offset = normalized * -80;

        node.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });
    };

    let frame = 0;

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateParallax();
        frame = 0;
      });
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className={styles.features} aria-labelledby="features-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="features-title" className={styles.heading}>
            <span className={styles.headingLead}>F</span>
            <span className={styles.headingRest}>eatures</span>
          </h2>
          <p className={styles.subheading}>にくきゅうが大切にしていること</p>
        </header>

        <div className={styles.cards}>
          {featureCards.map((card) => (
            <article key={card.number} className={styles.card}>
              <div className={styles.cardHeading}>
                <span className={styles.cardNumber}>{card.number}</span>
                <h3 className={styles.cardTitle}>
                  {card.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
              </div>

              <div
                className={styles.cardVisual}
                ref={(node) => {
                  visualRefs.current[Number(card.number) - 1] = node;
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.cardImage} src={card.imageSrc} alt={card.imageAlt} />
              </div>

              <div className={styles.cardBody}>
                {card.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
