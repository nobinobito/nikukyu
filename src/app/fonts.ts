import { Barlow_Condensed, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";

export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const shirokuma = localFont({
  src: "../../public/fonts/001Shirokuma-Regular.woff2",
  variable: "--font-shirokuma",
  display: "swap",
  preload: false,
});
