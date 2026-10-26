import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_URL, assets } from "@/lib/site";

const space_grotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pentacore Solution",
    template: "%s | Pentacore Solution",
  },
  description: "Web, App, and AI Solutions for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pentacore Solution",
    description: "Web, App, and AI Solutions for modern businesses.",
    url: SITE_URL,
    siteName: "Pentacore Solution",
    type: "website",
  },
  icons: {
    icon: assets.favicon,
    shortcut: assets.favicon,
    apple: assets.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${space_grotesk.variable} ${space_grotesk.className} antialiased bg-black text-foreground`}>
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`if (localStorage.getItem("pentacore-theme") === "light") document.documentElement.dataset.theme = "light";`}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
