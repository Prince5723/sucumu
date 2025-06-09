import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sucumu - Healthy Snacks",
  description: "Premium quality flaxseeds snacks loaded with protein, fiber, and omega-3s. A healthy snack for everyone.",
  keywords: "healthy snacks, flaxseeds, protein snacks, fiber-rich snacks, omega-3 snacks, nutritious snacks, Sucumu",
  authors: [{ name: "Sucumu" }],
  creator: "Sucumu",
  publisher: "Sucumu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sucumu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sucumu - Healthy Snacks",
    description: "Premium quality flaxseeds snacks loaded with protein, fiber, and omega-3s. A healthy snack for everyone.",
    url: 'https://sucumu.com',
    siteName: 'Sucumu',
    images: [
      {
        url: '/sucumu-branding.png',
        width: 1200,
        height: 630,
        alt: 'Sucumu Healthy Snacks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sucumu - Healthy Snacks",
    description: "Premium quality flaxseeds snacks loaded with protein, fiber, and omega-3s. A healthy snack for everyone.",
    images: ['/sucumu-branding.png'],
    creator: '@sucumu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
