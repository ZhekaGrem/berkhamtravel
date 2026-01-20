# CLAUDE.md - Instructions for AI Development

## Project Overview

You are building **Berkham Private Travel & Concierge** - a premium dark luxury landing page for high-end travel concierge services.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- CSS Modules (NO Tailwind - pure CSS only)
- Framer Motion for animations
- React Hook Form + Zod for forms

---

## Critical Design Principles

### 1. Dark Luxury Aesthetic
This is NOT a standard corporate site. Every pixel must breathe elegance:
- **Slow, smooth animations** (rushed = cheap)
- **Generous white space** (cramped = unprofessional)
- **Perfect typography hierarchy**
- **Subtle, refined interactions**

### 2. Color System (STRICT)

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

**DO NOT deviate from these colors.** No #333, no #999, no random grays.

### 3. Typography



**Font Loading:**
Use `next/font` to preload fonts properly:

```typescript
import { Bodoni_Moda, Raleway , Cormorant } from "next/font/google";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
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
```

---

## Component Architecture

### File Naming Convention

```
ComponentName/
├── ComponentName.tsx       # Main component
├── ComponentName.module.css  # Styles
└── index.ts                # Export
```

### CSS Modules Pattern

```css
/* Component.module.css */
.container {
  background: var(--color-primary-bg);
  padding: var(--spacing-xl);
}

.title {
  font-family: var(--font-bodoni);
  font-size: clamp(2rem, 5vw, 4rem); /* Responsive */
  color: var(--color-text-primary);
}

.accent {
  color: var(--color-text-accent);
}

/* Hover states */
.link:hover {
  color: var(--color-text-accent);
  transition: color 0.3s ease;
}
```

**Import in component:**
```tsx
import styles from './Component.module.css';

export default function Component() {
  return <div className={styles.container}>...</div>;
}
```

---

## Animation Guidelines (Framer Motion)

### Spring Physics for Luxury Feel

**DO NOT use default spring settings.** They are too bouncy.

```typescript
// Luxury spring - slow and smooth
const luxurySpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1.2
};

// Usage
<motion.div
  animate={{ width: isActive ? '50%' : '20%' }}
  transition={luxurySpring}
/>
```

### Accordion Animation Rules

**Desktop Horizontal Accordion:**
```typescript
<motion.div
  className={styles.accordionCard}
  onHoverStart={() => setActive(id)}
  animate={{
    flex: isActive ? 3 : 1,
    filter: isActive ? 'grayscale(0%)' : 'grayscale(50%)'
  }}
  transition={luxurySpring}
>
  {/* Background image */}
  <motion.img
    src={image}
    className={styles.background}
    animate={{ scale: isActive ? 1.1 : 1 }}
    transition={{ duration: 0.8 }}
  />
  
  {/* Text content - only show when active */}
  <AnimatePresence>
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {description}
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>
```

**Mobile Vertical Accordion:**
```typescript
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {item.content}
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>
```

### Scroll-triggered Animations

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

---

## Data Structure

### Services Data

```typescript
// data/services.ts
export interface ServiceItem {
  id: string;
  title: string;
  description: string; // Max 150 chars
  image: string;
  category: 'travel' | 'access' | 'concierge';
}

export const servicesData: ServiceItem[] = [
  {
    id: 'premium-hotels',
    title: 'Premium Hotels',
    description: 'The right hotel is about more than availability. We arrange preferred conditions and thoughtful details.',
    image: '/images/services/hotels.webp',
    category: 'travel'
  },
  // ... rest
];

export const servicesByCategory = {
  travel: servicesData.filter(s => s.category === 'travel'),
  access: servicesData.filter(s => s.category === 'access'),
  concierge: servicesData.filter(s => s.category === 'concierge'),
};
```

### Destinations Data

```typescript
// data/destinations.ts
export const destinations = [
  { name: 'Bodrum', image: '/images/destinations/bodrum.webp' },
  { name: 'Cannes', image: '/images/destinations/cannes.webp' },
  // ... 14 total
];
```

### Events Data

```typescript
// data/events.ts
export const eventCategories = {
  sporting: [
    'F1', 'Premier League', 'Champions League', 'Tennis', 
    'Golf', 'UFC', 'NBA', 'Olympics'
  ],
  entertainment: [
    'Coachella', 'Burning Man', 'Glastonbury', 
    'Tomorrowland 2025', 'Rolling Loud'
  ],
  redCarpet: [
    'Met Gala', 'Oscars', 'Fashion Week', 
    'Film Festivals', 'Film Premieres'
  ]
};
```

