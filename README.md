# BERKHAM PRIVATE TRAVEL & CONCIERGE

## 📋 Огляд проекту

Преміум-лендінг для luxury travel concierge сервісу з dark elegant дизайном, інтерактивними акордеонами та плавними анімаціями.

---

## 🎯 Технічний стек

```
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: CSS Modules (NO Tailwind)
Animation: Framer Motion
Fonts: Bodoni Moda, Raleway, Raleway
Image Optimization: next/image (WebP)
Form Handling: React Hook Form + Zod
Backend: Telegram Bot API
```

---

## 🎨 Design System

### Кольори

```css
--color-primary-bg: #0A0A0A; /* Основний фон */
--color-secondary-bg: #1A1A1A;/* Другорядний фон */
--color-text-primary: #F5F5F5;/* Основний текст */
--color-text-accent: #D4AF37; /* Акцентний текст (gold) */
--color-text-secondary: #8A8A8A; /* Стандартний текст (сірий) */
--color-border: rgba(212, 175, 55, 0.15);/* Gold border */
--color-overlay: rgba(10, 10, 10, 0.92);
--color-highlight: #2A2A2A; 
 
```

### Типографія

```css
/* Заголовки */
font-family: 'Bodoni Moda', serif;

/* Основний текст */
font-family: 'Raleway', sans-serif;

/* Акцентний/Рукописний */
font-family: 'Cormorant', italic;
```

### Font Sizes

```
Hero Heading: 72px (desktop) / 36px (mobile)
Section Heading: 48px (desktop) / 32px (mobile)
Card Title: 24px
Body Text: 16px
Small Text: 14px
Caption: 12px
```

### Spacing Scale

```
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
3xl: 96px
4xl: 128px
```

### Border Radius

```
sm: 8px
md: 12px
lg: 16px
```

---

## 📐 Структура сторінки

### 1. Navigation Bar (Fixed)
- Висота: 80px
- Background: rgba(17, 17, 17, 0.8) з backdrop-blur
- Border-bottom: 1px solid rgba(235, 192, 76, 0.2)
- Logo ліворуч, Navigation центр, Social icons праворуч
- Mobile: Hamburger menu з fullscreen overlay

### 2. Hero Section (100vh)
- Full-screen background image або video
- Gradient overlay: linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0.7) 100%)
- Centered content з fade-in animation
- Scroll indicator (animated arrow)

### 3. Trust Signal Section
- Padding: 64px 0
- Leading Hotels of The World badge
- Centered layout, max-width: 800px
- Subtle pulse animation на badge

### 4. About Us Section
- Two-column grid (desktop) / Stack (mobile)
- Padding: 96px 0
- Image з parallax effect

### 5. Services (3 Accordion Sections)

#### Desktop: Horizontal Accordions
- Height: 600px
- Default: Перша картка 50% width, решта розподілені рівномірно
- Hover: Active картка 50%, інші стискаються
- Spring animation: `stiffness: 100, damping: 20, mass: 1.2`

**TRAVEL & STAY** (5 cards):
1. Premium Hotels
2. Yacht Charters
3. Private Aviation
4. Ground Transportation
5. Exclusive Villa Rentals

**ACCESS & EXPERIENCES** (3 cards):
1. Restaurants & Nightlife
2. Exclusive Event Access
3. Event Planning & Private Celebrations

**CONCIERGE SERVICES** (3 cards):
1. Health, Well-Being & Beauty
2. Gift Procurement & Personal Shopping
3. Floral Gestures

#### Mobile: Vertical Accordions
- Stacked категорії з expand/collapse
- Items з'являються з stagger effect (50ms delay)
- Height: auto з smooth transition

### 6. Top Destinations
- Grid layout: 4 columns (desktop) / 2 columns (mobile)
- 14 destinations з hover zoom effect
- Card height: 400px (desktop) / 300px (mobile)

**Destinations:**
Bodrum, Cannes, Courchevel, Dubai, Ibiza, London, Mallorca, Marbella, Monaco, Mykonos, Paris, Porto Cervo, Saint Tropez, Tulum

### 7. Exclusive Event Access
- 3-column grid (desktop) / Accordion (mobile)
- Categories: Sporting, Entertainment, Red Carpet
- List items з stagger fade-in

### 8. Trusted Partners
- Logo grid (6 columns desktop)
- Grayscale → Color на hover
- Logos з Berkeley Travel partners

### 9. Contact Section
- Split layout: Form + Contact Info
- WhatsApp/Telegram buttons як primary CTAs
- Form validation з React Hook Form + Zod

### 10. Footer
- 3-column grid
- Logo + Quick Links + Social/Legal
- Copyright bar

---

## 🎬 Анімації

### Framer Motion Variants

```typescript
// Hero text animation
const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

// Accordion spring physics
const accordionSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1.2
}

// Stagger children (mobile accordion items)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

// Image hover scale
const imageHover = {
  scale: 1.1,
  transition: { duration: 0.8 }
}
```

### CSS Transitions

