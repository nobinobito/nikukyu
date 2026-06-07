import styles from "./HomePage.module.css";
import {HeroSection} from "@/features/home/sections/HeroSection/HeroSection";

const sections = [
  "Hero",
  "About",
  "Features",
  "Experience",
  "Salon Products",
  "Online Store",
  "Payments",
  "Salon Information",
  "Reservation Guide",
];

export function HomePage() {
  return (
    <div className={styles.siteShell}>
      <main className={styles.main}>
        <HeroSection/>
      </main>
    </div>
  );
}