import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MASA | Portfolio",
    template: "%s | MASA",
  },
  description:
    "フロントエンド・フルスタック開発者のポートフォリオ。Web技術を中心としたプロジェクト実績を紹介します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "MASA Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`dark ${inter.variable}`}>
      <body className="noise-bg min-h-screen flex flex-col bg-dark-bg text-dark-text font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
