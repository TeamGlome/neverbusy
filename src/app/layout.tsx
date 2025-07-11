import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Never Busy - AI-Powered Unified Communications Platform",
  description: "Always available. Always working. Never busy. AI-powered unified communications platform for property management, developers, and Microsoft Teams users. No per-user licensing.",
  keywords: ["VoIP", "SMS", "MMS", "unified communications", "AI", "property management", "Microsoft Teams", "API", "telecommunications"],
  authors: [{ name: "Never Busy" }],
  creator: "Never Busy",
  openGraph: {
    title: "Never Busy - AI-Powered Unified Communications",
    description: "Always available. Always working. Never busy. AI-powered unified communications platform with no per-user licensing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Busy - AI-Powered Unified Communications",
    description: "Always available. Always working. Never busy. AI-powered unified communications platform with no per-user licensing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