---

## Form Handling

### Contact Form Schema

```typescript
// lib/validation.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### Form Component

```typescript
// components/Contact/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validation';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>
      {/* ... rest of fields */}
    </form>
  );
}
```

---

## API Routes

### Telegram Integration

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    const botToken = process.env.TELEGRAM_BOT_TOKEN!;
    const chatId = process.env.TELEGRAM_CHAT_ID!;

    const message = `
🔔 New Inquiry from Berkham Travel

👤 Name: ${validated.name}
📧 Email: ${validated.email}
📱 Phone: ${validated.phone}

💬 Message:
${validated.message}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

---

## Image Optimization

### next/image Usage

```tsx
import Image from 'next/image';

// Hero image
<Image
  src="/images/hero-jet.webp"
  alt="Private jet interior"
  fill
  priority
  quality={90}
  className={styles.heroImage}
/>

// Service card image
<Image
  src={service.image}
  alt={service.title}
  width={1200}
  height={800}
  quality={85}
  className={styles.serviceImage}
/>

// Destination thumbnail
<Image
  src={destination.image}
  alt={destination.name}
  width={800}
  height={800}
  quality={80}
  loading="lazy"
/>
```

### CSS for Images

```css
/* styles.module.css */
.heroImage {
  object-fit: cover;
  object-position: center;
  opacity: 0.6;
}

.serviceImage {
  object-fit: cover;
  transition: transform 0.8s ease;
}

.serviceImage:hover {
  transform: scale(1.1);
}
```

---

## Responsive Design

### Breakpoints

```css
/* Use these exact breakpoints */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Mobile-First Example

```css
/* Mobile first (default) */
.accordion {
  display: flex;
  flex-direction: column;
  height: auto;
}

/* Desktop */
@media (min-width: 1024px) {
  .accordion {
    flex-direction: row;
    height: 600px;
  }
}
```

---

## Performance Optimization

### Critical CSS

Load critical styles inline in layout:

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Code Splitting

```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const ServiceAccordion = dynamic(
  () => import('@/components/Services/ServiceAccordion'),
  { loading: () => <p>Loading...</p> }
);
```

### Image Lazy Loading

```tsx
// Only hero should have priority
<Image src="..." priority />

// All others should lazy load
<Image src="..." loading="lazy" />
```

---

## Common Mistakes to Avoid

### ❌ DON'T DO THIS:

```css
/* Generic transitions */
.element {
  transition: all 0.5s;
}

/* Random colors */
.text {
  color: #999999;
}

/* Fixed pixel sizes */
.heading {
  font-size: 48px;
}
```

### ✅ DO THIS:

```css
/* Specific transitions */
.element {
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Design system colors */
.text {
  color: var(--color-text-secondary);
}

/* Responsive sizes */
.heading {
  font-size: clamp(2rem, 4vw, 3rem);
}
```

---

## Testing Checklist

Before considering any component "done":

- [ ] Tested on mobile (375px width)
- [ ] Tested on tablet (768px width)
- [ ] Tested on desktop (1440px width)
- [ ] Animations smooth (60fps)
- [ ] No layout shift (CLS)
- [ ] Images optimized (<200KB)
- [ ] Hover states work
- [ ] Focus states visible
- [ ] Semantic HTML
- [ ] ARIA labels where needed

---

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Production preview
npm run start

# Lint
npm run lint

# Type check
npm run type-check
```

---

## Final Reminders

1. **This is a luxury brand.** Every detail matters. Slow, elegant, refined.

2. **Use CSS Modules only.** No Tailwind, no inline styles, no styled-components.

3. **Framer Motion for all animations.** No CSS transitions for layout changes.

4. **Images must be WebP.** No JPEGs, no PNGs for photos.

5. **TypeScript strict mode.** No `any` types.

6. **Mobile first.** Always start with mobile layout.

7. **Test on real devices.** Simulators lie.

8. **60fps animations.** Use `will-change` sparingly.

9. **Semantic HTML.** `<section>`, `<article>`, `<nav>`, proper headings.

10. **Accessibility.** Keyboard navigation, ARIA labels, focus states.

---

## Support

If you encounter issues:

1. Check this document first
2. Review the main README.md
3. Check Framer Motion docs for animation issues
4. Check Next.js docs for SSR/routing issues

**Remember:** Premium execution, not just premium design. Quality over speed.
