import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Playfair_Display, Raleway, Cormorant } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Raleway({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"]
});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.berkhamtrvl.com'),
  title: {
    default: "Berkham Private Travel & Concierge | Luxury Travel Services",
    template: "%s | Berkham Travel"
  },
  description: "Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services. Where travel meets elegance.",
  keywords: [
    "luxury travel",
    "private jet charter",
    "yacht charter",
    "concierge services",
    "VIP travel",
    "exclusive experiences",
    "luxury hotels",
    "private aviation",
    "premium transfers",
    "F1 tickets",
    "fashion week access",
    "Monaco Grand Prix",
    "Coachella VIP",
    "exclusive events",
    "lifestyle management"
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  authors: [{ name: "Berkham Travel" }],
  creator: "Berkham Private Travel & Concierge",
  publisher: "Berkham Private Travel & Concierge",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.berkhamtrvl.com',
    title: 'Berkham Private Travel & Concierge | Luxury Travel Services',
    description:
      'Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services. Where travel meets elegance.',
    siteName: 'Berkham Private Travel',
    images: [
      {
        url: '/logo/black_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Berkham Private Travel & Concierge - Luxury Travel Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berkham Private Travel & Concierge',
    description:
      "Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services.",
    images: ['/logo/black_logo.jpg'],
    creator: '@berkhamtravel',
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
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'travel',
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.berkhamtrvl.com/#organization",
      "name": "Berkham Private Travel & Concierge",
      "url": "https://www.berkhamtrvl.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.berkhamtrvl.com/logo/logo.png",
        "width": 300,
        "height": 80
      },
      "sameAs": [
        "https://www.instagram.com/berkhamtravel/",
        "https://wa.me/33679105270",
        "https://t.me/+33679105270"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33679105270",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "French", "Russian"]
      }
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.berkhamtrvl.com/#business",
      "name": "Berkham Private Travel & Concierge",
      "description": "Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services for discerning clients worldwide.",
      "url": "https://www.berkhamtrvl.com",
      "telephone": "+33679105270",
      "email": "info@www.berkhamtrvl.com",
      "priceRange": "$$$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "France"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "geoRadius": "10000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Luxury Travel Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private Aviation",
              "description": "Charter flights and private jet services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Yacht Charters",
              "description": "Luxury yacht rentals and maritime experiences"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Concierge Services",
              "description": "24/7 personal concierge and lifestyle management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Exclusive Events Access",
              "description": "VIP tickets to sporting events, concerts, and red carpet events"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.berkhamtrvl.com/#website",
      "url": "https://www.berkhamtrvl.com",
      "name": "Berkham Private Travel & Concierge",
      "publisher": {
        "@id": "https://www.berkhamtrvl.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script type="text/javascript" id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v4wxwqa8n0");`}
        </Script>
        <GoogleAnalytics gaId="G-1TL6LPN01T" />

      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
