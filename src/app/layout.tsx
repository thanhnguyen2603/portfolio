import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Quang Xuan Thanh — Web Developer & SEO Specialist",
  description:
    "Portfolio of Nguyen Quang Xuan Thanh — Web Developer and SEO Specialist with 5+ years of experience in PHP, Laravel, Next.js, and WordPress.",
  keywords: [
    "web developer",
    "SEO specialist",
    "portfolio",
    "Nguyen Quang Xuan Thanh",
    "PHP",
    "Laravel",
    "Next.js",
    "WordPress",
  ],
  authors: [{ name: "Nguyen Quang Xuan Thanh" }],
  openGraph: {
    title: "Nguyen Quang Xuan Thanh — Web Developer & SEO Specialist",
    description:
      "5+ years of experience building and optimizing production websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
