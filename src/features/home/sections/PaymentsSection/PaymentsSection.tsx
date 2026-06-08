import styles from "./PaymentsSection.module.css";

const creditCardSrc = "/home/payments/creditcard.svg";
const qrPaymentSrc = "/home/payments/qr.svg";
const icPaymentSrc = "/home/payments/ic.svg";

const paymentMethods = [
  { src: creditCardSrc, alt: "クレジットカード決済" },
  { src: qrPaymentSrc, alt: "QRコード決済" },
  { src: icPaymentSrc, alt: "IC決済" },
] as const;

export function PaymentsSection() {
  return (
    <section id="payments" className={styles.section} aria-labelledby="payments-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="payments-title" className={styles.heading}>
            <span className={styles.headingLead}>P</span>
            <span className={styles.headingRest}>ayments</span>
          </h2>
          <p className={styles.subheading}>お支払い方法</p>
        </header>

        <p className={styles.catchCopy}>完全キャッシュレス対応</p>

        <div className={styles.methodIcons} aria-label="対応している決済方法">
          {paymentMethods.map((method) => (
            <div key={method.alt} className={styles.methodIconWrap}>
              <img className={styles.methodIcon} src={method.src} alt={method.alt} />
            </div>
          ))}
        </div>

        <div className={styles.body}>
          <p>にくきゅうでは、施術やカウンセリングのお時間を大切にするため、お支払いはキャッシュレス決済のみとさせていただいております。</p>
          <p>現金でのお支払いは承っておりません。</p>
          <p>あらかじめご了承くださいますようお願いいたします。</p>
        </div>
      </div>
    </section>
  );
}
