import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Italianno, Montserrat, Cormorant } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

const playfairDisplay = Italianno({
  variable: "--font-playfairDisplay",
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "300",
  display: 'swap',
  preload: true,
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  display: 'swap',
  preload: true,
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
  description: "Private travel & lifestyle concierge: premium hotels, yacht charters, private aviation, villas and VIP event access in Monaco, Courchevel, Dubai, London & beyond.",
  keywords: [
    "premium hotel accommodation",
"yacht charters",
"aviation",
"villa rental",
"transportation",
"exclusive event access",

"Berkham Private Travel & Concierge",
"private travel concierge",
"bespoke",
"personal travel planning",
"tailored travel experiences",
"custom travel itineraries",
"private travel management",
"international travel concierge",
"executive travel concierge",

"private clients travel services",
"high net worth travel services",
"confidential travel planning",
"discreet travel services",
"personalised travel solutions",

"yacht charter concierge",
"private jet charter concierge",
"private villa rentals",
"exclusive event access",
"elite hospitality services",

"UK travel concierge",
"Monaco travel concierge",
"French Riviera concierge",
"European travel concierge",
"international concierge services",
"London Dubai Swiss",

"personal buyer assistant",
"private buyer services",
"luxury shopping concierge",
"fashion buyer assistant",

"villas",
"luxury villa rentals",
"private villa rentals",
"exclusive villa rentals",
"high end villa rentals",
"private villas worldwide",

"yachts",
"luxury yacht charter",
"private yacht charter",
"exclusive yacht charters",
"superyacht charter",
"yacht charter concierge",
"cars",
"luxury car rental",
"exclusive car rental",
"luxury car hire with driver",
"chauffeur driven luxury cars",
"supercar rental",
"aviation",
"private jet charter",
"luxury aviation services",
"helicopter charter services"

  ],
  icons: {
    icon: [
      { url: 'https://www.berkhamtrvl.com/favicon.ico', sizes: '48x48' },
      { url: 'https://www.berkhamtrvl.com/icon0.svg', type: 'image/svg+xml' },
      { url: 'https://www.berkhamtrvl.com/icon1.png', type: 'image/png', sizes: '96x96' }
    ],
    shortcut: 'https://www.berkhamtrvl.com/favicon.ico',
    apple: [
      { url: 'https://www.berkhamtrvl.com/apple-icon.png' },
      { url: 'https://www.berkhamtrvl.com/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },

  authors: [{ name: "Berkham Private Travel & Concierge" }],
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
    title: 'Berkham Private Travel & Concierge',
    description:
      'Journeys built around your priorities, with close attention to privacy, timing and detail. Premium hotels, yacht charters, private aviation, villas and exclusive event access.',
    siteName: 'Berkham Private Travel & Concierge',
    images: [
      {
        url: '/logo/seo.png',
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
      "Journeys built around your priorities, with close attention to privacy, timing and detail. Premium hotels, yacht charters, private aviation, villas and exclusive event access.",
    images: ['/logo/seo.png'],
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
      "@type": ["TravelAgency", "Organization"],
      "@id": "https://www.berkhamtrvl.com/#organization",
      "name": "Berkham Private Travel & Concierge",
      "legalName": "Berkham Private Travel & Concierge LLP",
      "url": "https://www.berkhamtrvl.com/",
      "description": "Private travel and lifestyle concierge arranging premium hotels, yacht charters, private aviation, villa rentals, ground transportation and exclusive event access for private clients worldwide.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.berkhamtrvl.com/logo/logo.png",
        "width": 300,
        "height": 80
      },
      "image": "https://www.berkhamtrvl.com/logo/seo.png",
      "foundingDate": "2026-01-22",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "UK Companies House",
        "value": "OC459481"
      },
      "telephone": "+33679105270",
      "email": "office@berkhamtrvl.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 Brayford Square",
        "addressLocality": "London",
        "postalCode": "E1 0SG",
        "addressCountry": "GB"
      },
      "areaServed": [
        "Bodrum", "Cannes", "Courchevel", "Dubai", "Ibiza", "London", "Mallorca", "Marbella",
        "Monaco", "Mykonos", "Paris", "Saint-Tropez", "St. Barth", "St. Moritz", "Tulum"
      ],
      "sameAs": [
        "https://www.instagram.com/berkhamtravel/",
        "https://find-and-update.company-information.service.gov.uk/company/OC459481"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+33679105270",
        "email": "office@berkhamtrvl.com",
        "availableLanguage": ["English", "French", "Russian"]
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
      "url": "https://www.berkhamtrvl.com/",
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
        {/* DNS prefetch and preconnect for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <Script type="text/javascript" id="microsoft-clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v4wxwqa8n0");`}
        </Script>
        <GoogleAnalytics gaId="G-XQVFHS0DHX" />
      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
