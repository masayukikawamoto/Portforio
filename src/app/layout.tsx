import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Head from "next/head";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "A Simple Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <title>Masa Kawamoto | A Simple Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={openSans.className}>
        <div className="">
          <Navigation />
          <main className="">{children}</main>

          <footer className="flex items-center text-center h-12 z-50 bg-transparent">
            <div className="text-xs sm:text-sm h-12 text-gray-600">
              &copy; {new Date().getFullYear()} MASA
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
