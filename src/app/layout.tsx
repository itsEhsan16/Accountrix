import type { Metadata } from "next";
import { Crimson_Pro, Source_Sans_3, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson-pro",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Accountrix Solutions | Professional Accounting",
  description:
    "Smart Accounting, Simple Solutions. We provide clarity, compliance, and confidence for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${sourceSans.variable} ${publicSans.variable} h-full antialiased text-[#5a5854] bg-[#f9f8f6]`}
    >
      <body className="font-sans min-h-full flex flex-col pt-[73px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
