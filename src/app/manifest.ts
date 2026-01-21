import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Berkham Private Travel & Concierge',
    short_name: 'Berkham Travel',
    description: 'Bespoke luxury travel experiences, private aviation, yacht charters, and exclusive concierge services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#D4AF37',
    icons: [
      {
        src: 'https://www.berkhamtrvl.com/icon1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://www.berkhamtrvl.com/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
