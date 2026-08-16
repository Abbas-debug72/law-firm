import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Corporate Law Firm`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ["law firm", "corporate law", "litigation", "attorneys", "legal counsel"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Corporate Law Firm`,
    description: SITE.description,
    images: [
      {
        url: "https://picsum.photos/seed/sterling-og/1200/630",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — corporate law`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Corporate Law Firm`,
    description: SITE.description,
    images: ["https://picsum.photos/seed/sterling-og/1200/630"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#122b4e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${source.variable}`}>
      <head>
        {/* Warm up the connection to the placeholder image CDN (hero LCP). */}
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="preconnect" href="https://fastly.picsum.photos" />
      </head>
      <body className="bg-ivory text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-deep"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
