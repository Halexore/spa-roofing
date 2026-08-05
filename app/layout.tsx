import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sparoofing.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPA Roofing | Roofing Contractor in Arkansas",
    template: "%s | SPA Roofing",
  },
  description:
    "SPA Roofing is a locally owned and operated roofing company based in Little Rock, proudly serving homeowners and businesses across Arkansas. Free inspections, emergency repairs, residential and commercial roofing.",
  keywords: [
    "Arkansas roofing",
    "Little Rock roofer",
    "roof repair Arkansas",
    "roof replacement Arkansas",
    "metal roofing Arkansas",
    "commercial roofing Arkansas",
    "residential roofing Arkansas",
    "free roof inspection",
  ],
  openGraph: {
    title: "SPA Roofing | Quality Above All",
    description:
      "Based in Little Rock. Proudly serving all Arkansans with dependable roofing, repairs, inspections and insurance claim assistance.",
    url: siteUrl,
    siteName: "SPA Roofing",
    images: [{ url: "/images/hero-house.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    alternateLocale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPA Roofing | Quality Above All",
    description: "Professional roofing services throughout Arkansas.",
    images: ["/images/hero-house.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#244b35",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
