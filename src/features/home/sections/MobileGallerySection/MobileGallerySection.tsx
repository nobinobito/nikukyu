import { getGalleryPhotos } from "@/components/layout/DesktopFamilyGallery/galleryPhotos";

import styles from "./MobileGallerySection.module.css";

export function MobileGallerySection() {
  const photos = getGalleryPhotos();

  if (photos.length === 0) {
    return null;
  }

  return (
    <section
      id="family-gallery"
      className={styles.section}
      aria-labelledby="mobile-gallery-title"
    >
      <div className={styles.marquee} aria-label="愛犬と愛猫のギャラリー">
        <div className={styles.track}>
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className={styles.group}>
              {photos.map((photo) => (
                <figure key={`${copyIndex}-${photo.src}`} className={styles.card}>
                  <img className={styles.image} src={photo.src} alt={photo.alt} />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
