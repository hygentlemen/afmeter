import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "afmeter - Smart Metering Solutions",
  description: "Leading manufacturer of STS prepaid energy meters, water meters and gas meters. 500,000+ meters deployed worldwide.",
  keywords: "STS prepaid meter, energy meter, water meter, gas meter, smart metering, AMI system",
  openGraph: {
    title: "afmeter - Smart Metering Solutions",
    description: "Leading manufacturer of STS prepaid energy meters, water meters and gas meters. 500,000+ meters deployed worldwide.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "afmeter - Smart Metering Solutions",
    description: "Leading manufacturer of STS prepaid energy meters, water meters and gas meters. 500,000+ meters deployed worldwide.",
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
