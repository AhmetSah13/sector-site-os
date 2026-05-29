import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { activeSiteConfig } from "@/config";
import { buildSiteMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildSiteMetadata(activeSiteConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd config={activeSiteConfig} />
        {children}
      </body>
    </html>
  );
}
