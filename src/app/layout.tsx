import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Raleway , Cormorant } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Raleway ({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"]
});
export const metadata: Metadata = {
  title: "Berkham Private Travel & Concierge | Luxury Travel Services",
  description: "Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services. Where travel meets elegance.",
  keywords: ["luxury travel", "private jet", "yacht charter", "concierge", "VIP travel", "exclusive experiences"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Berkham Private Travel & Concierge | Luxury Travel Services',
    description:
      'Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services. Where travel meets elegance.',
    siteName: 'Berkham',
    images: [
      {
        url: '/logo/black_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Berkham Private Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berkham Private Travel',
    description:
      "Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services.",
    images: ['/logo/black_logo.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${montserrat.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
