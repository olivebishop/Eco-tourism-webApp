import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    default: 'EcoTourism`',
    template: `%s | EcoTourism`
  },
  description: 'Tour agency that connects tourist with magical destinations',
  openGraph: {
    description: 'Tour agency that connects tourist with magical destinations .',
    images: ['/images/footer_image.jpg'],
    url: 'https://olivebishop.me'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoTourism`',
    description: 'Tour agency that connects tourist with magical destinations',
    siteId: "",
    creator: "olive bishop",
    creatorId: "",
    images: ['/images/footer_image.jpg'],
  },
}

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
        {children}
      </body>
    </html>
  );
}
