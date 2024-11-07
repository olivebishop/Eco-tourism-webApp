import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'sonner'
import AuthWrapper from '@/components/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.olivebishop.me"),
  title: {
    default: 'EcoTourism',
    template: `%s | EcoTourism`
  },
  description: 'Tour agency that connects tourist with magical destinations',
  keywords: ['African Safaris', 'Tours in Nairobi', 'Kenya Safaris', 'Best African Tour Company', 'Big Five Safaris', 'Nairobi Tours and Safaris', 'Top Safari Company in Africa', 'Wildlife Tours in Kenya', 'Luxury Safaris', 
    'Adventure Tours Africa', 'Sol of African Tours'],
  openGraph: {
    images: '/og-image.png'
  },
  twitter: {
    site: '@ecotourism',
    creator: '@ecotourism',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
      </html>
    </AuthWrapper>
  );
}