"use client";

import { useEffect, useRef } from "react";
import styles from "./FeaturesSection.module.css";

const featureCards = [
  {
    number: "01",
    title: ["マンツーマンの", "プライベート空間"],
    imageSrc: "/home/features/private-salon-space.jpg",
    imageAlt: "プライベートサロンのセット面",
    body: [
      "周りを気にすることなく、自分だけの時間をゆったりお過ごしいただけます。",
      "お仕事、おうちのこと、ご家族のことなど、日々がんばっている皆さまに、さりげなく寄り添いながら心身がほっと緩む時間をご提供いたします。",
    ],
  },
  {
    number: "02",
    title: ["すべてのメニューに", "ヘッドスパと炭酸泉を"],
    imageSrc: "/home/features/headspa.jpeg",
    imageAlt: "ヘッドスパ",
    body: [
      "健康な髪の毛を育むために、土壌となる頭皮のケアを大切にしています。",
      "炭酸泉で頭皮をすっきりきれいに整え、ヘッドスパとの相乗効果で血行を促進。",
      "お客さま一人ひとりの頭皮と髪の毛に最適なケア剤を使用し、",
      "これから生えてくる髪の毛の髪質改善を目指します。",
    ],
  },
  {
    number: "03",
    title: ["みんなにやさしい店内"],
    imageSrc: "/common/videos/nikukyu_cg-poster.jpg",
    imageAlt: "段差のない店内をイメージした動画",
    videoSrc: "/common/videos/nikukyu_cg.MP4",
    body: [
      "ベビーカーや車いすをご利用の方がスムーズに移動できるよう、店内には段差がありません。",
      "広々トイレには、手すりとベビーシートも完備。",
      "※車いすからシャンプー台への移乗に介助が必要なお客さまには、安全面への配慮から、介助者の方のご同伴をお願いする場合がございます。ご予約時にお気軽にご相談ください。",
    ],
  },
] as const;

export function FeaturesSection() {
  const visualRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const spunCardsRef = useRef<Set<number>>(new Set());

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

  useEffect(() => {
    const cardElements = cardRefs.current.filter((node): node is HTMLElement => node !== null);

    if (cardElements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const cardIndex = Number(entry.target.getAttribute("data-card-index"));

          if (spunCardsRef.current.has(cardIndex)) {
            observer.unobserve(entry.target);
            return;
          }

          spunCardsRef.current.add(cardIndex);
          entry.target.classList.add(styles.cardVisible);
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -16% 0px",
        threshold: 0.35,
      },
    );

    cardElements.forEach((cardElement) => {
      observer.observe(cardElement);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const videoElements = videoRefs.current.filter((node): node is HTMLVideoElement => node !== null);

    if (videoElements.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoElements.forEach((video) => {
        video.pause();
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
            return;
          }

          video.pause();
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.35,
      },
    );

    videoElements.forEach((video) => {
      video.pause();
      observer.observe(video);
    });

    return () => {
      observer.disconnect();
      videoElements.forEach((video) => {
        video.pause();
      });
    };
  }, []);

  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="features-title" className={styles.heading}>
            <span className={styles.headingLead}>F</span>
            <span className={styles.headingRest}>eatures</span>
          </h2>
          <p className={styles.subheading}>にくきゅうが大切にしていること</p>
        </header>

        <div className={styles.cards}>
          {featureCards.map((card, index) => (
            <article
              key={card.number}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              data-card-index={index}
              className={styles.card}
            >
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
                {"videoSrc" in card ? (
                  <video
                    ref={(node) => {
                      videoRefs.current[index] = node;
                    }}
                    className={`${styles.cardImage} ${styles.cardVideo}`}
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={card.imageSrc}
                    aria-label={card.imageAlt}
                  >
                    <source src={card.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img className={styles.cardImage} src={card.imageSrc} alt={card.imageAlt} />
                )}
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
