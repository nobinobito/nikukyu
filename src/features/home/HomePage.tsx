import styles from "./HomePage.module.css";
import {HeroSection} from "@/features/home/sections/HeroSection/HeroSection";
import {AboutSection} from "@/features/home/sections/AboutSection/AboutSection";
import {FeaturesSection} from "@/features/home/sections/FeaturesSection/FeaturesSection";

export function HomePage() {
  return (
    <div className={styles.siteShell}>
      <main className={styles.main}>
        <HeroSection/>
        <AboutSection/>
        <FeaturesSection/>
      </main>
    </div>
  );
}
