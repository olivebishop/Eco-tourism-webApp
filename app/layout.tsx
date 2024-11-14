import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'sonner'
import AuthWrapper from '@/components/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'



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
    default: 'Forestline Tours',
    template: `|Forestline Tours`
  },
  description: 'Tour agency that connects tourist with magical destinations',
  keywords: ['African Safaris', 'Tours in Nairobi', 'Kenya Safaris', 'Best African Tour Company', 'Big Five Safaris', 'Nairobi Tours and Safaris', 'Top Safari Company in Africa', 'Wildlife Tours in Kenya', 'Luxury Safaris', 
    'Adventure Tours Africa', 'Forestline Tours, Kenya', 'Forestline Tours, Nairobi', 'Forestline Tours, Africa', 'Forestline Tours, Best Tour Company in Africa', 'Forestline Tours, Best Tour Company in Kenya', 'Forestline Tours, Best Tour Company in Nairobi,Forestline Packages, Diani Travel Packages, Mombasa Travel Packages, Nairobi Travel Packages, Kenya Travel Packages, Africa Travel Packages, Best Travel Packages in Africa, Best Travel Packages in Kenya, Best Travel Packages in Nairobi, Best Travel Packages in Diani, Best Travel Packages in Mombasa',],
  openGraph: {
    images: '/og-image.png'
  },
  twitter: {
    site: '@Forestline Tours',
    creator: '@forestlinetours',
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
        <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f69895d8-3ecd-40e1-820b-c2bddf530d37"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
      </html>
    </AuthWrapper>
  );
}



{/* <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="f69895d8-3ecd-40e1-820b-c2bddf530d37" data-blockingmode="auto" type="text/javascript"></Script> */}