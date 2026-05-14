import type { Metadata } from "next";

import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";

const defaultTitle =
  "Sai Balaji Metal Industries | Steel Pipes & Hardware in Srikakulam";
const defaultDescription =
  "Sai Balaji Metal Industries is a trusted supplier of steel pipes, GP pipes, roofing sheets, gate materials, and fabrication accessories in Srikakulam. Quality products from Jindal, JSW, and Tata Steel.";

const keywords = [
  "Steel Pipes Srikakulam",
  "GP Pipes Supplier",
  "Roofing Sheets Dealer",
  "Hardware Shop Srikakulam",
  "Gate Materials",
  "JSW Roofing",
  "Tata Steel",
  "Jindal Steel",
  "Fabrication Materials",
  "Srikakulam steel supplier",
  "Nava Bharat Junction hardware",
];

export const DEFAULT_DESCRIPTION = defaultDescription;

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${SITE.name}`,
    },
    description: defaultDescription,
    keywords,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: siteUrl }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "business",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: SITE.name,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: "Sai Balaji Metal Industries",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/og-image.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}
