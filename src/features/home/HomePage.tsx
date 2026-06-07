import styles from "./HomePage.module.css";
import {HeroSection} from "@/features/home/sections/HeroSection/HeroSection";
import {AboutSection} from "@/features/home/sections/AboutSection/AboutSection";
import {ExperienceSection} from "@/features/home/sections/ExperienceSection/ExperienceSection";
import {FeaturesSection} from "@/features/home/sections/FeaturesSection/FeaturesSection";
import {OnlineStoreSection} from "@/features/home/sections/OnlineStoreSection/OnlineStoreSection";
import {PaymentsSection} from "@/features/home/sections/PaymentsSection/PaymentsSection";
import {SalonProductsSection} from "@/features/home/sections/SalonProductsSection/SalonProductsSection";

export function HomePage() {
  return (
    <div className={styles.siteShell}>
      <main className={styles.main}>
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
        <ExperienceSection/>
        <SalonProductsSection/>
        <OnlineStoreSection/>
        <PaymentsSection/>
      </main>
    </div>
  );
}
