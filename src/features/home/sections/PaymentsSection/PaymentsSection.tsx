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
              {/* SVG is already a compact, resolution-independent local asset. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.methodIcon} src={method.src} alt={method.alt} />
            </div>
          ))}
        </div>

        <section className={styles.availableMethods} aria-labelledby="available-methods-title">
          <h3 id="available-methods-title" className={styles.availableMethodsTitle}>
            ご利用可能なお支払い方法
          </h3>
          <dl className={styles.availableMethodsList}>
            <div className={styles.availableMethod}>
              <dt>クレジットカード</dt>
              <dd>VISA / MasterCard, 銀聯, JCB / AMEX / DINERS / DISCOVER</dd>
            </div>
            <div className={styles.availableMethod}>
              <dt>QRコード決済</dt>
              <dd>WeChat Pay, 銀聯, PayPay, 楽天ペイ, d払い, au PAY, メルペイ, JKOPAY, J-Coin Pay, Alipay+</dd>
            </div>
            <div className={styles.availableMethod}>
              <dt>電子マネー・現金</dt>
              <dd>電子マネーおよび現金でのお支払いはご利用いただけません。</dd>
            </div>
          </dl>
        </section>

        <div className={styles.body}>
          <p>にくきゅうでは、施術やカウンセリングのお時間を大切にするため、お支払いはキャッシュレス決済のみとさせていただいております。</p>
          <p>現金でのお支払いは承っておりません。</p>
          <p>あらかじめご了承くださいますようお願いいたします。</p>
        </div>

      </div>
    </section>
  );
}
