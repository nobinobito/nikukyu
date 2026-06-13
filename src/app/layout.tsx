import type { Metadata } from "next";
import { barlowCondensed, notoSansJp, shirokuma } from "./fonts";
import "./globals.css";
import React from "react";
import {
  addressLocality,
  addressRegion,
  businessHolidayText,
  businessHoursText,
  ogImagePath,
  postalCode,
  reservationUrl,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  streetAddress,
} from "./siteMetadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "hair salon にくきゅう",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
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
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: siteName,
    description: `${siteDescription} 営業時間 ${businessHoursText} / ${businessHolidayText}。`,
    url: siteUrl.toString(),
    image: new URL(ogImagePath, siteUrl).toString(),
    address: {
      "@type": "PostalAddress",
      postalCode,
      addressRegion,
      addressLocality,
      streetAddress,
      addressCountry: "JP",
    },
    areaServed: {
      "@type": "City",
      name: "墨田区",
    },
    makesOffer: {
      "@type": "Offer",
      url: reservationUrl,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="ja">
    <body
      className={`${notoSansJp.variable} ${barlowCondensed.variable} ${shirokuma.variable}`}
    >
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd),
      }}
    />
    {children}
    </body>
    </html>
  );
}
