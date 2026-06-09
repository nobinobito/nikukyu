import type { Metadata } from "next";
import { barlowCondensed, notoSansJp, shirokuma } from "./fonts";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "hair salon にくきゅう",
  description:
    "森下にオープンする、お客様だけのプライベートヘアサロン。hair salon にくきゅうの公式サイトです。",
  manifest: "/manifest.webmanifest",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/common/favicon/favicon.svg",
    apple: "/common/favicon/apple-touch-icon.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
    <body
      className={`${notoSansJp.variable} ${barlowCondensed.variable} ${shirokuma.variable}`}
    >
    {children}
    </body>
    </html>
  );
}
