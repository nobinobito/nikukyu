import { Barlow_Condensed } from "next/font/google";
import localFont from "next/font/local";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const shirokuma = localFont({
  src: "../../public/fonts/001Shirokuma-Regular-subset.woff2",
  variable: "--font-shirokuma",
  display: "swap",
  preload: true,
});
