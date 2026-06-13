import {DesktopFamilyGallery} from "@/components/layout/DesktopFamilyGallery/DesktopFamilyGallery";
import {DesktopMenu} from "@/components/layout/DesktopMenu/DesktopMenu";
import {FixedReservationBar} from "@/components/layout/FixedReservationBar/FixedReservationBar";
import {IntroMessageOverlay} from "@/components/layout/IntroMessageOverlay/IntroMessageOverlay";
import styles from "./HomePage.module.css";
// import {MobileMenu} from "@/components/layout/MobileMenu/MobileMenu";
import {HeroSection} from "@/features/home/sections/HeroSection/HeroSection";
import {AboutSection} from "@/features/home/sections/AboutSection/AboutSection";
import {ExperienceSection} from "@/features/home/sections/ExperienceSection/ExperienceSection";
import {FeaturesSection} from "@/features/home/sections/FeaturesSection/FeaturesSection";
import {MobileGallerySection} from "@/features/home/sections/MobileGallerySection/MobileGallerySection";
import {Footer} from "@/components/layout/Footer/Footer";
import {OnlineStoreSection} from "@/features/home/sections/OnlineStoreSection/OnlineStoreSection";
import {PaymentsSection} from "@/features/home/sections/PaymentsSection/PaymentsSection";
import {ReservationGuideSection} from "@/features/home/sections/ReservationGuideSection/ReservationGuideSection";
import {SalonInformationSection} from "@/features/home/sections/SalonInformationSection/SalonInformationSection";
import {SalonProductsSection} from "@/features/home/sections/SalonProductsSection/SalonProductsSection";

export function HomePage() {
  return (
    <div className={styles.siteShell}>
      <IntroMessageOverlay/>
      {/* <MobileMenu/> */}
      <DesktopFamilyGallery/>
      <DesktopMenu/>
      <FixedReservationBar/>
      <main className={styles.main}>
        <HeroSection/>
        <AboutSection/>
        <MobileGallerySection/>
        <FeaturesSection/>
        <ExperienceSection/>
        <SalonProductsSection/>
        <OnlineStoreSection/>
        <PaymentsSection/>
        <SalonInformationSection/>
        <ReservationGuideSection/>
        <Footer/>
      </main>
    </div>
  );
}
