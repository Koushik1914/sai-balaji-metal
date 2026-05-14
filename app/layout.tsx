import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SkipToMain } from "@/components/SkipToMain";
import { buildRootMetadata } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#F8F9FA] font-body text-[#1F1F1F] leading-[1.7] antialiased">
        <LocalBusinessJsonLd />
        <SkipToMain />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
