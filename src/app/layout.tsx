import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"

import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

import "./globals.css";

const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto" });

const beyond = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Beyond.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beyond",
});

export const metadata: Metadata = {
  title: `D & M Gettin' hooked!`,
  description: `Keeping our peeps updated on the plans for the occasion`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={`relative ${notoSerif.variable} ${beyond.variable} font-sans`}
      >
        <div className="monogram-tile-overlay"></div>
        <Header />
        <main className="min-h-screen mx-auto max-w-3xl bg-white rounded-xl drop-shadow-2xl py-12 bg-opacity-60">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
