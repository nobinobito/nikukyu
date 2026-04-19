import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobinobito.co.jp"),
  title: {
    default: "nobinobito株式会社",
    template: "%s | nobinobito株式会社",
  },
  description:
    "nobinobito株式会社のコーポレートサイトです。ITとヘアサロンを軸に、のびのびと事業を展開しています（現在準備中）。",
  applicationName: "nobinobito株式会社",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://nobinobito.co.jp/",
    siteName: "nobinobito株式会社",
    title: "nobinobito株式会社",
    description:
      "nobinobito株式会社のコーポレートサイトです。ITとヘアサロンを軸に、のびのびと事業を展開しています（現在準備中）。",
    locale: "ja_JP",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "nobinobito株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nobinobito株式会社",
    description:
      "nobinobito株式会社のコーポレートサイトです。ITとヘアサロンを軸に、のびのびと事業を展開しています（現在準備中）。",
    images: ["/og.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>n</text></svg>" }],
    shortcut: [{ url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>n</text></svg>" }],
    apple: [{ url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>n</text></svg>" }],
  },
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    {children}
    </body>
    </html>
  );
}
