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