```css
/* Smooth transitions для links */
.link {
  transition: color 0.3s ease;
}

/* Backdrop blur для navigation */
.nav {
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
}

/* Image overlay */
.image-overlay {
  transition: opacity 0.5s ease;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

---



---

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.3.0"
  }
}
```

---

## 🔧 Налаштування

### Environment Variables

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=office@berkhamtravel.com
SMTP_PASS=your_app_password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
```

---

## 📊 Performance Targets

- **Lighthouse Score (Desktop):** 95+
- **Lighthouse Score (Mobile):** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3.5s

### Optimization Checklist

- [ ] Всі images через `next/image` з WebP format
- [ ] Lazy loading для below-fold content
- [ ] Font preloading (Bodoni Moda, Raleway)
- [ ] Code splitting (dynamic imports для heavy components)
- [ ] Image compression (max 200KB per image)
- [ ] Minification CSS/JS
- [ ] Gzip/Brotli compression

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Custom Domain Setup

1. Domain: `berkhamtravel.com`
2. DNS: Point to Vercel
3. SSL: Auto-configured by Vercel
4. Email: Google Workspace ($6/month)
   - Setup: `office@berkhamtravel.com`
   - MX Records через Google Workspace console

---

## 📧 Email Setup (Google Workspace)

```
MX Records:
Priority 1: ASPMX.L.GOOGLE.COM
Priority 5: ALT1.ASPMX.L.GOOGLE.COM
Priority 5: ALT2.ASPMX.L.GOOGLE.COM
Priority 10: ALT3.ASPMX.L.GOOGLE.COM
Priority 10: ALT4.ASPMX.L.GOOGLE.COM

SMTP Settings:
Host: smtp.gmail.com
Port: 587
Security: TLS
Username: office@berkhamtravel.com
Password: [App-specific password]
```

---

## 🤖 Telegram Bot Setup

```bash
# 1. Create bot via @BotFather
/newbot
# Name: Berkham Travel Bot
# Username: berkham_travel_bot

# 2. Get bot token
# Save to .env.local as TELEGRAM_BOT_TOKEN

# 3. Get your chat ID
# Send message to @userinfobot
# Save ID to .env.local as TELEGRAM_CHAT_ID
```

### Telegram Integration Code

```typescript
// lib/telegram.ts
export async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `
🔔 New Inquiry from Berkham Travel

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

💬 Message:
${data.message}
  `;

  const response = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    }
  );

  return response.ok;
}
```

---

## 🎨 Content Requirements

### Images Needed

**Hero Section:**
- 1 high-res video або image (1920x1080, <5MB)
- Luxury jet interior або yacht deck

**Services Accordion (11 images):**
- Premium Hotels: Luxury hotel lobby (1200x800)
- Yacht Charters: Yacht deck/sea view (1200x800)
- Private Aviation: Jet interior/exterior (1200x800)
- Ground Transportation: Luxury car detail (1200x800)
- Villas: Pool/villa exterior (1200x800)
- Restaurants: Fine dining setup (1200x800)
- Events: Red carpet/venue (1200x800)
- Event Planning: Table setting (1200x800)
- Health & Beauty: Spa texture (1200x800)
- Gifts: Jewelry/luxury box (1200x800)
- Floral: Flowers close-up (1200x800)

**Destinations (14 images):**
- Square format 800x800
- Iconic landmarks для кожної локації

**Partners:**
- Leading Hotels of The World logo (SVG)
- Інші partner logos з Berkeley Travel (SVG preferred)

### Copy Writing

- Всі тексти з PDF мають бути вичитані native English speaker
- Максимум 150 символів для accordion descriptions
- CTAs мають бути короткими: "Explore", "Contact Us", "Get Started"

---

## ✅ Pre-Launch Checklist

### Technical
- [ ] All images optimized (<200KB)
- [ ] Fonts loaded correctly
- [ ] Mobile responsive tested (iPhone, Android)
- [ ] Desktop tested (Chrome, Safari, Firefox)
- [ ] Forms validation working
- [ ] Telegram bot receives messages
- [ ] Email forwarding configured
- [ ] SSL certificate active
- [ ] Analytics tracking installed
- [ ] SEO meta tags configured

### Content
- [ ] All copy proofread
- [ ] Partner logos uploaded
- [ ] Leading Hotels badge visible
- [ ] Contact information correct
- [ ] WhatsApp/Telegram links working
- [ ] Instagram link active

### Legal
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Cookie consent banner (if EU traffic)
- [ ] GDPR compliance (if applicable)

---

## 🐛 Known Issues & Solutions

### Issue: Accordion jerky animation
**Solution:** Use `will-change: transform` на accordion cards

### Issue: CLS при image loading
**Solution:** Завжди вказувати width/height для next/image

### Issue: Mobile menu не закривається
**Solution:** Додати useEffect для body overflow-hidden

### Issue: Fonts не завантажуються
**Solution:** Preload в layout.tsx через next/font

---

## 📞 Support & Contacts

**Client:** Berkham Private Travel & Concierge  
**Developer:** L&H Studio  
**Contact:** office@berkhamtravel.com  
**WhatsApp:** +33 679 105 270

---

## 📄 License

Proprietary - All rights reserved by Berkham Travel & Concierge LLP
