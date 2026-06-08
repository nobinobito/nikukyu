import styles from "./SalonProductsSection.module.css";

const heroBackgroundSrc = "/home/salon_products/background.JPG";

const productCards = [
  {
    brand: "ESTESSIMO",
    imageSrc: "/home/salon_products/estessimo.jpg",
    imageAlt: "ESTESSIMO のプロダクト",
    imagePosition: "center center",
  },
  {
    brand: "THE MOII",
    imageSrc: "/home/salon_products/the_moi.jpg",
    imageAlt: "THE MOII のプロダクト",
    imagePosition: "center center",
  },
  {
    brand: "SEE SAW",
    imageSrc: "/home/salon_products/seesaw.png",
    imageAlt: "SEE SAW のプロダクト",
    imagePosition: "center 34%",
  },
] as const;

export function SalonProductsSection() {
  return (
    <section id="salon-products" className={styles.section} aria-labelledby="salon-products-title">
      <div className={styles.hero}>
        <img className={styles.heroBackground} src={heroBackgroundSrc} alt="" aria-hidden="true" />
        <div className={styles.heroOverlay}/>

        <div className={styles.heroContent}>
          <h2 id="salon-products-title" className={styles.heading}>
            <span className={styles.headingLead}>S</span>
            <span className={styles.headingRest}>alon </span>
            <span className={styles.headingLead}>P</span>
            <span className={styles.headingRest}>roducts</span>
          </h2>
          <p className={styles.subheading}>サロンで使用する商品</p>
        </div>
      </div>

      <div className={styles.cards}>
        {productCards.map((card) => (
          <article key={card.brand} className={styles.card}>
            <div className={styles.cardImageWrap}>
              <img
                className={styles.cardImage}
                src={card.imageSrc}
                alt={card.imageAlt}
                style={{ objectPosition: card.imagePosition }}
              />
            </div>
            <div className={styles.cardFooter}>
              <h3 className={styles.cardBrand}>{card.brand}</h3>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.more}>
        <span className={styles.moreLead}>a</span>
        <span className={styles.moreRest}>nd </span>
        <span className={styles.moreLead}>m</span>
        <span className={styles.moreRest}>ore.</span>
      </p>
    </section>
  );
}
